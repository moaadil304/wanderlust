const sampleListings = [
  {
    title: "Umaid Bhawan Palace",
    description:
      "One of the world's largest private residences, this royal palace offers Art Deco grandeur, sprawling lawns, and unmatched luxury.",
    image: {
      url: "https://loremflickr.com/1200/800/palace,architecture,exterior/all?lock=1",
      filename: "wanderlust_DEV/umaid_bhawan",
    },
    price: 25000,
    location: "Jodhpur",
    country: "India",
    geometry: { type: "Point", coordinates: [73.0243, 26.2867] },
  },
  {
    title: "City Palace Udaipur",
    description:
      "A majestic palace complex overlooking Lake Pichola, blending Rajasthani and Mughal architecture with breathtaking courtyards.",
    image: {
      url: "https://loremflickr.com/1200/800/luxury,mansion,building/all?lock=2",
      filename: "wanderlust_DEV/city_palace_udaipur",
    },
    price: 18000,
    location: "Udaipur",
    country: "India",
    geometry: { type: "Point", coordinates: [73.6833, 24.5764] },
  },
  {
    title: "Mysore Palace Heritage Stay",
    description:
      "Experience royal Wodeyar-era hospitality steps away from the iconic illuminated Mysore Palace.",
    image: {
      url: "https://loremflickr.com/1200/800/hotel,bedroom,interior/all?lock=3",
      filename: "wanderlust_DEV/mysore_palace",
    },
    price: 14500,
    location: "Mysore",
    country: "India",
    geometry: { type: "Point", coordinates: [76.6552, 12.3052] },
  },
  {
    title: "Amber Fort Palace Retreat",
    description:
      "Stay near the golden-hued Amber Fort with panoramic hill views and Rajputana charm.",
    image: {
      url: "https://loremflickr.com/1200/800/villa,resort,building/all?lock=4",
      filename: "wanderlust_DEV/amber_fort",
    },
    price: 12500,
    location: "Jaipur",
    country: "India",
    geometry: { type: "Point", coordinates: [75.8513, 26.9855] },
  },
  {
    title: "Lake Palace Suite",
    description:
      "A floating marble palace on Lake Pichola offering unmatched romance and serenity.",
    image: {
      url: "https://loremflickr.com/1200/800/palace,courtyard,architecture/all?lock=5",
      filename: "wanderlust_DEV/lake_palace",
    },
    price: 32000,
    location: "Udaipur",
    country: "India",
    geometry: { type: "Point", coordinates: [73.68, 24.5745] },
  },
  {
    title: "Falaknuma Palace",
    description:
      "A scorpion-shaped palace perched atop a hill, offering Nizami elegance and panoramic views of Hyderabad.",
    image: {
      url: "https://loremflickr.com/1200/800/palace,architecture,exterior/all?lock=6",
      filename: "wanderlust_DEV/falaknuma",
    },
    price: 27500,
    location: "Hyderabad",
    country: "India",
    geometry: { type: "Point", coordinates: [78.4867, 17.3617] },
  },
  {
    title: "Neemrana Fort Palace",
    description:
      "A 15th-century hill fort turned heritage hotel with terraced courtyards and infinity pools.",
    image: {
      url: "https://loremflickr.com/1200/800/luxury,mansion,building/all?lock=7",
      filename: "wanderlust_DEV/neemrana",
    },
    price: 9800,
    location: "Alwar",
    country: "India",
    geometry: { type: "Point", coordinates: [76.39, 27.9833] },
  },
  {
    title: "Rambagh Palace",
    description:
      "Once the residence of the Maharaja of Jaipur, now a grand heritage hotel with lush Mughal gardens.",
    image: {
      url: "https://loremflickr.com/1200/800/hotel,bedroom,interior/all?lock=8",
      filename: "wanderlust_DEV/rambagh",
    },
    price: 22000,
    location: "Jaipur",
    country: "India",
    geometry: { type: "Point", coordinates: [75.8081, 26.8992] },
  },
  {
    title: "Taj Lake Palace View Room",
    description:
      "Elegant rooms with direct views of the iconic white marble palace floating on Lake Pichola.",
    image: {
      url: "https://loremflickr.com/1200/800/villa,resort,building/all?lock=9",
      filename: "wanderlust_DEV/taj_lake_view",
    },
    price: 19500,
    location: "Udaipur",
    country: "India",
    geometry: { type: "Point", coordinates: [73.6789, 24.5751] },
  },
  {
    title: "Jai Vilas Palace Wing",
    description:
      "Stay in a wing of this Italianate palace, home to one of the world's largest chandeliers.",
    image: {
      url: "https://loremflickr.com/1200/800/palace,courtyard,architecture/all?lock=10",
      filename: "wanderlust_DEV/jai_vilas",
    },
    price: 15500,
    location: "Gwalior",
    country: "India",
    geometry: { type: "Point", coordinates: [78.1828, 26.2124] },
  },
  {
    title: "Chandra Mahal Heritage Suite",
    description:
      "Live like royalty in this Jaipur landmark palace with hand-painted frescoes and mirror work.",
    image: {
      url: "https://loremflickr.com/1200/800/palace,architecture,exterior/all?lock=11",
      filename: "wanderlust_DEV/chandra_mahal",
    },
    price: 21000,
    location: "Jaipur",
    country: "India",
    geometry: { type: "Point", coordinates: [75.8236, 26.9258] },
  },
  {
    title: "Deogarh Mahal",
    description:
      "A 17th-century hilltop palace overlooking the Aravalli hills and a serene lake.",
    image: {
      url: "https://loremflickr.com/1200/800/luxury,mansion,building/all?lock=12",
      filename: "wanderlust_DEV/deogarh_mahal",
    },
    price: 11000,
    location: "Deogarh",
    country: "India",
    geometry: { type: "Point", coordinates: [73.9167, 25.5333] },
  },
  {
    title: "Shiv Niwas Palace",
    description:
      "Former royal guesthouse with domed cupolas, courtyards, and lakeside luxury.",
    image: {
      url: "https://loremflickr.com/1200/800/hotel,bedroom,interior/all?lock=13",
      filename: "wanderlust_DEV/shiv_niwas",
    },
    price: 17500,
    location: "Udaipur",
    country: "India",
    geometry: { type: "Point", coordinates: [73.6822, 24.5769] },
  },
  {
    title: "Bikaner Junagarh Palace Stay",
    description:
      "Desert-fort palace hospitality with intricately carved sandstone architecture.",
    image: {
      url: "https://loremflickr.com/1200/800/villa,resort,building/all?lock=14",
      filename: "wanderlust_DEV/junagarh",
    },
    price: 9500,
    location: "Bikaner",
    country: "India",
    geometry: { type: "Point", coordinates: [73.3119, 28.0229] },
  },
  {
    title: "Padmanabhapuram Palace Cottage",
    description:
      "Traditional Kerala wooden palace architecture surrounded by tropical greenery.",
    image: {
      url: "https://loremflickr.com/1200/800/palace,courtyard,architecture/all?lock=15",
      filename: "wanderlust_DEV/padmanabhapuram",
    },
    price: 8500,
    location: "Thuckalay",
    country: "India",
    geometry: { type: "Point", coordinates: [77.2333, 8.2333] },
  },
  {
    title: "Cooch Behar Palace Residency",
    description:
      "Neoclassical royal palace inspired by London's Buckingham Palace, set in Bengal's greenery.",
    image: {
      url: "https://loremflickr.com/1200/800/palace,architecture,exterior/all?lock=16",
      filename: "wanderlust_DEV/cooch_behar",
    },
    price: 9200,
    location: "Cooch Behar",
    country: "India",
    geometry: { type: "Point", coordinates: [89.4483, 26.32] },
  },
  {
    title: "Wankaner Palace",
    description:
      "A blend of Victorian, Mughal and Rajput styles with vintage car collections and heritage charm.",
    image: {
      url: "https://loremflickr.com/1200/800/luxury,mansion,building/all?lock=17",
      filename: "wanderlust_DEV/wankaner",
    },
    price: 10500,
    location: "Wankaner",
    country: "India",
    geometry: { type: "Point", coordinates: [70.95, 22.6167] },
  },
  {
    title: "Laxmi Vilas Palace Wing",
    description:
      "One of the largest private residences in the world, showcasing Indo-Saracenic architecture.",
    image: {
      url: "https://loremflickr.com/1200/800/hotel,bedroom,interior/all?lock=18",
      filename: "wanderlust_DEV/laxmi_vilas",
    },
    price: 16500,
    location: "Vadodara",
    country: "India",
    geometry: { type: "Point", coordinates: [73.1935, 22.3126] },
  },
  {
    title: "Nahargarh Palace View Stay",
    description:
      "Hilltop palace fort with sweeping sunset views over the Pink City.",
    image: {
      url: "https://loremflickr.com/1200/800/villa,resort,building/all?lock=19",
      filename: "wanderlust_DEV/nahargarh",
    },
    price: 13000,
    location: "Jaipur",
    country: "India",
    geometry: { type: "Point", coordinates: [75.8154, 26.9373] },
  },
  {
    title: "Bundi Garh Palace",
    description:
      "A dramatic cliffside palace famed for its murals, stepwells, and labyrinthine corridors.",
    image: {
      url: "https://loremflickr.com/1200/800/palace,courtyard,architecture/all?lock=20",
      filename: "wanderlust_DEV/bundi_garh",
    },
    price: 8900,
    location: "Bundi",
    country: "India",
    geometry: { type: "Point", coordinates: [75.6333, 25.4333] },
  },
  {
    title: "Ramnagar Fort Palace",
    description:
      "Riverside Mughal-style fort palace overlooking the ghats of the Ganges.",
    image: {
      url: "https://loremflickr.com/1200/800/palace,architecture,exterior/all?lock=21",
      filename: "wanderlust_DEV/ramnagar",
    },
    price: 7800,
    location: "Varanasi",
    country: "India",
    geometry: { type: "Point", coordinates: [83.0197, 25.281] },
  },
  {
    title: "Kuchesar Fort Palace",
    description:
      "A restored 200-year-old fort with peacocks, mango orchards, and royal courtyards.",
    image: {
      url: "https://loremflickr.com/1200/800/luxury,mansion,building/all?lock=22",
      filename: "wanderlust_DEV/kuchesar",
    },
    price: 6800,
    location: "Bulandshahr",
    country: "India",
    geometry: { type: "Point", coordinates: [77.85, 28.4167] },
  },
  {
    title: "Kanker Palace",
    description:
      "A jungle palace retreat surrounded by dense forests and tribal heritage of Chhattisgarh.",
    image: {
      url: "https://loremflickr.com/1200/800/hotel,bedroom,interior/all?lock=23",
      filename: "wanderlust_DEV/kanker",
    },
    price: 7200,
    location: "Kanker",
    country: "India",
    geometry: { type: "Point", coordinates: [81.493, 20.2719] },
  },
  {
    title: "Chomu Palace",
    description:
      "An 18th-century Rajput fort-palace with frescoed walls and courtyard dining under the stars.",
    image: {
      url: "https://loremflickr.com/1200/800/villa,resort,building/all?lock=24",
      filename: "wanderlust_DEV/chomu",
    },
    price: 9900,
    location: "Chomu",
    country: "India",
    geometry: { type: "Point", coordinates: [75.7167, 27.1667] },
  },
  {
    title: "Fateh Prakash Palace",
    description:
      "Regal suites adorned with crystal chandeliers and views of Lake Pichola and the Aravallis.",
    image: {
      url: "https://loremflickr.com/1200/800/palace,courtyard,architecture/all?lock=25",
      filename: "wanderlust_DEV/fateh_prakash",
    },
    price: 20500,
    location: "Udaipur",
    country: "India",
    geometry: { type: "Point", coordinates: [73.6811, 24.5772] },
  },
  {
    title: "Aina Mahal Heritage Rooms",
    description:
      "Mirror-palace hospitality inspired by Kutchi and European craftsmanship.",
    image: {
      url: "https://loremflickr.com/1200/800/palace,architecture,exterior/all?lock=26",
      filename: "wanderlust_DEV/aina_mahal",
    },
    price: 8700,
    location: "Bhuj",
    country: "India",
    geometry: { type: "Point", coordinates: [69.6669, 23.242] },
  },
  {
    title: "Devi Garh Fort Palace",
    description:
      "A minimalist-luxury fort palace perched in the Aravalli hills, blending heritage with modern design.",
    image: {
      url: "https://loremflickr.com/1200/800/luxury,mansion,building/all?lock=27",
      filename: "wanderlust_DEV/devi_garh",
    },
    price: 24500,
    location: "Delwara",
    country: "India",
    geometry: { type: "Point", coordinates: [73.7167, 24.7167] },
  },
  {
    title: "Pratap Vilas Palace",
    description:
      "An Indo-Saracenic royal palace-turned-heritage hotel with lush gardens near the coast.",
    image: {
      url: "https://loremflickr.com/1200/800/hotel,bedroom,interior/all?lock=28",
      filename: "wanderlust_DEV/pratap_vilas",
    },
    price: 13800,
    location: "Jamnagar",
    country: "India",
    geometry: { type: "Point", coordinates: [70.0577, 22.4707] },
  },
  {
    title: "Sardar Samand Palace",
    description:
      "An Art Deco lakeside palace and former royal hunting lodge amid the Thar desert.",
    image: {
      url: "https://loremflickr.com/1200/800/villa,resort,building/all?lock=29",
      filename: "wanderlust_DEV/sardar_samand",
    },
    price: 12800,
    location: "Sardar Samand",
    country: "India",
    geometry: { type: "Point", coordinates: [73.0333, 25.9833] },
  },
  {
    title: "Balsamand Lake Palace",
    description:
      "A 19th-century summer palace on a serene lake, surrounded by mango orchards.",
    image: {
      url: "https://loremflickr.com/1200/800/palace,courtyard,architecture/all?lock=30",
      filename: "wanderlust_DEV/balsamand",
    },
    price: 10200,
    location: "Jodhpur",
    country: "India",
    geometry: { type: "Point", coordinates: [73.0479, 26.3378] },
  },
  {
    title: "Bhainsrorgarh Fort Palace",
    description:
      "A cliff-edge fort overlooking the Chambal River, offering unmatched tranquility.",
    image: {
      url: "https://loremflickr.com/1200/800/palace,architecture,exterior/all?lock=31",
      filename: "wanderlust_DEV/bhainsrorgarh",
    },
    price: 8300,
    location: "Chittorgarh",
    country: "India",
    geometry: { type: "Point", coordinates: [75.3167, 24.9833] },
  },
  {
    title: "Vijay Vilas Palace",
    description:
      "A Rajput-style beach palace amid the salt marshes of the Rann of Kutch, famed for its film shoots.",
    image: {
      url: "https://loremflickr.com/1200/800/luxury,mansion,building/all?lock=32",
      filename: "wanderlust_DEV/vijay_vilas",
    },
    price: 11500,
    location: "Mandvi",
    country: "India",
    geometry: { type: "Point", coordinates: [69.35, 22.8333] },
  },
  {
    title: "Rajwada Heritage Suite",
    description:
      "A seven-storeyed Indo-European palace facade in the heart of the old city.",
    image: {
      url: "https://loremflickr.com/1200/800/hotel,bedroom,interior/all?lock=33",
      filename: "wanderlust_DEV/rajwada",
    },
    price: 7600,
    location: "Indore",
    country: "India",
    geometry: { type: "Point", coordinates: [75.8577, 22.7177] },
  },
  {
    title: "Chittorgarh Fort Palace Camp",
    description:
      "Royal glamping beside the ruins of one of India's largest forts, rich in Rajput history.",
    image: {
      url: "https://loremflickr.com/1200/800/villa,resort,building/all?lock=34",
      filename: "wanderlust_DEV/chittorgarh",
    },
    price: 6900,
    location: "Chittorgarh",
    country: "India",
    geometry: { type: "Point", coordinates: [74.63, 24.8887] },
  },
  {
    title: "Kumbhalgarh Fort Palace",
    description:
      "Stay near the second-longest wall in the world, wrapped around a majestic hilltop fort.",
    image: {
      url: "https://loremflickr.com/1200/800/palace,courtyard,architecture/all?lock=35",
      filename: "wanderlust_DEV/kumbhalgarh",
    },
    price: 10800,
    location: "Rajsamand",
    country: "India",
    geometry: { type: "Point", coordinates: [73.5833, 25.15] },
  },
  {
    title: "Sajjan Garh Monsoon Palace View",
    description:
      "Hilltop palace hospitality with sweeping sunset views over Udaipur's lakes.",
    image: {
      url: "https://loremflickr.com/1200/800/palace,architecture,exterior/all?lock=36",
      filename: "wanderlust_DEV/sajjan_garh",
    },
    price: 14000,
    location: "Udaipur",
    country: "India",
    geometry: { type: "Point", coordinates: [73.6544, 24.5497] },
  },
  {
    title: "Dungarpur Udai Bilas Palace",
    description:
      "A lakeside royal palace with hand-carved marble balconies and princely charm.",
    image: {
      url: "https://loremflickr.com/1200/800/luxury,mansion,building/all?lock=37",
      filename: "wanderlust_DEV/udai_bilas",
    },
    price: 12200,
    location: "Dungarpur",
    country: "India",
    geometry: { type: "Point", coordinates: [73.7167, 23.8333] },
  },
  {
    title: "Sheesh Mahal Orchha",
    description:
      "A former royal residence turned heritage hotel within the historic Orchha fort complex.",
    image: {
      url: "https://loremflickr.com/1200/800/hotel,bedroom,interior/all?lock=38",
      filename: "wanderlust_DEV/sheesh_mahal",
    },
    price: 6500,
    location: "Orchha",
    country: "India",
    geometry: { type: "Point", coordinates: [78.6417, 25.3517] },
  },
  {
    title: "Raj Mahal Palace Jaipur",
    description:
      "Former British Residency turned palace hotel with peacock gardens and vintage decor.",
    image: {
      url: "https://loremflickr.com/1200/800/villa,resort,building/all?lock=39",
      filename: "wanderlust_DEV/raj_mahal_jaipur",
    },
    price: 17000,
    location: "Jaipur",
    country: "India",
    geometry: { type: "Point", coordinates: [75.7833, 26.9167] },
  },
  {
    title: "Nazim Palace",
    description:
      "Nizam-era palace hospitality set amid the historic charm of the old city of Hyderabad.",
    image: {
      url: "https://loremflickr.com/1200/800/palace,courtyard,architecture/all?lock=40",
      filename: "wanderlust_DEV/nazim_palace",
    },
    price: 9700,
    location: "Hyderabad",
    country: "India",
    geometry: { type: "Point", coordinates: [78.4747, 17.3616] },
  },
];

module.exports = { data: sampleListings };
