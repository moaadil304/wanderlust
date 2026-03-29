const sampleListings = [
  {
    title: "Beachfront Villa Goa",
    description: "Beautiful villa with private beach access and sunset view.",
    image: {
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
      filename: "listingimage",
    },
    price: 8500,
    location: "Goa",
    country: "India",
  },
  {
    title: "Mountain Cabin Manali",
    description: "Cozy wooden cabin surrounded by snow mountains.",
    image: {
      url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
      filename: "listingimage",
    },
    price: 4500,
    location: "Manali",
    country: "India",
  },
  {
    title: "Luxury Apartment Mumbai",
    description: "Modern apartment in the heart of Mumbai.",
    image: {
      url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      filename: "listingimage",
    },
    price: 9500,
    location: "Mumbai",
    country: "India",
  },
  {
    title: "Desert Camp Jaisalmer",
    description: "Traditional desert camp with camel safari experience.",
    image: {
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      filename: "listingimage",
    },
    price: 3000,
    location: "Jaisalmer",
    country: "India",
  },
  {
    title: "Lake House Udaipur",
    description: "Peaceful lake house with scenic sunset views.",
    image: {
      url: "https://images.unsplash.com/photo-1464890100898-a385f744067f",
      filename: "listingimage",
    },
    price: 6000,
    location: "Udaipur",
    country: "India",
  },
  {
    title: "Hill Resort Shimla",
    description: "Luxury hill resort with mountain view.",
    image: {
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
      filename: "listingimage",
    },
    price: 7000,
    location: "Shimla",
    country: "India",
  },
  {
    title: "Houseboat Alleppey",
    description: "Enjoy Kerala backwaters in private houseboat.",
    image: {
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      filename: "listingimage",
    },
    price: 8000,
    location: "Alleppey",
    country: "India",
  },
  {
    title: "City Hostel Delhi",
    description: "Affordable hostel in central Delhi.",
    image: {
      url: "https://images.unsplash.com/photo-1554995207-c18c203602cb",
      filename: "listingimage",
    },
    price: 1200,
    location: "Delhi",
    country: "India",
  },
  {
    title: "Tea Estate Bungalow Darjeeling",
    description: "Stay inside tea garden with mountain views.",
    image: {
      url: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c",
      filename: "listingimage",
    },
    price: 5500,
    location: "Darjeeling",
    country: "India",
  },
  {
    title: "Riverfront Cottage Rishikesh",
    description: "Yoga retreat cottage near Ganga river.",
    image: {
      url: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9",
      filename: "listingimage",
    },
    price: 4000,
    location: "Rishikesh",
    country: "India",
  },
  {
    title: "Luxury Tent Leh",
    description: "Adventure tent stay in Ladakh.",
    image: {
      url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
      filename: "listingimage",
    },
    price: 6500,
    location: "Leh",
    country: "India",
  },
  {
    title: "Forest Resort Jim Corbett",
    description: "Wildlife resort inside forest.",
    image: {
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
      filename: "listingimage",
    },
    price: 7200,
    location: "Jim Corbett",
    country: "India",
  },
  {
    title: "Beach Hut Andaman",
    description: "Private hut on white sand beach.",
    image: {
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      filename: "listingimage",
    },
    price: 9000,
    location: "Andaman",
    country: "India",
  },
  {
    title: "Farm Stay Punjab",
    description: "Village farm stay with organic food.",
    image: {
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      filename: "listingimage",
    },
    price: 2500,
    location: "Amritsar",
    country: "India",
  },
  {
    title: "Heritage Haveli Jaipur",
    description: "Royal haveli with traditional design.",
    image: {
      url: "https://images.unsplash.com/photo-1484154218962-a197022b5858",
      filename: "listingimage",
    },
    price: 7800,
    location: "Jaipur",
    country: "India",
  },
  {
    title: "Cliff Resort Varkala",
    description: "Resort located on sea cliff.",
    image: {
      url: "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
      filename: "listingimage",
    },
    price: 6800,
    location: "Varkala",
    country: "India",
  },
  {
    title: "Eco Lodge Coorg",
    description: "Nature lodge inside coffee plantation.",
    image: {
      url: "https://images.unsplash.com/photo-1472220625704-91e1462799b2",
      filename: "listingimage",
    },
    price: 5000,
    location: "Coorg",
    country: "India",
  },
  {
    title: "Penthouse Bangalore",
    description: "Luxury penthouse with skyline view.",
    image: {
      url: "https://images.unsplash.com/photo-1501183638710-841dd1904471",
      filename: "listingimage",
    },
    price: 11000,
    location: "Bangalore",
    country: "India",
  },
  {
    title: "Snow Resort Gulmarg",
    description: "Ski resort with snow activities.",
    image: {
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090",
      filename: "listingimage",
    },
    price: 8800,
    location: "Gulmarg",
    country: "India",
  },
  {
    title: "Island Villa Lakshadweep",
    description: "Private island villa with sea view.",
    image: {
      url: "https://images.unsplash.com/photo-1505692794403-34d4982c3a72",
      filename: "listingimage",
    },
    price: 15000,
    location: "Lakshadweep",
    country: "India",
  },
];

module.exports = { data :sampleListings };
