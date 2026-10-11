const express = require("express");
const router = express.Router();
const crypto = require("crypto");

const Booking = require("../models/booking.js");
const { isLoggedIn } = require("../middleware.js");

router.post("/create-order", isLoggedIn, async (req, res) => {
  try {
    const { bookingId } = req.body;

    console.log("Payment request:", req.body);

    const booking = await Booking.findById(bookingId)
      .populate("listing")
      .populate("user");

    if (!booking) {
      return res.status(404).send("Booking not found");
    }

    if (!booking.user._id.equals(req.user._id)) {
      return res.status(403).send("Not allowed");
    }

    const txnid = "TXN" + Date.now();

    const amount = Number(booking.totalPrice).toFixed(2);

    const productinfo = `Booking for ${booking.listing.title}`;
    const firstname = booking.user.username;
    const email = booking.user.email;

    const hashString = `${process.env.PAYU_KEY}|${txnid}|${amount}|${productinfo}|${firstname}|${email}|||||||||||${process.env.PAYU_SALT}`;

    const hash = crypto.createHash("sha512").update(hashString).digest("hex");

    res.render("payment/payu", {
      key: process.env.PAYU_KEY,
      txnid,
      amount,
      productinfo,
      firstname,
      email,
      phone: booking.user.phone || "",
      hash,
      bookingId: booking._id,
    });
  } catch (error) {
    console.error("PAYMENT ERROR:", error);
    res.status(500).send("Payment initialization failed");
  }
});

module.exports = router;
