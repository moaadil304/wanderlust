const express = require("express");

const router = express.Router();

const bookingController = require("../controllers/bookings.js");

const {isLoggedIn} = require("../middleware.js");

router.post("/" , isLoggedIn , bookingController.createBooking);

router.get("/:id", isLoggedIn, bookingController.showBooking);


module.exports = router;
