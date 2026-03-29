<div align="center">

# 🌍 WanderLust
### *Discover. Share. Explore.*

**A full-stack travel listing platform where wanderers post destinations, share experiences, and inspire the next adventure.**

<br/>

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-WanderLust-2d6a4f?style=for-the-badge)](https://wanderlust-ni1n.onrender.com/listings)
[![GitHub](https://img.shields.io/badge/GitHub-moaadil304-181717?style=for-the-badge&logo=github)](https://github.com/moaadil304/wanderlust)

<br/>

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)
![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=flat-square&logo=cloudinary&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=flat-square&logo=bootstrap&logoColor=white)
![Passport.js](https://img.shields.io/badge/Passport.js-34E27A?style=flat-square&logo=passport&logoColor=white)
![Render](https://img.shields.io/badge/Deployed_on-Render-46E3B7?style=flat-square&logo=render&logoColor=white)

</div>

---

## 📸 Preview

> 🔗 **Live App →** [wanderlust-ni1n.onrender.com/listings](https://wanderlust-ni1n.onrender.com/listings)

WanderLust lets users explore travel listings, post their own destinations with images, and leave reviews — all with secure login and a clean, Airbnb-inspired UI.

---

## ✨ Features

- 🔐 **User Authentication** — Secure signup, login & logout via Passport.js Local Strategy
- 🗺️ **Travel Listings** — Create, view, edit, and delete destination listings
- 🖼️ **Image Uploads** — Cloud image storage via Cloudinary + Multer
- ⭐ **Reviews & Ratings** — Leave star-rated reviews on any listing
- 🛡️ **Authorization** — Only listing/review owners can edit or delete their content
- 💬 **Flash Messages** — Real-time success/error notifications
- 🔒 **Session Management** — Persistent sessions stored in MongoDB via connect-mongo
- ✅ **Input Validation** — Server-side Joi schema validation on all forms
- 💰 **GST Pricing** — Prices displayed with 18% GST breakdown
- 📂 **Category Filters** — Browse by Trending, Rooms, Mountains, Castles, Pools & more
- 📱 **Responsive UI** — Mobile-friendly layout powered by Bootstrap 5

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Runtime** | Node.js |
| **Framework** | Express.js |
| **Database** | MongoDB Atlas + Mongoose ODM |
| **Authentication** | Passport.js + Passport-Local-Mongoose |
| **Sessions** | express-session + connect-mongo |
| **Image Storage** | Cloudinary + Multer |
| **Templating** | EJS + ejs-mate |
| **Validation** | Joi |
| **Styling** | Bootstrap 5 + Custom CSS |
| **Deployment** | Render |

---

## 📂 Project Structure

```
wanderlust/
├── controllers/
│   ├── listings.js       # CRUD logic for listings
│   ├── reviews.js        # Create & delete reviews
│   └── users.js          # Signup, login, logout
├── models/
│   ├── listing.js        # Listing schema (title, price, image, owner, reviews)
│   ├── review.js         # Review schema (rating, comment, author)
│   └── user.js           # User schema + Passport plugin
├── routes/
│   ├── listing.js        # /listings routes
│   ├── review.js         # /listings/:id/reviews routes
│   └── user.js           # /signup /login /logout routes
├── views/
│   ├── listings/         # index, show, new, edit templates
│   ├── users/            # login, signup templates
│   └── layouts/          # Shared boilerplate (navbar/footer)
├── public/               # Static CSS, JS, images
├── utils/                # ExpressError class & wrapAsync helper
├── init/                 # Database seed data
├── cloudConfig.js        # Cloudinary + Multer storage config
├── middleware.js         # isLoggedIn, isOwner, validateListing, etc.
├── schema.js             # Joi validation schemas
├── app.js                # App entry point
└── .env                  # Secret keys (not committed)
```

---

## 🗺️ RESTful Routes

### Listings

| Method | Route | Description |
|---|---|---|
| `GET` | `/listings` | View all listings |
| `GET` | `/listings/new` | New listing form |
| `POST` | `/listings` | Create a listing |
| `GET` | `/listings/:id` | View a single listing |
| `GET` | `/listings/:id/edit` | Edit listing form (owner only) |
| `PUT` | `/listings/:id` | Update a listing (owner only) |
| `DELETE` | `/listings/:id` | Delete a listing (owner only) |

### Reviews

| Method | Route | Description |
|---|---|---|
| `POST` | `/listings/:id/reviews` | Add a review |
| `DELETE` | `/listings/:id/reviews/:reviewId` | Delete a review (author only) |

### Users

| Method | Route | Description |
|---|---|---|
| `GET` | `/signup` | Signup form |
| `POST` | `/signup` | Register new user |
| `GET` | `/login` | Login form |
| `POST` | `/login` | Authenticate user |
| `GET` | `/logout` | Log out |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v14+
- [MongoDB Atlas](https://www.mongodb.com/atlas) account (free tier)
- [Cloudinary](https://cloudinary.com/) account (free tier)

### Installation

```bash
# 1. Clone the repo
git clone https://github.com/moaadil304/wanderlust.git
cd wanderlust

# 2. Install dependencies
npm install

# 3. Create .env file
touch .env
```

Add the following to your `.env`:

```env
ATLASDB_URL=your_mongodb_atlas_connection_string
SECRET=your_session_secret_key
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
```

```bash
# 4. (Optional) Seed the database
node init/index.js

# 5. Start the server
node app.js
```

Visit `http://localhost:8080/listings` 🎉

---

## 🔐 Security

- Passwords hashed with **bcrypt** via passport-local-mongoose (never stored as plain text)
- Sessions stored in **MongoDB** — survive server restarts
- **Authorization middleware** restricts edit/delete to resource owners only
- **Joi validation** on all form submissions — server-side, not just client
- `.env` excluded from version control via `.gitignore`

---

## ☁️ Deployment (Render)

1. Push code to GitHub
2. Create a **Web Service** on [render.com](https://render.com) → connect your repo
3. Set **Build Command:** `npm install`
4. Set **Start Command:** `node app.js`
5. Add all `.env` variables in the **Environment** tab
6. Deploy — Render auto-deploys on every push to `main` ✅

---

## 🔮 Upcoming Features

- [ ] 🗺️ Maps integration (Mapbox / Leaflet)
- [ ] 🔍 Search & advanced filters
- [ ] 👤 User profile pages
- [ ] 💾 Wishlist / saved listings
- [ ] 📅 Booking system with date pickers
- [ ] ⭐ Aggregated average ratings per listing

---

## 🤝 Contributing

```bash
# Fork → Clone → Create branch
git checkout -b feature/your-feature-name

# Make changes, then
git commit -m "feat: describe your change"
git push origin feature/your-feature-name

# Open a Pull Request on GitHub
```

---

## 📄 License

Distributed under the **MIT License**.

---

<div align="center">

Made with ❤️ by [moaadil304](https://github.com/moaadil304)

**[⭐ Star this repo](https://github.com/moaadil304/wanderlust)** if you found it useful!

</div>
