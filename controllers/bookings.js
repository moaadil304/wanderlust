const Booking = require("../models/booking.js")
const Listing = require("../models/listing.js")

module.exports.createBooking = async(req , res) => {
try{
    const {listingId , checkIn , checkOut} = req.body;

     console.log("REQ.BODY:", req.body);
     console.log("USER:", req.user);

    // find listing

    const listing = await Listing.findById(listingId);

    if(!listing){
        return res.status(404).send("listing not found");
    }

    // consver dates

    const startDate = new Date(checkIn);
    const endDate  = new Date(checkOut);

    // validate date

    if(isNaN(startDate) || isNaN(endDate)){
        return res.status(400).send("invalid date");
    }

    if(endDate <= startDate){
        return res.status(400).send("check-out must be after check-in")
    }


    // calculate fare

    const difference = endDate.getTime() - startDate.getTime();
    const nights = Math.ceil(difference / (1000 * 60 * 60 * 24));


    // total price

    const totalPrice = nights * listing.price;

     console.log("NIGHTS:", nights);
     console.log("TOTAL PRICE:", totalPrice);

     const existingBooking = await Booking.findOne({
       listing: listingId,
       bookingStatus: "confirmed",
       checkIn: { $lt: endDate },
       checkOut: { $gt: startDate },
     });

     if (existingBooking) {
       return res
         .status(400)
         .send("This listing is already booked for selected dates");
     }

    // crete booking

    const booking = await Booking.create(
        {
            user : req.user._id,
            listing : listing._id,
            checkIn : startDate,
            checkOut : endDate,
            totalPrice : totalPrice,
            paymentStatus : "pending",
            bookingStatus:"pending"
        }
    )

    console.log("BOOKING CREATED:", booking);

    // redirect to booking page

    res.redirect(`/bookings/${booking._id}`);

}catch(error){
    console.error("BOOKING ERROR:", error);

    res.status(500).send(`
        <h2>Booking Error</h2>
        <p>${error.message}</p>
    `);
}
}

 
module.exports.showBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id)
      .populate("listing")
      .populate("user");

    if (!booking) {
      return res.status(404).send("Booking not found");
    }
    if (!booking.user._id.equals(req.user._id)) {
      return res.status(403).send("You are not allowed to view this booking");
    }

    res.render("bookings/show.ejs", {
      booking,
    });
  } catch (error) {
    console.error(error);

    res.status(500).send("Something went wrong");
  }
};