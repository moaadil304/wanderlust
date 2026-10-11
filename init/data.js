 
const sampleListings = [
  {
    title: "Taj Mahal View Haveli",
    description:
      "A heritage haveli with rooftop dining and a sunrise view of the white marble Taj Mahal.",
    image: {
      url: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80",
      filename: "wanderlust_DEV/taj_mahal_view_haveli",
    },
    price: 12000,
    location: "Agra",
    country: "India",
    geometry: { type: "Point", coordinates: [78.0421, 27.1751] },
  },
  {
    title: "Hawa Mahal Terrace Stay",
    description:
      "Pink City rooftop rooms facing the iconic Hawa Mahal with traditional Rajasthani breakfast.",
    image: {
      url: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80",
      filename: "wanderlust_DEV/hawa_mahal_terrace_stay",
    },
    price: 8500,
    location: "Jaipur",
    country: "India",
    geometry: { type: "Point", coordinates: [75.8267, 26.9239] },
  },
  {
    title: "Kerala Backwater Houseboat",
    description:
      "A private teak houseboat drifting through quiet palm-lined backwaters with a chef on board.",
    image: {
      url: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80",
      filename: "wanderlust_DEV/kerala_backwater_houseboat",
    },
    price: 9000,
    location: "Alleppey",
    country: "India",
    geometry: { type: "Point", coordinates: [76.3388, 9.4981] },
  },
  {
    title: "Munnar Tea Estate Bungalow",
    description:
      "A colonial bungalow surrounded by rolling tea gardens and misty mountain mornings.",
    image: {
      url: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=80",
      filename: "wanderlust_DEV/munnar_tea_estate_bungalow",
    },
    price: 7500,
    location: "Munnar",
    country: "India",
    geometry: { type: "Point", coordinates: [77.0595, 10.0889] },
  },
  {
    title: "Portuguese Villa Panjim",
    description:
      "A pastel Indo-Portuguese villa in the Latin Quarter, steps from cafes and the river promenade.",
    image: {
      url: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80",
      filename: "wanderlust_DEV/portuguese_villa_panjim",
    },
    price: 11000,
    location: "Panaji",
    country: "India",
    geometry: { type: "Point", coordinates: [73.8278, 15.4909] },
  },
  {
    title: "Himalayan Cottage Manali",
    description:
      "A cosy wooden cottage with fireplace and views of snow-capped Pir Panjal peaks.",
    image: {
      url: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=1200&q=80",
      filename: "wanderlust_DEV/himalayan_cottage_manali",
    },
    price: 5500,
    location: "Manali",
    country: "India",
    geometry: { type: "Point", coordinates: [77.1887, 32.2396] },
  },
  {
    title: "Rishikesh Riverside Cabin",
    description:
      "A peaceful cabin on the Ganges bank, perfect for yoga, rafting and sunrise meditation.",
    image: {
      url: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
      filename: "wanderlust_DEV/rishikesh_riverside_cabin",
    },
    price: 4200,
    location: "Rishikesh",
    country: "India",
    geometry: { type: "Point", coordinates: [78.2676, 30.0869] },
  },
  {
    title: "Darjeeling Tea Cottage",
    description:
      "A charming hillside cottage amid tea terraces with views of Kanchenjunga.",
    image: {
      url: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80",
      filename: "wanderlust_DEV/darjeeling_tea_cottage",
    },
    price: 6200,
    location: "Darjeeling",
    country: "India",
    geometry: { type: "Point", coordinates: [88.2663, 27.041] },
  },
  {
    title: "Shimla Colonial Cottage",
    description:
      "A British-era stone cottage with deodar views and a warm sit-out for evening tea.",
    image: {
      url: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&w=1200&q=80",
      filename: "wanderlust_DEV/shimla_colonial_cottage",
    },
    price: 6800,
    location: "Shimla",
    country: "India",
    geometry: { type: "Point", coordinates: [77.1734, 31.1048] },
  },
  {
    title: "Leh Mountain Lodge",
    description:
      "A high-altitude lodge with Ladakhi hospitality, apricot orchards and stark mountain vistas.",
    image: {
      url: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
      filename: "wanderlust_DEV/leh_mountain_lodge",
    },
    price: 7200,
    location: "Leh",
    country: "India",
    geometry: { type: "Point", coordinates: [77.5771, 34.1526] },
  },
  {
    title: "Havelock Beach Hut",
    description:
      "A bamboo beach hut a few steps from turquoise water and coral reefs.",
    image: {
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      filename: "wanderlust_DEV/havelock_beach_hut",
    },
    price: 9500,
    location: "Havelock Island",
    country: "India",
    geometry: { type: "Point", coordinates: [92.9876, 12.0] },
  },
  {
    title: "French Quarter Villa",
    description:
      "A yellow-walled French colonial villa with a courtyard garden in White Town.",
    image: {
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
      filename: "wanderlust_DEV/french_quarter_villa",
    },
    price: 8800,
    location: "Pondicherry",
    country: "India",
    geometry: { type: "Point", coordinates: [79.8083, 11.9416] },
  },
  {
    title: "Hampi Boulder Resort",
    description:
      "Stone cottages set among ancient boulders, close to the Vijayanagara ruins.",
    image: {
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
      filename: "wanderlust_DEV/hampi_boulder_resort",
    },
    price: 4800,
    location: "Hampi",
    country: "India",
    geometry: { type: "Point", coordinates: [76.46, 15.335] },
  },
  {
    title: "Coorg Coffee Plantation Stay",
    description:
      "A planter's home inside a working coffee estate with waterfalls and forest trails.",
    image: {
      url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      filename: "wanderlust_DEV/coorg_coffee_plantation_stay",
    },
    price: 7000,
    location: "Madikeri",
    country: "India",
    geometry: { type: "Point", coordinates: [75.7382, 12.4244] },
  },
  {
    title: "Ooty Colonial Bungalow",
    description:
      "A fireplace-warmed bungalow with rose gardens in the Nilgiri hills.",
    image: {
      url: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80",
      filename: "wanderlust_DEV/ooty_colonial_bungalow",
    },
    price: 6400,
    location: "Ooty",
    country: "India",
    geometry: { type: "Point", coordinates: [76.695, 11.4102] },
  },
  {
    title: "Kodaikanal Lakeview Cottage",
    description:
      "A quiet cottage overlooking the star-shaped lake and pine-covered slopes.",
    image: {
      url: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80",
      filename: "wanderlust_DEV/kodaikanal_lakeview_cottage",
    },
    price: 5900,
    location: "Kodaikanal",
    country: "India",
    geometry: { type: "Point", coordinates: [77.4892, 10.2381] },
  },
  {
    title: "Jaisalmer Desert Camp",
    description:
      "Luxury tents among golden dunes with folk music and a starlit campfire.",
    image: {
      url: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80",
      filename: "wanderlust_DEV/jaisalmer_desert_camp",
    },
    price: 6000,
    location: "Jaisalmer",
    country: "India",
    geometry: { type: "Point", coordinates: [70.9083, 26.9157] },
  },
  {
    title: "Pushkar Heritage Tents",
    description:
      "Royal-style tents beside the sacred lake, close to the famous camel fair grounds.",
    image: {
      url: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80",
      filename: "wanderlust_DEV/pushkar_heritage_tents",
    },
    price: 4500,
    location: "Pushkar",
    country: "India",
    geometry: { type: "Point", coordinates: [74.5513, 26.4899] },
  },
  {
    title: "Mount Abu Hill Retreat",
    description:
      "A cool hilltop retreat near Nakki Lake and the Dilwara temples.",
    image: {
      url: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
      filename: "wanderlust_DEV/mount_abu_hill_retreat",
    },
    price: 6700,
    location: "Mount Abu",
    country: "India",
    geometry: { type: "Point", coordinates: [72.7083, 24.5926] },
  },
  {
    title: "Ranthambore Tiger Lodge",
    description:
      "A jungle lodge on the edge of the national park with guided safari drives.",
    image: {
      url: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=80",
      filename: "wanderlust_DEV/ranthambore_tiger_lodge",
    },
    price: 13500,
    location: "Sawai Madhopur",
    country: "India",
    geometry: { type: "Point", coordinates: [76.5026, 26.0173] },
  },
  {
    title: "Corbett Riverside Resort",
    description:
      "Cottages along the Kosi river, surrounded by sal forest and wildlife.",
    image: {
      url: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80",
      filename: "wanderlust_DEV/corbett_riverside_resort",
    },
    price: 8200,
    location: "Ramnagar",
    country: "India",
    geometry: { type: "Point", coordinates: [79.123, 29.53] },
  },
  {
    title: "Khajuraho Temple View Stay",
    description:
      "A boutique stay with courtyard views of the UNESCO-listed temple complex.",
    image: {
      url: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80",
      filename: "wanderlust_DEV/khajuraho_temple_view_stay",
    },
    price: 5200,
    location: "Khajuraho",
    country: "India",
    geometry: { type: "Point", coordinates: [79.9199, 24.8318] },
  },
  {
    title: "Varanasi Ghat Haveli",
    description:
      "An old haveli above the Ganga ghats, perfect for sunrise boat rides and evening aarti.",
    image: {
      url: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80",
      filename: "wanderlust_DEV/varanasi_ghat_haveli",
    },
    price: 5600,
    location: "Varanasi",
    country: "India",
    geometry: { type: "Point", coordinates: [83.0104, 25.3109] },
  },
  {
    title: "Amritsar Heritage Inn",
    description:
      "A warm heritage inn minutes from the Golden Temple, with Punjabi home cooking.",
    image: {
      url: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=80",
      filename: "wanderlust_DEV/amritsar_heritage_inn",
    },
    price: 5800,
    location: "Amritsar",
    country: "India",
    geometry: { type: "Point", coordinates: [74.8765, 31.62] },
  },
  {
    title: "Kolkata Heritage Mansion",
    description:
      "A restored Bengal-era mansion with high ceilings, verandas and old-world charm.",
    image: {
      url: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80",
      filename: "wanderlust_DEV/kolkata_heritage_mansion",
    },
    price: 7300,
    location: "Kolkata",
    country: "India",
    geometry: { type: "Point", coordinates: [88.3639, 22.5726] },
  },
  {
    title: "Marine Drive Sea-View Suite",
    description:
      "A modern suite overlooking the Queen's Necklace and the Arabian Sea.",
    image: {
      url: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=1200&q=80",
      filename: "wanderlust_DEV/marine_drive_sea_view_suite",
    },
    price: 15500,
    location: "Mumbai",
    country: "India",
    geometry: { type: "Point", coordinates: [72.8219, 18.943] },
  },
  {
    title: "Fort Kochi Heritage Homestay",
    description:
      "A Dutch-Portuguese era home near Chinese fishing nets and spice-scented lanes.",
    image: {
      url: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
      filename: "wanderlust_DEV/fort_kochi_heritage_homestay",
    },
    price: 7900,
    location: "Kochi",
    country: "India",
    geometry: { type: "Point", coordinates: [76.2423, 9.9658] },
  },
  {
    title: "Gokarna Beach Villa",
    description:
      "A breezy villa near quiet crescent beaches and clifftop sunsets.",
    image: {
      url: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80",
      filename: "wanderlust_DEV/gokarna_beach_villa",
    },
    price: 6100,
    location: "Gokarna",
    country: "India",
    geometry: { type: "Point", coordinates: [74.3188, 14.5479] },
  },
  {
    title: "Alibaug Seaside Villa",
    description:
      "A private villa with pool and sea breeze, an easy weekend escape from the city.",
    image: {
      url: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&w=1200&q=80",
      filename: "wanderlust_DEV/alibaug_seaside_villa",
    },
    price: 14000,
    location: "Alibaug",
    country: "India",
    geometry: { type: "Point", coordinates: [72.8722, 18.6414] },
  },
  {
    title: "Lonavala Hilltop Villa",
    description:
      "A monsoon-favourite villa with valley views, a bonfire deck and private pool.",
    image: {
      url: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
      filename: "wanderlust_DEV/lonavala_hilltop_villa",
    },
    price: 10500,
    location: "Lonavala",
    country: "India",
    geometry: { type: "Point", coordinates: [73.4062, 18.7546] },
  },
  {
    title: "Shore Temple Stay",
    description:
      "A seaside stay a short walk from the 8th-century Shore Temple and rock carvings.",
    image: {
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      filename: "wanderlust_DEV/shore_temple_stay",
    },
    price: 6600,
    location: "Mahabalipuram",
    country: "India",
    geometry: { type: "Point", coordinates: [80.1927, 12.6169] },
  },
  {
    title: "Madurai Heritage Home",
    description:
      "A Chettinad-style home close to Meenakshi Temple with traditional Tamil meals.",
    image: {
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
      filename: "wanderlust_DEV/madurai_heritage_home",
    },
    price: 5400,
    location: "Madurai",
    country: "India",
    geometry: { type: "Point", coordinates: [78.1198, 9.9195] },
  },
  {
    title: "Chola Heritage Stay",
    description:
      "A courtyard stay near the Brihadeeswarar Temple, home of Tanjore art.",
    image: {
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
      filename: "wanderlust_DEV/chola_heritage_stay",
    },
    price: 4900,
    location: "Thanjavur",
    country: "India",
    geometry: { type: "Point", coordinates: [79.1378, 10.787] },
  },
  {
    title: "Kaziranga Jungle Lodge",
    description:
      "A rainforest lodge for elephant safaris and one-horned rhino sightings.",
    image: {
      url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      filename: "wanderlust_DEV/kaziranga_jungle_lodge",
    },
    price: 8700,
    location: "Kaziranga",
    country: "India",
    geometry: { type: "Point", coordinates: [93.3713, 26.5775] },
  },
  {
    title: "Gangtok Himalayan Retreat",
    description:
      "A mountain-view retreat with Sikkimese cuisine and monastery visits nearby.",
    image: {
      url: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80",
      filename: "wanderlust_DEV/gangtok_himalayan_retreat",
    },
    price: 7100,
    location: "Gangtok",
    country: "India",
    geometry: { type: "Point", coordinates: [88.6138, 27.3389] },
  },
  {
    title: "Shillong Pine Cottage",
    description:
      "A pine-wrapped cottage near waterfalls and Umiam Lake, in the Scotland of the East.",
    image: {
      url: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80",
      filename: "wanderlust_DEV/shillong_pine_cottage",
    },
    price: 5300,
    location: "Shillong",
    country: "India",
    geometry: { type: "Point", coordinates: [91.8933, 25.5788] },
  },
  {
    title: "Dharamshala Himalayan Villa",
    description:
      "A villa with Dhauladhar views near monasteries and deodar forests.",
    image: {
      url: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80",
      filename: "wanderlust_DEV/dharamshala_himalayan_villa",
    },
    price: 6300,
    location: "Dharamshala",
    country: "India",
    geometry: { type: "Point", coordinates: [76.3234, 32.219] },
  },
  {
    title: "Nainital Lake Cottage",
    description:
      "A cottage by the emerald Naini Lake with boat rides and mall road close by.",
    image: {
      url: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80",
      filename: "wanderlust_DEV/nainital_lake_cottage",
    },
    price: 6000,
    location: "Nainital",
    country: "India",
    geometry: { type: "Point", coordinates: [79.4591, 29.3919] },
  },
  {
    title: "Mussoorie Colonial Manor",
    description:
      "A Queen of Hills manor with sweeping Doon Valley views and tea on the lawn.",
    image: {
      url: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
      filename: "wanderlust_DEV/mussoorie_colonial_manor",
    },
    price: 7400,
    location: "Mussoorie",
    country: "India",
    geometry: { type: "Point", coordinates: [78.0644, 30.4598] },
  },
  {
    title: "Almora Himalayan Homestay",
    description:
      "A family-run stay with terrace views of Himalayan peaks and local Kumaoni meals.",
    image: {
      url: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=80",
      filename: "wanderlust_DEV/almora_himalayan_homestay",
    },
    price: 4600,
    location: "Almora",
    country: "India",
    geometry: { type: "Point", coordinates: [79.6591, 29.5971] },
  },
  {
    title: "Bhopal Lakeview Residency",
    description:
      "A comfortable residency overlooking the Upper Lake with Nawabi city history nearby.",
    image: {
      url: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80",
      filename: "wanderlust_DEV/bhopal_lakeview_residency",
    },
    price: 6700,
    location: "Bhopal",
    country: "India",
    geometry: { type: "Point", coordinates: [77.4126, 23.2599] },
  },
  {
    title: "Mandu Heritage Stay",
    description:
      "A quiet stay among Afghan-style monuments and baobab trees of the ruined city.",
    image: {
      url: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80",
      filename: "wanderlust_DEV/mandu_heritage_stay",
    },
    price: 4400,
    location: "Mandu",
    country: "India",
    geometry: { type: "Point", coordinates: [75.4, 22.3333] },
  },
  {
    title: "Gandikota Canyon Camp",
    description:
      "Tented camps on the rim of the Penna river gorge, India's Grand Canyon.",
    image: {
      url: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80",
      filename: "wanderlust_DEV/gandikota_canyon_camp",
    },
    price: 3800,
    location: "Gandikota",
    country: "India",
    geometry: { type: "Point", coordinates: [78.2833, 14.8167] },
  },
  {
    title: "Lucknow Nawabi Haveli",
    description:
      "A restored haveli with Awadhi cuisine and the grace of Nawabi culture.",
    image: {
      url: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=80",
      filename: "wanderlust_DEV/lucknow_nawabi_haveli",
    },
    price: 8000,
    location: "Lucknow",
    country: "India",
    geometry: { type: "Point", coordinates: [80.9462, 26.8467] },
  },
  {
    title: "Ganga Riverside Villa",
    description:
      "A calm riverside villa on the Ganga banks with a garden and sunset deck.",
    image: {
      url: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80",
      filename: "wanderlust_DEV/ganga_riverside_villa",
    },
    price: 5000,
    location: "Kanpur",
    country: "India",
    geometry: { type: "Point", coordinates: [80.3319, 26.4499] },
  },
  {
    title: "Chandigarh Garden Villa",
    description:
      "A leafy villa near the Rock Garden and Sukhna Lake, in Le Corbusier's planned city.",
    image: {
      url: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=1200&q=80",
      filename: "wanderlust_DEV/chandigarh_garden_villa",
    },
    price: 7700,
    location: "Chandigarh",
    country: "India",
    geometry: { type: "Point", coordinates: [76.7794, 30.7333] },
  },
  {
    title: "Dalhousie Colonial Cottage",
    description:
      "A quiet Raj-era cottage surrounded by cedar forests and snow-peak views.",
    image: {
      url: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
      filename: "wanderlust_DEV/dalhousie_colonial_cottage",
    },
    price: 5700,
    location: "Dalhousie",
    country: "India",
    geometry: { type: "Point", coordinates: [76.97, 32.5387] },
  },
  {
    title: "Rann Tent City",
    description:
      "Festival tents on the white salt desert, glowing under a full-moon night.",
    image: {
      url: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80",
      filename: "wanderlust_DEV/rann_tent_city",
    },
    price: 8400,
    location: "Dhordo",
    country: "India",
    geometry: { type: "Point", coordinates: [69.68, 23.83] },
  },
  {
    title: "Diu Portuguese Beach House",
    description:
      "A coastal house near Nagoa Beach with Portuguese-era churches and forts nearby.",
    image: {
      url: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&w=1200&q=80",
      filename: "wanderlust_DEV/diu_portuguese_beach_house",
    },
    price: 7000,
    location: "Diu",
    country: "India",
    geometry: { type: "Point", coordinates: [70.9874, 20.7144] },
  },
  {
    title: "Chowmahalla Heritage Suite",
    description:
      "A Nizami-era heritage suite near the grand palace courtyards and Charminar bazaars.",
    image: {
      url: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
      filename: "wanderlust_DEV/chowmahalla_heritage_suite",
    },
    price: 12500,
    location: "Hyderabad",
    country: "India",
    geometry: { type: "Point", coordinates: [78.4717, 17.3578] },
  },
];
 
module.exports = { data: sampleListings };
