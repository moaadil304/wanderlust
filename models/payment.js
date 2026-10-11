const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
  {
    // Kis booking ke liye payment hai
    booking: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Booking",
      required: true,
    },

    // Kis user ne payment ki
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // Payment amount in rupees
    amount: {
      type: Number,
      required: true,
      min: 0,
    },

    // Razorpay Order ID
    razorpayOrderId: {
      type: String,
      default: null,
    },

    // Razorpay Payment ID
    razorpayPaymentId: {
      type: String,
      default: null,
    },

    // Razorpay Signature
    razorpaySignature: {
      type: String,
      default: null,
    },

    // Current payment status
    status: {
      type: String,
      enum: ["created", "paid", "failed"],
      default: "created",
    },

    currency: {
      type: String,
      default: "INR",
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Payment", paymentSchema);
