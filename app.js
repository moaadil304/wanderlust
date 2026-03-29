if(process.env.NODE_ENV != "production"){
require("dotenv").config();
}

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate"); // for layout templating
const ExpressError = require("./utils/ExpressError.js");

const session = require("express-session"); // express session for cookie
const MongoStore = require("connect-mongo").default;  // for session store
const flash = require("connect-flash"); // for pop-up message only for one time

// authentication
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");

const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");

// mongodb connection

const dbUrl = process.env.ATLASDB_URL;
main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });
async function main() {
  await mongoose.connect(dbUrl);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate); // for creating layout
app.use(express.static(path.join(__dirname, "/public")));

// mongo session store
const store = MongoStore.create({
  mongoUrl: dbUrl,
  crypto: {
    secret: process.env.SECRET,
  },
  touchAfter: 24 * 3600,
});
console.log(MongoStore);

store.on("error" , (err)=>{
  console.log("Error in mongo session store.", err);
})
// express session options
const sessionOptions = {
  store,
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000, // one week time session
    maxAge: 7 * 24 * 60 * 60 * 1000, // max age of session is 1 week
    httpOnly: true, // for security purpose
  },
};

// app.get("/", (req, res) => {
//   res.send("hii am here");
// });

 


app.use(session(sessionOptions));
app.use(flash()); // for popup message only for one time

// Authentication
// specifies the number of iterations used in pbkdf2 hashing algorithm.
app.use(passport.initialize());
app.use(passport.session()); // used to keep a user logged in across multiple requests
// by connecting Passport with Express sessions.

passport.use(new LocalStrategy(User.authenticate())); //tells Passport to use username-password login and
//  delegate the verification logic to your User model.

// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser()); // login ke baad session me information store kraana
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currUser = req.user;
  // console.log(success);
  next();
});

//root route
app.get("/", (req, res) => {
  res.redirect("/listings");
});

// jhan bhi /listing aayega wha listings use krege
app.use("/listings", listingRouter);

// reviews
app.use("/listings/:id/reviews", reviewRouter);

app.use("/", userRouter);

//moddleware
app.use((req, res, next) => {
  next(new ExpressError(404, "page not found"));
});

// error handling middleware
app.use((err, req, res, next) => {
  let { statusCode = 500, message = "something went wrong" } = err;
  res.status(statusCode).render("error.ejs", { message });
  // res.status(statusCode).send(message)
});

app.listen("8080", () => {
  console.log(`running on port 8080 `);
});
