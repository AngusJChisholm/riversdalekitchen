// Shelf prices, updated automatically every Wednesday (scripts/update-prices.mjs) and by hand from admin/prices.html.
// Each entry: p = shelf price, pk = pack size (in the ingredient's unit), name = product, at = date, sp = on special this week, was = normal price.
window.DOCKET_PRICES = {
  "coles": {
    "chk_thigh": {
      "p": 17.4,
      "pk": 1200,
      "name": "Coles RSPCA Approved Chicken Thigh Fillets Large Pack approx. 1.2kg",
      "at": "2026-10-19",
      "alt": [
        700,
        12.6,
        "Coles RSPCA Chicken Thigh Fillets Small Pack approx. 700g"
      ]
    },
    "chk_breast": {
      "p": 15.4,
      "pk": 1400,
      "name": "Coles RSPCA Approved Chicken Breast Fillets Large Pack approx. 1.4kg",
      "at": "2026-10-19",
      "alt": [
        600,
        8.7,
        "Coles RSPCA Approved Chicken Breast Fillets Small Pack approx. 600g"
      ]
    },
    "chk_whole": {
      "p": 10.32,
      "pk": 2400,
      "name": "Coles RSPCA Approved Extra Large Whole Chicken approx. 2.4kg each",
      "at": "2026-10-19",
      "alt": [
        1650,
        7.1,
        "Coles RSPCA Approved Medium Whole Chicken approx. 1.65Kg"
      ],
      "sp": 1
    },
    "beef_mince": {
      "p": 6.25,
      "pk": 500,
      "name": "Coles Pork & Beef 3 Star Regular Mince Bolognese 500g",
      "at": "2026-10-19"
    },
    "beef_lean": {
      "p": 6.25,
      "pk": 500,
      "name": "Coles Pork & Beef 3 Star Regular Mince Bolognese 500g",
      "at": "2026-10-19"
    },
    "beef_rump": {
      "p": 25.2,
      "pk": 1050,
      "name": "Drovers Choice No Added Hormone Beef Rump Steak approx. 1.05Kg",
      "at": "2026-10-19",
      "alt": [
        230,
        8,
        "Drovers Choice Beef Rump Steak 230g"
      ],
      "sp": 1
    },
    "beef_chuck": {
      "p": 17,
      "pk": 1000,
      "name": "Coles Beef Chuck Casserole Steak 1Kg",
      "at": "2026-10-19",
      "sp": 1,
      "was": 20
    },
    "pork_shoulder": {
      "p": 13,
      "pk": 1000,
      "name": "Coles Char Siu Pork Shoulder approx. 1Kg",
      "at": "2026-10-19",
      "sp": 1,
      "was": 15
    },
    "pork_roast": {
      "p": 14.5,
      "pk": 1000,
      "name": "Coles Boneless Mini Pork Leg Roast approx. 1kg",
      "at": "2026-10-19"
    },
    "pork_mince": {
      "p": 9.5,
      "pk": 1000,
      "name": "Coles Pork 3 Star Regular Mince 1Kg",
      "at": "2026-10-19",
      "alt": [
        500,
        6,
        "Coles Regular Pork Mince 500g"
      ],
      "sp": 1,
      "was": 11
    },
    "lamb_sh": {
      "p": 39.6,
      "pk": 2200,
      "name": "Coles Lamb Shoulder Roast On The Bone approx. 2.2kg",
      "at": "2026-10-19",
      "alt": [
        700,
        14,
        "Coles Graze Lamb Mini Shoulder Roast 2 Pack approx. 700g"
      ]
    },
    "salmon": {
      "p": 35,
      "pk": 1000,
      "name": "KB's Salmon Skin Off 1kg",
      "at": "2026-10-19",
      "alt": [
        280,
        13,
        "Huon Salmon To Go Skin On 2 Pack 280g"
      ]
    },
    "chorizo": {
      "p": 7,
      "pk": 300,
      "name": "Wurstel Chorizo 300g",
      "at": "2026-10-19",
      "alt": [
        200,
        8,
        "Provedore Free Range Chorizo 200g"
      ],
      "sp": 1,
      "was": 9
    },
    "bacon": {
      "p": 4.4,
      "pk": 250,
      "name": "Thomson's Deli Middle Bacon 250g",
      "at": "2026-10-19"
    },
    "ham": {
      "p": 5,
      "pk": 200,
      "name": "Don Leg Ham Shaved 200g",
      "at": "2026-10-19",
      "alt": [
        150,
        4,
        "The Deli Shaved Leg Ham 150g"
      ],
      "sp": 1,
      "was": 6.6
    },
    "eggs": {
      "p": 6.6,
      "pk": 12,
      "name": "Pace Farm Eggs For Everyone Free Range 12 Pack 600g",
      "at": "2026-10-19",
      "alt": [
        6,
        4.2,
        "Sunny Queen Free Range X Large Eggs 6 Pack 350g"
      ],
      "sp": 1,
      "was": 7.5
    },
    "cream": {
      "p": 5.2,
      "pk": 600,
      "name": "Coles Thickened Cream 600mL",
      "at": "2026-10-19",
      "alt": [
        300,
        3.2,
        "Coles Thickened Cream 300mL"
      ]
    },
    "milk": {
      "p": 4.95,
      "pk": 3000,
      "name": "Coles Full Cream Milk 3L",
      "at": "2026-10-19"
    },
    "cheese": {
      "p": 11,
      "pk": 700,
      "name": "Coles Cheese Shredded Tasty 700g",
      "at": "2026-10-19",
      "alt": [
        500,
        10.5,
        "Bega Cheese Tasty Grated 500g"
      ]
    },
    "mozz": {
      "p": 9.5,
      "pk": 450,
      "name": "Perfect Italiano Dairy Cheese Grated Mozzarella:mozzarella 450g",
      "at": "2026-10-19"
    },
    "parm": {
      "p": 5.4,
      "pk": 250,
      "name": "Coles Dairy Shredded Parmesan Cheese 250g",
      "at": "2026-10-19"
    },
    "fetta": {
      "p": 6,
      "pk": 410,
      "name": "Castello Greek Style Fetta Cubes 410g",
      "at": "2026-10-19",
      "alt": [
        200,
        3,
        "Coles Dairy Cheese Fetta Danish Style 200g"
      ]
    },
    "slices": {
      "p": 5.45,
      "pk": 12,
      "name": "Bega Cheese Burger Slices 250g",
      "at": "2026-10-19"
    },
    "yoghurt": {
      "p": 6.5,
      "pk": 1000,
      "name": "Tamar Valley Greek Style Yoghurt 1kg",
      "at": "2026-10-19",
      "alt": [
        500,
        5.3,
        "Farmers Union Greek Style Yoghurt Natural 500g"
      ],
      "sp": 1,
      "was": 8.3
    },
    "cottagecheese": {
      "p": 6,
      "pk": 500,
      "name": "Coles Low Fat Creamed Cottage Cheese 500g",
      "at": "2026-10-19",
      "alt": [
        250,
        5.25,
        "Brancourts Classic Cottage Cheese 250g"
      ]
    },
    "kimchi": {
      "p": 3.5,
      "pk": 460,
      "name": "Wicked Kimchi 460g",
      "at": "2026-10-19"
    },
    "potato": {
      "p": 6,
      "pk": 2000,
      "name": "Coles Potatoes Washed 2kg",
      "at": "2026-10-19",
      "sp": 1
    },
    "swpotato": {
      "p": 4.9,
      "pk": 1500,
      "name": "Coles I'm Perfect Sweet Potato 1.5kg",
      "at": "2026-10-19"
    },
    "onion": {
      "p": 4,
      "pk": 1000,
      "name": "Coles Brown Onions 1kg",
      "at": "2026-10-19",
      "alt": [
        200,
        0.84,
        "Coles Loose Brown Onions approx. 200g"
      ]
    },
    "red_onion": {
      "p": 1.1,
      "pk": 1,
      "name": "Coles Onions Red Local approx. 200g",
      "at": "2026-10-19"
    },
    "garlic": {
      "p": 1.25,
      "pk": 1,
      "name": "Coles Minced Garlic 250g",
      "at": "2026-10-19"
    },
    "ginger": {
      "p": 4,
      "pk": 160,
      "name": "MasterFoods Freshly Grated Ginger 160g",
      "at": "2026-10-19"
    },
    "carrot": {
      "p": 2.6,
      "pk": 1500,
      "name": "Coles I'm Perfect Carrots Prepacked 1.5kg",
      "at": "2026-10-19",
      "alt": [
        1000,
        2.5,
        "Coles Carrots 1Kg"
      ]
    },
    "broccoli": {
      "p": 2.21,
      "pk": 340,
      "name": "Coles Broccoli Medium approx. 340g",
      "at": "2026-10-19"
    },
    "capsicum": {
      "p": 1.96,
      "pk": 1,
      "name": "Coles Red Capsicum Loose approx. 220g",
      "at": "2026-10-19"
    },
    "zucchini": {
      "p": 1.78,
      "pk": 200,
      "name": "Coles Green Zucchini approx. 200g",
      "at": "2026-10-19"
    },
    "cherrytom": {
      "p": 3.5,
      "pk": 250,
      "name": "Coles Cherry Tomatoes 250g",
      "at": "2026-10-19"
    },
    "spinach": {
      "p": 3.3,
      "pk": 120,
      "name": "Coles Baby Spinach 120g",
      "at": "2026-10-19",
      "alt": [
        60,
        2.2,
        "Coles Baby Spinach 60g"
      ],
      "sp": 1
    },
    "cos": {
      "p": 2.9,
      "pk": 1,
      "name": "Coles Lettuce Cos Baby Hearts 2 Pack",
      "at": "2026-10-19"
    },
    "cabbage": {
      "p": 4.5,
      "pk": 1,
      "name": "Coles Cabbage Half Red 1 each",
      "at": "2026-10-19"
    },
    "cucumber": {
      "p": 2.9,
      "pk": 1,
      "name": "Coles Cucumbers Continental Loose 1 Each",
      "at": "2026-10-19"
    },
    "avocado": {
      "p": 2.7,
      "pk": 1,
      "name": "Coles Hass Avocados 1 Each",
      "at": "2026-10-19"
    },
    "lemon": {
      "p": 1.6,
      "pk": 1,
      "name": "Coles Lemons 1 Each",
      "at": "2026-10-19",
      "sp": 1
    },
    "lime": {
      "p": 1.8,
      "pk": 1,
      "name": "Coles Limes Medium Loose 1 each",
      "at": "2026-10-19",
      "sp": 1
    },
    "springonion": {
      "p": 3,
      "pk": 1,
      "name": "Coles Spring Onions 1 Bunch",
      "at": "2026-10-19"
    },
    "coriander": {
      "p": 3.3,
      "pk": 1,
      "name": "Coles Sleeved Herbs Coriander 1 Bunch",
      "at": "2026-10-19",
      "sp": 1
    },
    "mint": {
      "p": 3,
      "pk": 1,
      "name": "Tic Tac Two Raspberry & Lemon Sugar Free Mints 38.5g",
      "at": "2026-10-19",
      "sp": 1,
      "was": 3.75
    },
    "thaibasil": {
      "p": 3.3,
      "pk": 1,
      "name": "Coles Herb Punnets Thai Basil 15g",
      "at": "2026-10-19"
    },
    "mushroom": {
      "p": 6,
      "pk": 500,
      "name": "Coles Cup Mushrooms 500g",
      "at": "2026-10-19",
      "alt": [
        200,
        4,
        "Coles Mushrooms Cup 200g"
      ],
      "sp": 1
    },
    "eggplant": {
      "p": 3.45,
      "pk": 1,
      "name": "Coles Purple Eggplant approx. 500g",
      "at": "2026-10-19",
      "sp": 1
    },
    "greenbeans": {
      "p": 5.2,
      "pk": 825,
      "name": "Birds Eye Frozen Green Beans 825g",
      "at": "2026-10-19"
    },
    "lamb_mince": {
      "p": 11,
      "pk": 750,
      "name": "El- Amin's Halal Kofta Lamb And Beef Mince 750g",
      "at": "2026-10-19",
      "alt": [
        500,
        8,
        "Coles 3 Star Lamb Mince 500g"
      ]
    },
    "pork_belly": {
      "p": 23.4,
      "pk": 1300,
      "name": "Coles Pork Belly Roast Boneless approx. 1.3kg",
      "at": "2026-10-19",
      "alt": [
        300,
        9,
        "Coles Sliced Pork Belly With Sweet Soy Glaze 300g"
      ]
    },
    "hummus": {
      "p": 6,
      "pk": 200,
      "name": "Tahini Neri Classic Hummus Dip 200g",
      "at": "2026-10-19"
    },
    "beansprouts": {
      "p": 2.15,
      "pk": 410,
      "name": "UFC Bean Sprouts 410g",
      "at": "2026-10-19",
      "sp": 1,
      "was": 2.7
    },
    "massaman": {
      "p": 3,
      "pk": 225,
      "name": "Maesri Masaman Curry Paste 225g",
      "at": "2026-10-19",
      "alt": [
        114,
        2.3,
        "Maesri Masaman Curry Paste 114g"
      ],
      "sp": 1,
      "was": 4
    },
    "ricenoodles": {
      "p": 2.4,
      "pk": 375,
      "name": "Erawan Rice Sticks Red Large Noodles 375g",
      "at": "2026-10-19",
      "alt": [
        200,
        2.2,
        "Erawan Rice Sticks Pad Thai Noodles 200g"
      ],
      "sp": 1,
      "was": 3
    },
    "turkish": {
      "p": 2.6,
      "pk": 4,
      "name": "Coles Turkish Rolls 4 Pack 400g",
      "at": "2026-10-19"
    },
    "currypowder": {
      "p": 4,
      "pk": 100,
      "name": "Clive of India Curry Powder 100g",
      "at": "2026-10-19",
      "alt": [
        50,
        2.65,
        "Hoyts Mild Curry Powder 50g"
      ]
    },
    "worcestershire": {
      "p": 2,
      "pk": 250,
      "name": "Coles Worcestershire Sauce 250mL",
      "at": "2026-10-19"
    },
    "scotch": {
      "p": 23,
      "pk": 480,
      "name": "Coles Beef Scotch Steak Fillet 2 Pack 480g",
      "at": "2026-10-19",
      "alt": [
        170,
        8.5,
        "Drovers Choice Beef Scotch Fillet Steaks 170g"
      ]
    },
    "lambcutlets": {
      "p": 30.23,
      "pk": 775,
      "name": "Coles Lamb Cutlets approx. 775g",
      "at": "2026-10-19",
      "alt": [
        320,
        6.5,
        "McCain Red Box Plated Lamb Cutlet Gravy 320g"
      ],
      "sp": 1,
      "was": 39.53
    },
    "barra": {
      "p": 26,
      "pk": 1000,
      "name": "Kb's Barramundi Fillets 1kg",
      "at": "2026-10-19",
      "alt": [
        250,
        6,
        "Pacific West Air Crisp Barramundi Crispy Tempura Batter 250g"
      ]
    },
    "wagyu": {
      "p": 6.25,
      "pk": 500,
      "name": "Coles Pork & Beef 3 Star Regular Mince Bolognese 500g",
      "at": "2026-10-19"
    },
    "prosciutto": {
      "p": 8,
      "pk": 150,
      "name": "The Deli Prosciutto 150g",
      "at": "2026-10-19",
      "alt": [
        100,
        6,
        "Coles Sliced Prosciutto 100g"
      ],
      "sp": 1
    },
    "chk_mince": {
      "p": 6.5,
      "pk": 500,
      "name": "Coles RSPCA Approved Chicken Mince 500g",
      "at": "2026-10-19",
      "sp": 1
    },
    "pumpkin": {
      "p": 1.75,
      "pk": 700,
      "name": "Coles Wrapped Butternut Pumpkin approx. 700g each",
      "at": "2026-10-19",
      "sp": 1
    },
    "iceberg": {
      "p": 2.2,
      "pk": 1,
      "name": "Coles Shredded Iceberg Lettuce 200g",
      "at": "2026-10-19"
    },
    "rosemary": {
      "p": 2,
      "pk": 1,
      "name": "Hoyts Rosemary 25g",
      "at": "2026-10-19"
    },
    "sage": {
      "p": 2.7,
      "pk": 1,
      "name": "MasterFoods Ground Sage Leaves 20g",
      "at": "2026-10-19"
    },
    "harissa": {
      "p": 2.65,
      "pk": 350,
      "name": "Zahra Harissa Paste 350g",
      "at": "2026-10-19"
    },
    "capers": {
      "p": 4,
      "pk": 230,
      "name": "Always Fresh Capers Vinegar 230g",
      "at": "2026-10-19",
      "alt": [
        110,
        2.75,
        "Coles Baby Capers 110g"
      ]
    },
    "quinoa": {
      "p": 2.8,
      "pk": 250,
      "name": "Sunrice Microwave Brown Rice & Quinoa Rice Cup 2x125g 250g",
      "at": "2026-10-19",
      "sp": 1,
      "was": 3.5
    },
    "brownrice": {
      "p": 2.5,
      "pk": 1000,
      "name": "Coles Brown Rice 1kg",
      "at": "2026-10-19"
    },
    "miso": {
      "p": 4.3,
      "pk": 400,
      "name": "Hikari White Miso Paste 400g",
      "at": "2026-10-19"
    },
    "pork_cutlets": {
      "p": 10.5,
      "pk": 800,
      "name": "Coles Pork Forequarter Cutlets 800g",
      "at": "2026-10-19",
      "alt": [
        500,
        10.75,
        "Coles Pork Cutlets approx. 500g pack"
      ],
      "sp": 1,
      "was": 12.5
    },
    "beef_cheek": {
      "p": 19.2,
      "pk": 600,
      "name": "Coles No Added Hormone Beef Cheeks approx. 600g",
      "at": "2026-10-19"
    },
    "lamb_shanks": {
      "p": 10.85,
      "pk": 775,
      "name": "Coles Lamb Shanks 2 Pack (cv) approx. 775g",
      "at": "2026-10-19",
      "alt": [
        175,
        3,
        "MasterFoods Slow Cooker Garlic & Herb Lamb Shanks Recipe Base 175g"
      ]
    },
    "duck": {
      "p": 14.5,
      "pk": 380,
      "name": "Luv A Duck Smoke Infused Duck Breast 380g",
      "at": "2026-10-19",
      "sp": 1,
      "was": 16.5
    },
    "rocket": {
      "p": 3.3,
      "pk": 120,
      "name": "Coles Lettuce Baby Rocket 120g",
      "at": "2026-10-19",
      "alt": [
        60,
        2.2,
        "Coles Baby Rocket 60g"
      ],
      "sp": 1
    },
    "asparagus": {
      "p": 1.2,
      "pk": 1,
      "name": "Coles Green Asparagus 1 each",
      "at": "2026-10-19",
      "sp": 1
    },
    "broccolini": {
      "p": 6,
      "pk": 1,
      "name": "Coles Family Broccolini 1 each",
      "at": "2026-10-19"
    },
    "snowpeas": {
      "p": 7.4,
      "pk": 250,
      "name": "Coles Snow Peas Prepacked 250g",
      "at": "2026-10-19"
    },
    "ricepaper": {
      "p": 4,
      "pk": 375,
      "name": "Roll'd Rice Paper 375g",
      "at": "2026-10-19",
      "alt": [
        250,
        2.7,
        "Valcom Rice Paper 250g"
      ],
      "sp": 1,
      "was": 5
    },
    "fivespice": {
      "p": 2.4,
      "pk": 41,
      "name": "Coles Five Spice Chinese 41g",
      "at": "2026-10-19"
    },
    "peas": {
      "p": 2.5,
      "pk": 1000,
      "name": "Coles Simply Peas Snap Frozen 1Kg",
      "at": "2026-10-19"
    },
    "prawns": {
      "p": 29,
      "pk": 1000,
      "name": "KB's Raw Prawn Tail Off 1kg",
      "at": "2026-10-19"
    },
    "tintom": {
      "p": 1.3,
      "pk": 400,
      "name": "Coles Mixed Herb Crushed Tomatoes 400g",
      "at": "2026-10-19"
    },
    "passata": {
      "p": 2,
      "pk": 700,
      "name": "Coles Italian Passata Sauce 700g",
      "at": "2026-10-19"
    },
    "tompaste": {
      "p": 1,
      "pk": 140,
      "name": "Coles Italian Tomato Paste 140g",
      "at": "2026-10-19"
    },
    "coconut": {
      "p": 1.7,
      "pk": 400,
      "name": "Coles Simply Light Coconut Milk 400mL",
      "at": "2026-10-19"
    },
    "blackbeans": {
      "p": 0.9,
      "pk": 420,
      "name": "Coles Black Beans 420g",
      "at": "2026-10-19"
    },
    "corn": {
      "p": 1,
      "pk": 420,
      "name": "Coles Simply Corn Kernels 420g",
      "at": "2026-10-19"
    },
    "sundried": {
      "p": 5,
      "pk": 425,
      "name": "Latina Fresh Creamy Sun-dried Tomato Pasta Sauce 425g",
      "at": "2026-10-19",
      "sp": 1,
      "was": 7.5
    },
    "greencurry": {
      "p": 3,
      "pk": 225,
      "name": "Maesri Green Curry Paste 225g",
      "at": "2026-10-19",
      "alt": [
        114,
        2.3,
        "Maesri Green Curry Paste 114g"
      ],
      "sp": 1,
      "was": 4
    },
    "currypaste": {
      "p": 4,
      "pk": 270,
      "name": "Arth Paste Masala Tikka Masala Paste 270g",
      "at": "2026-10-19",
      "sp": 1,
      "was": 5.8
    },
    "pickles": {
      "p": 3,
      "pk": 500,
      "name": "Wicked Dill Pickle 500g",
      "at": "2026-10-19"
    },
    "peanuts": {
      "p": 8,
      "pk": 750,
      "name": "Coles. Aust Roasted & Salted Peanuts 750g",
      "at": "2026-10-19",
      "alt": [
        400,
        5,
        "Coles Roasted & Salted Peanuts 400g"
      ]
    },
    "arborio": {
      "p": 4.2,
      "pk": 1000,
      "name": "Cucina Matese Arborio Rice 1kg",
      "at": "2026-10-19",
      "alt": [
        750,
        4.8,
        "Nice Rice Australian Arborio Rice 750 g"
      ]
    },
    "vermicelli": {
      "p": 3,
      "pk": 500,
      "name": "Wai Wai Rice Vermicelli Large 500g",
      "at": "2026-10-19",
      "alt": [
        340,
        2.15,
        "Coles Asia Vermicelli Rice Noodles 340g"
      ],
      "sp": 1,
      "was": 4
    },
    "pasta": {
      "p": 1,
      "pk": 500,
      "name": "Coles Durum Wheat Pasta Large Spirals 500g",
      "at": "2026-10-19"
    },
    "lasagne": {
      "p": 2,
      "pk": 250,
      "name": "Coles Pasta Lasagne Sheets 250g",
      "at": "2026-10-19"
    },
    "panko": {
      "p": 3.7,
      "pk": 190,
      "name": "Kooka A Krumb Panko Breadcrumbs 190g",
      "at": "2026-10-19"
    },
    "buns": {
      "p": 3.6,
      "pk": 4,
      "name": "Coles Brioche Burger Buns 4 Pack 200g",
      "at": "2026-10-19"
    },
    "wraps": {
      "p": 4,
      "pk": 8,
      "name": "Mountain Bread Natural Wraps 8 Pack 200g",
      "at": "2026-10-19",
      "sp": 1
    },
    "tortillas": {
      "p": 5,
      "pk": 10,
      "name": "Old El Paso Tortillas Mini Tacos 10 Pack 250g",
      "at": "2026-10-19"
    },
    "naan": {
      "p": 2.5,
      "pk": 4,
      "name": "Katoomba Garlic Naan 4 Pack 320g",
      "at": "2026-10-19",
      "sp": 1,
      "was": 5
    },
    "gf_lasagne": {
      "p": 8.5,
      "pk": 280,
      "name": "Latina Fresh Gluten Free Lasagne Sheets 280g",
      "at": "2026-10-19"
    },
    "corn_tortillas": {
      "p": 4,
      "pk": 12,
      "name": "Mission Original White Corn Tortilla Strips 230g",
      "at": "2026-10-19",
      "sp": 1
    },
    "tamari": {
      "p": 4.5,
      "pk": 280,
      "name": "Chang's Tamari Soy Sauce Light 280mL",
      "at": "2026-10-19"
    },
    "sriracha": {
      "p": 4.5,
      "pk": 480,
      "name": "Trident Sriracha Sauce 480mL",
      "at": "2026-10-19",
      "sp": 1,
      "was": 5.8
    },
    "rice": {
      "p": 13.5,
      "pk": 5000,
      "name": "Sunrice Jasmine White Rice 5kg",
      "at": "2026-10-19",
      "alt": [
        1000,
        4.5,
        "Nice Rice Australian Jasmine Rice 1Kg"
      ],
      "sp": 1,
      "was": 27
    },
    "flour": {
      "p": 2.25,
      "pk": 2000,
      "name": "The Kind Harvest Plain Flour 2Kg",
      "at": "2026-10-19",
      "alt": [
        1000,
        1.3,
        "Coles Simply Plain Flour 1Kg"
      ],
      "sp": 1,
      "was": 4.5
    },
    "cornflour": {
      "p": 2.2,
      "pk": 500,
      "name": "Coles Cornflour 500g",
      "at": "2026-10-19"
    },
    "soy": {
      "p": 1.9,
      "pk": 500,
      "name": "Coles Soy Sauce 500mL",
      "at": "2026-10-19"
    },
    "fishsauce": {
      "p": 2.85,
      "pk": 300,
      "name": "Squid Fish Sauce 300mL",
      "at": "2026-10-19"
    },
    "sesameoil": {
      "p": 8.6,
      "pk": 370,
      "name": "Coles Asia Sesame Oil 370mL",
      "at": "2026-10-19",
      "alt": [
        150,
        4,
        "Yeo's Sesame Oil 150mL"
      ]
    },
    "ricevinegar": {
      "p": 3.5,
      "pk": 500,
      "name": "Coles Rice Wine Vinegar 500mL",
      "at": "2026-10-19",
      "alt": [
        250,
        2,
        "Obento Rice Wine Vinegar 250mL"
      ]
    },
    "whitevinegar": {
      "p": 1.8,
      "pk": 2000,
      "name": "Coles Simply White Vinegar 2L",
      "at": "2026-10-19"
    },
    "mirin": {
      "p": 3.5,
      "pk": 250,
      "name": "Obento Mirin Seasoning 250mL",
      "at": "2026-10-19",
      "sp": 1,
      "was": 4.4
    },
    "honey": {
      "p": 4.4,
      "pk": 400,
      "name": "Coles Simply Pure Honey Squeeze 400g",
      "at": "2026-10-19"
    },
    "brownsugar": {
      "p": 3.1,
      "pk": 1000,
      "name": "Coles Sugar Brown 1Kg",
      "at": "2026-10-19",
      "alt": [
        500,
        2.5,
        "CSR Brown Sugar 500g"
      ]
    },
    "gochujang": {
      "p": 3.2,
      "pk": 170,
      "name": "Ottogi Gochujang Hot Pepper Paste 170g",
      "at": "2026-10-19"
    },
    "mayo": {
      "p": 2.8,
      "pk": 445,
      "name": "Coles Whole Egg Mayonnaise 445g",
      "at": "2026-10-19"
    },
    "ketchup": {
      "p": 4.2,
      "pk": 500,
      "name": "MasterFoods Squeezy Sauce Tomato 500mL",
      "at": "2026-10-19",
      "sp": 1
    },
    "mustard": {
      "p": 5.8,
      "pk": 550,
      "name": "MasterFoods Mild American Mustard Smooth & Tangy 550g",
      "at": "2026-10-19",
      "alt": [
        260,
        2.8,
        "Coles Mild American Mustard 260g"
      ]
    },
    "sesameseeds": {
      "p": 2.5,
      "pk": 150,
      "name": "Coles Sesame Seeds 150g",
      "at": "2026-10-19"
    },
    "stockpowder": {
      "p": 4.3,
      "pk": 168,
      "name": "Massel Stock Powder Chicken 168g",
      "at": "2026-10-19"
    },
    "lemongrass": {
      "p": 4.2,
      "pk": 80,
      "name": "Gourmet Garden Lemongrass Cold Blended Paste 80g",
      "at": "2026-10-19"
    },
    "cumin": {
      "p": 2.65,
      "pk": 42,
      "name": "Coles Cumin Seeds Ground 42g",
      "at": "2026-10-19",
      "alt": [
        25,
        2.65,
        "Hoyts Ground Cumin 25g"
      ]
    },
    "smokedpaprika": {
      "p": 3,
      "pk": 39,
      "name": "Coles Smoked Paprika 39g",
      "at": "2026-10-19"
    },
    "garammasala": {
      "p": 3.2,
      "pk": 42,
      "name": "Coles Garam Masala 42g",
      "at": "2026-10-19",
      "alt": [
        25,
        2.8,
        "Hoyts Garam Masala 25g"
      ]
    },
    "turmeric": {
      "p": 2.7,
      "pk": 47,
      "name": "Coles Turmeric Ground 47g",
      "at": "2026-10-19",
      "alt": [
        34,
        2.9,
        "Masterfoods Ground Turmeric 34g"
      ]
    },
    "chilliflakes": {
      "p": 3,
      "pk": 37,
      "name": "Coles Chilli Flakes Hot 37g",
      "at": "2026-10-19"
    },
    "chillipowder": {
      "p": 2.25,
      "pk": 50,
      "name": "Hoyts Chilli Powder 50g",
      "at": "2026-10-19"
    },
    "cinnamon": {
      "p": 2.45,
      "pk": 41,
      "name": "Coles Cinnamon Ground 41g",
      "at": "2026-10-19",
      "alt": [
        28,
        2.9,
        "MasterFoods Ground Cinnamon 28g"
      ]
    },
    "castersugar": {
      "p": 2.2,
      "pk": 1000,
      "name": "Coles Caster Sugar 1Kg",
      "at": "2026-10-19"
    },
    "cocoa": {
      "p": 5,
      "pk": 250,
      "name": "Coles Cocoa Powder 250g",
      "at": "2026-10-19"
    },
    "vanilla": {
      "p": 6,
      "pk": 50,
      "name": "Queen Extract With Seeds Vanilla 50mL",
      "at": "2026-10-19",
      "sp": 1,
      "was": 8
    },
    "bakingpowder": {
      "p": 1.8,
      "pk": 125,
      "name": "Coles Baking Powder 125g",
      "at": "2026-10-19"
    },
    "oats": {
      "p": 3.5,
      "pk": 1800,
      "name": "Coles Simply Rolled Oats 1.8Kg",
      "at": "2026-10-19"
    },
    "desiccated": {
      "p": 4.9,
      "pk": 500,
      "name": "Coles Desiccated Coconut 500g",
      "at": "2026-10-19",
      "alt": [
        250,
        3.7,
        "Mckenzie's Coconut Desiccated 250g"
      ]
    },
    "darkchoc": {
      "p": 4.5,
      "pk": 225,
      "name": "Cadbury Real Dark Chocolate Melts 225g",
      "at": "2026-10-19",
      "alt": [
        165,
        4.5,
        "Cadbury Baking 70% Dark Chocolate Block 165g"
      ],
      "sp": 1,
      "was": 7.5
    },
    "chocchips": {
      "p": 5.7,
      "pk": 375,
      "name": "Coles Simply Dark Choc Buttons 375g",
      "at": "2026-10-19"
    },
    "sweetbiscuits": {
      "p": 2.5,
      "pk": 250,
      "name": "Arnott's Plain Biscuits Marie 250g",
      "at": "2026-10-19"
    },
    "creamcheese": {
      "p": 5.7,
      "pk": 250,
      "name": "Philadelphia Original Cream Cheese Block 250g",
      "at": "2026-10-19"
    },
    "banana": {
      "p": 0.83,
      "pk": 1,
      "name": "Coles Bananas approx. 170g",
      "at": "2026-10-19"
    }
  },
  "woolies": {
    "chk_thigh": {
      "p": 9.9,
      "pk": 550,
      "name": "Woolworths RSPCA Approved Chicken Thigh Fillets 550g",
      "at": "2026-10-19"
    },
    "chk_breast": {
      "p": 9.4,
      "pk": 650,
      "name": "Woolworths RSPCA Approved Chicken Breast Fillets 650g",
      "at": "2026-10-19",
      "sp": 1
    },
    "beef_rump": {
      "p": 9,
      "pk": 250,
      "name": "Woolworths Beef Rump Steak 250g",
      "at": "2026-10-19"
    },
    "pork_mince": {
      "p": 6.25,
      "pk": 500,
      "name": "Woolworths Pork & Beef Mince 500g",
      "at": "2026-10-19",
      "sp": 1
    },
    "salmon": {
      "p": 8.5,
      "pk": 250,
      "name": "Woolworths Frozen Salmon Fillets Skin On 250g",
      "at": "2026-10-19"
    },
    "chorizo": {
      "p": 7.5,
      "pk": 250,
      "name": "D'Orsogna Chorizo 250g",
      "at": "2026-10-19",
      "alt": [
        80,
        3.4,
        "D'Orsogna Deli Fresh Spicy Chorizo Salami 80g"
      ]
    },
    "bacon": {
      "p": 7.5,
      "pk": 500,
      "name": "Woolworths Middle Bacon 500g",
      "at": "2026-10-19",
      "alt": [
        250,
        4.4,
        "Woolworths Middle Bacon 250g"
      ]
    },
    "eggs": {
      "p": 6.4,
      "pk": 12,
      "name": "Woolworths 12 Pack Large Free Range Eggs 600g",
      "at": "2026-10-19",
      "alt": [
        6,
        4.9,
        "Woolworths 6 Pack Extra Large Free Range Eggs 350g"
      ]
    },
    "cream": {
      "p": 5.2,
      "pk": 600,
      "name": "Woolworths Thickened Cream 600mL",
      "at": "2026-10-19",
      "alt": [
        300,
        3.2,
        "Woolworths Thickened Cream 300mL"
      ]
    },
    "milk": {
      "p": 4.95,
      "pk": 3000,
      "name": "Woolworths Full Cream Milk 3L",
      "at": "2026-10-19",
      "alt": [
        1000,
        1.75,
        "Woolworths Full Cream Milk 1L"
      ]
    },
    "butter": {
      "p": 7,
      "pk": 500,
      "name": "Woolworths Salted Butter 500g",
      "at": "2026-10-19",
      "alt": [
        250,
        5.6,
        "Woolworths Salted Butter Spreadable 250g"
      ]
    },
    "cheese": {
      "p": 8.5,
      "pk": 700,
      "name": "Hillview Tasty Shredded Cheese 700g",
      "at": "2026-10-19",
      "alt": [
        500,
        8.3,
        "Woolworths Tasty Shredded Cheese 500g"
      ]
    },
    "mozz": {
      "p": 7.5,
      "pk": 500,
      "name": "Dairyworks Grated Mozzarella Cheese 500g",
      "at": "2026-10-19",
      "alt": [
        150,
        4,
        "Perfect Italiano Grated Mozzarella 150g"
      ]
    },
    "parm": {
      "p": 5.4,
      "pk": 250,
      "name": "Woolworths Shredded Parmesan Cheese 250g",
      "at": "2026-10-19",
      "alt": [
        125,
        4.5,
        "Perfect Italiano Parmesan Cheese Grated 125g"
      ]
    },
    "fetta": {
      "p": 3,
      "pk": 200,
      "name": "Woolworths Greek Style Fetta 200g",
      "at": "2026-10-19"
    },
    "slices": {
      "p": 5.2,
      "pk": 12,
      "name": "Woolworths Cheese Burger Slices 250g",
      "at": "2026-10-19"
    },
    "sourcream": {
      "p": 3.1,
      "pk": 300,
      "name": "Woolworths Sour Cream 300mL",
      "at": "2026-10-19"
    },
    "yoghurt": {
      "p": 4.2,
      "pk": 1000,
      "name": "Woolworths Natural Greek Style Yoghurt 1kg",
      "at": "2026-10-19"
    },
    "cottagecheese": {
      "p": 6.5,
      "pk": 500,
      "name": "Woolworths Creamed Cottage Cheese 500g",
      "at": "2026-10-19",
      "alt": [
        200,
        4.2,
        "Brancourts Low Fat Cottage Cheese 200g"
      ]
    },
    "kimchi": {
      "p": 2.7,
      "pk": 460,
      "name": "Bryne Co Kimchi 460g",
      "at": "2026-10-19"
    },
    "potato": {
      "p": 6.5,
      "pk": 2000,
      "name": "Woolworths Red Washed Potatoes Bag 2kg",
      "at": "2026-10-19"
    },
    "onion": {
      "p": 2.5,
      "pk": 1000,
      "name": "Woolworths Onion Brown Bag 1kg",
      "at": "2026-10-19"
    },
    "red_onion": {
      "p": 0.83,
      "pk": 1,
      "name": "Onion Red each",
      "at": "2026-10-19"
    },
    "garlic": {
      "p": 1.88,
      "pk": 1,
      "name": "Garlic Head each",
      "at": "2026-10-19"
    },
    "ginger": {
      "p": 4.2,
      "pk": 80,
      "name": "Gourmet Garden Paste Ginger 80g",
      "at": "2026-10-19",
      "sp": 1
    },
    "carrot": {
      "p": 2.5,
      "pk": 1000,
      "name": "Woolworths Australian Grown Carrots 1kg",
      "at": "2026-10-19"
    },
    "broccoli": {
      "p": 2.8,
      "pk": 500,
      "name": "Bell Farms Frozen Broccoli Florets 500g",
      "at": "2026-10-19"
    },
    "capsicum": {
      "p": 1.98,
      "pk": 1,
      "name": "Red Capsicum each",
      "at": "2026-10-19"
    },
    "zucchini": {
      "p": 5.9,
      "pk": 500,
      "name": "Zucchini Green Punnet 500g",
      "at": "2026-10-19"
    },
    "cherrytom": {
      "p": 2.15,
      "pk": 400,
      "name": "Mutti Whole Cherry Tomatoes 400g",
      "at": "2026-10-19",
      "sp": 1,
      "was": 2.7
    },
    "spinach": {
      "p": 5,
      "pk": 280,
      "name": "Woolworths Baby Leaf Spinach 280g",
      "at": "2026-10-19",
      "alt": [
        120,
        3.3,
        "Woolworths Baby Leaf Spinach 120g"
      ]
    },
    "cos": {
      "p": 3.5,
      "pk": 1,
      "name": "Woolworths Lettuce Baby Cos each",
      "at": "2026-10-19",
      "sp": 1
    },
    "cabbage": {
      "p": 4.25,
      "pk": 1,
      "name": "Cabbage Red Half each",
      "at": "2026-10-19"
    },
    "cucumber": {
      "p": 3.2,
      "pk": 1,
      "name": "Woolworths Continental Cucumbers each",
      "at": "2026-10-19"
    },
    "avocado": {
      "p": 2.5,
      "pk": 1,
      "name": "Hass Avocado each",
      "at": "2026-10-19"
    },
    "lemon": {
      "p": 1.49,
      "pk": 1,
      "name": "Lemon Loose each",
      "at": "2026-10-19"
    },
    "lime": {
      "p": 1.05,
      "pk": 1,
      "name": "Woolworths Citrus Juice Lime Bottle 250mL",
      "at": "2026-10-19"
    },
    "springonion": {
      "p": 3,
      "pk": 1,
      "name": "Spring Onion Bunch each",
      "at": "2026-10-19"
    },
    "coriander": {
      "p": 3.3,
      "pk": 1,
      "name": "Woolworths Fresh Herb Coriander Bunch each",
      "at": "2026-10-19"
    },
    "mint": {
      "p": 1.6,
      "pk": 1,
      "name": "Eclipse Spearmint Chewy Mints Tin 27g",
      "at": "2026-10-19",
      "sp": 1,
      "was": 2
    },
    "thaibasil": {
      "p": 2,
      "pk": 1,
      "name": "Lobo Thai Basil Seasoning Paste (Pad Ka Prao) - 50g",
      "at": "2026-10-19"
    },
    "mushroom": {
      "p": 7,
      "pk": 500,
      "name": "Woolworths Mushrooms Cups Punnet 500g",
      "at": "2026-10-19",
      "alt": [
        200,
        4,
        "Woolworths Mushrooms Cups Punnet 200g"
      ]
    },
    "eggplant": {
      "p": 2.21,
      "pk": 1,
      "name": "Fresh Eggplant each",
      "at": "2026-10-19"
    },
    "greenbeans": {
      "p": 6.3,
      "pk": 340,
      "name": "Mulgowie Green Beans Cleaned & Cut 340g",
      "at": "2026-10-19"
    },
    "lamb_mince": {
      "p": 9,
      "pk": 500,
      "name": "Woolworths Lamb Mince 500g",
      "at": "2026-10-19"
    },
    "pork_belly": {
      "p": 11,
      "pk": 350,
      "name": "Woolworths Pork Belly Thinly Sliced 350g",
      "at": "2026-10-19"
    },
    "beansprouts": {
      "p": 2.7,
      "pk": 410,
      "name": "UFC Canned Bean Sprouts 410g",
      "at": "2026-10-19",
      "alt": [
        250,
        2.6,
        "Aussie Sprouts Bean 250g"
      ]
    },
    "massaman": {
      "p": 3.4,
      "pk": 210,
      "name": "Valcom Massaman Curry Paste 210g",
      "at": "2026-10-19",
      "sp": 1,
      "was": 4.3
    },
    "turkish": {
      "p": 2.6,
      "pk": 4,
      "name": "Woolworths Stonebaked Turkish Rolls 4 pack",
      "at": "2026-10-19"
    },
    "currypowder": {
      "p": 4,
      "pk": 100,
      "name": "Clive Of India Curry Powder 100g",
      "at": "2026-10-19",
      "alt": [
        50,
        2.65,
        "Hoyt's Curry Powder Mild 50g"
      ]
    },
    "worcestershire": {
      "p": 2,
      "pk": 250,
      "name": "Woolworths Worcestershire Sauce 250mL",
      "at": "2026-10-19"
    },
    "scotch": {
      "p": 9,
      "pk": 170,
      "name": "Woolworths Beef Scotch Fillet Steak 170g",
      "at": "2026-10-19"
    },
    "lambcutlets": {
      "p": 7.9,
      "pk": 320,
      "name": "McCain Lamb Cutlet & Gravy Frozen 320g",
      "at": "2026-10-19"
    },
    "barra": {
      "p": 12,
      "pk": 250,
      "name": "Birds Eye Deli Barramundi Fillets Light Batter 250g",
      "at": "2026-10-19"
    },
    "prosciutto": {
      "p": 6.6,
      "pk": 100,
      "name": "Primo Reserve Gourmet Prosciutto Sliced 100g",
      "at": "2026-10-19"
    },
    "chk_mince": {
      "p": 10.5,
      "pk": 1000,
      "name": "Woolworths RSPCA Approved Chicken Mince 1kg",
      "at": "2026-10-19",
      "alt": [
        500,
        5.5,
        "Woolworths RSPCA Approved Chicken Mince 500g"
      ]
    },
    "iceberg": {
      "p": 2.2,
      "pk": 1,
      "name": "Woolworths Iceberg Shredded Lettuce 200g",
      "at": "2026-10-19"
    },
    "corncob": {
      "p": 2.99,
      "pk": 1,
      "name": "Corn Cob Holder 10 Pack",
      "at": "2026-10-19"
    },
    "rosemary": {
      "p": 2,
      "pk": 1,
      "name": "Woolworths Rosemary Leaves 18g",
      "at": "2026-10-19",
      "sp": 1
    },
    "sage": {
      "p": 3.3,
      "pk": 1,
      "name": "Woolworths Sage Fresh Herb Punnet 10g",
      "at": "2026-10-19"
    },
    "harissa": {
      "p": 4.5,
      "pk": 180,
      "name": "Al'Fez Harissa Paste 180g",
      "at": "2026-10-19",
      "sp": 1,
      "was": 7.5
    },
    "capers": {
      "p": 3.25,
      "pk": 230,
      "name": "Always Fresh Capers Vinegar 230g",
      "at": "2026-10-19",
      "alt": [
        99,
        2.15,
        "Bryne Co Baby Capers 99g"
      ],
      "sp": 1,
      "was": 4
    },
    "quinoa": {
      "p": 2.15,
      "pk": 250,
      "name": "Macro Brown Rice Quinoa Chia & Garlic Pouch 250g",
      "at": "2026-10-19"
    },
    "brownrice": {
      "p": 2.5,
      "pk": 1000,
      "name": "Woolworths Brown Rice Grain 1kg",
      "at": "2026-10-19"
    },
    "miso": {
      "p": 4.3,
      "pk": 400,
      "name": "Hikari Japanese Paste White Miso 400g",
      "at": "2026-10-19"
    },
    "lamb_shanks": {
      "p": 3,
      "pk": 175,
      "name": "MasterFoods Garlic & Herb Lamb Shanks Slow Cook Recipe Base 175g",
      "at": "2026-10-19",
      "sp": 1
    },
    "duck": {
      "p": 15.5,
      "pk": 380,
      "name": "Luv-A-Duck Fresh Duck Breast Fillets 380g",
      "at": "2026-10-19"
    },
    "rocket": {
      "p": 3.3,
      "pk": 120,
      "name": "Woolworths Baby Leaf Rocket 120g",
      "at": "2026-10-19",
      "alt": [
        60,
        2.2,
        "Woolworths Baby Leaf Rocket 60g"
      ]
    },
    "asparagus": {
      "p": 1.2,
      "pk": 1,
      "name": "Woolworths Asparagus Green Bunch each",
      "at": "2026-10-19"
    },
    "broccolini": {
      "p": 2.3,
      "pk": 1,
      "name": "Woolworths Broccolini Bunch each",
      "at": "2026-10-19"
    },
    "snowpeas": {
      "p": 6.5,
      "pk": 250,
      "name": "Woolworths Snow Peas Fresh Bag 250g",
      "at": "2026-10-19"
    },
    "fivespice": {
      "p": 3.5,
      "pk": 30,
      "name": "MasterFoods Chinese 5 Spice 30g",
      "at": "2026-10-19",
      "sp": 1
    },
    "peas": {
      "p": 2.5,
      "pk": 1000,
      "name": "Woolworths Essentials Frozen Peas 1kg",
      "at": "2026-10-19"
    },
    "prawns": {
      "p": 12,
      "pk": 500,
      "name": "Ocean Chef Peeled Tail Off & Deveined Raw Prawns 500g",
      "at": "2026-10-19",
      "sp": 1,
      "was": 16
    },
    "tintom": {
      "p": 1.8,
      "pk": 400,
      "name": "Ardmona Crushed Vine Ripened Tomatoes 400g",
      "at": "2026-10-19"
    },
    "passata": {
      "p": 1.95,
      "pk": 680,
      "name": "La Gina Italian Tomato Paste Passata 680g",
      "at": "2026-10-19"
    },
    "tompaste": {
      "p": 0.95,
      "pk": 170,
      "name": "Woolworths Essentials Tomato Paste 170g",
      "at": "2026-10-19"
    },
    "coconut": {
      "p": 1.7,
      "pk": 400,
      "name": "Woolworths Essentials Coconut Milk 400mL",
      "at": "2026-10-19"
    },
    "chickpeas": {
      "p": 1.7,
      "pk": 400,
      "name": "La Gina Chickpeas 400g",
      "at": "2026-10-19"
    },
    "blackbeans": {
      "p": 1.9,
      "pk": 400,
      "name": "Annalisa Black Beans 400g",
      "at": "2026-10-19"
    },
    "corn": {
      "p": 1,
      "pk": 420,
      "name": "Woolworths Corn Sweet Kernels 420g",
      "at": "2026-10-19"
    },
    "greencurry": {
      "p": 2.3,
      "pk": 190,
      "name": "Mr Chen's Thai Green Curry Paste 190g",
      "at": "2026-10-19",
      "alt": [
        114,
        2.3,
        "Maesri Paste Green Curry 114g"
      ]
    },
    "currypaste": {
      "p": 7.5,
      "pk": 283,
      "name": "Patak's Tikka Masala Curry Paste 283g",
      "at": "2026-10-19"
    },
    "pickles": {
      "p": 6.5,
      "pk": 1360,
      "name": "Woolworths Whole Dill Pickles 1.36kg",
      "at": "2026-10-19"
    },
    "peanuts": {
      "p": 5.5,
      "pk": 750,
      "name": "Woolworths Peanuts Roasted & Salted 750g",
      "at": "2026-10-19"
    },
    "arborio": {
      "p": 4,
      "pk": 1000,
      "name": "La Gina Arborio Rice 1kg",
      "at": "2026-10-19"
    },
    "vermicelli": {
      "p": 3.8,
      "pk": 500,
      "name": "Mr Chen's Vermicelli Rice Noodles 500g",
      "at": "2026-10-19",
      "alt": [
        250,
        2,
        "Chang's Rice Vermicelli 250g"
      ]
    },
    "pasta": {
      "p": 0.9,
      "pk": 500,
      "name": "Woolworths Essentials Pasta Penne 500g",
      "at": "2026-10-19"
    },
    "lasagne": {
      "p": 2,
      "pk": 250,
      "name": "Woolworths Lasagne Sheets 250g",
      "at": "2026-10-19"
    },
    "panko": {
      "p": 2.9,
      "pk": 200,
      "name": "Obento Japanese Panko Breadcrumbs 200g",
      "at": "2026-10-19"
    },
    "buns": {
      "p": 3.6,
      "pk": 4,
      "name": "Bakery Du Jour Brioche Burger Buns 4 pack",
      "at": "2026-10-19"
    },
    "wraps": {
      "p": 2.2,
      "pk": 8,
      "name": "Woolworths White Wrap 8 pack",
      "at": "2026-10-19"
    },
    "tortillas": {
      "p": 4.3,
      "pk": 10,
      "name": "Old El Paso Mini Taco Tortilla Wraps 10 pack",
      "at": "2026-10-19",
      "sp": 1,
      "was": 5
    },
    "pita": {
      "p": 1.95,
      "pk": 6,
      "name": "Nana Traditional Lebanese Bread White 350g",
      "at": "2026-10-19"
    },
    "naan": {
      "p": 4,
      "pk": 4,
      "name": "Simson's Pantry Mini Naans Garlic & Herb 225g",
      "at": "2026-10-19"
    },
    "gf_wraps": {
      "p": 6,
      "pk": 6,
      "name": "Old El Paso Gluten Free Tortilla Fajita Wraps 6 pack",
      "at": "2026-10-19",
      "alt": [
        4,
        5.4,
        "Old El Paso Gluten Free Jumbo Tortilla Wraps 4 pack"
      ]
    },
    "corn_tortillas": {
      "p": 3.4,
      "pk": 12,
      "name": "Mission Gluten Free White Corn Tortillas 12 pack 312g",
      "at": "2026-10-19",
      "sp": 1,
      "was": 4.2
    },
    "tamari": {
      "p": 4.5,
      "pk": 280,
      "name": "Chang's Tamari Light Soy Sauce 280mL",
      "at": "2026-10-19"
    },
    "sriracha": {
      "p": 4,
      "pk": 455,
      "name": "Tiao Hu Sriracha Hot Sauce 455mL",
      "at": "2026-10-19",
      "alt": [
        255,
        3,
        "The Holy Sauce Hot Sriracha Chilli Sauce 255mL"
      ]
    },
    "rice": {
      "p": 13.5,
      "pk": 5000,
      "name": "Woolworths Jasmine Rice 5kg",
      "at": "2026-10-19"
    },
    "flour": {
      "p": 2.4,
      "pk": 2000,
      "name": "Woolworths Essentials Plain Flour 2kg",
      "at": "2026-10-19",
      "alt": [
        1000,
        1.3,
        "Woolworths Essentials Plain Flour 1kg"
      ]
    },
    "soy": {
      "p": 3.7,
      "pk": 500,
      "name": "Lee Kum Kee Soy Sauce Premium 500mL",
      "at": "2026-10-19",
      "sp": 1,
      "was": 4.3
    },
    "fishsauce": {
      "p": 2.85,
      "pk": 300,
      "name": "Squid Brand Fish Sauce 300mL",
      "at": "2026-10-19",
      "alt": [
        210,
        3,
        "Ayam Fish Sauce 210mL"
      ]
    },
    "oyster": {
      "p": 2.85,
      "pk": 250,
      "name": "Mr Chen's Oyster Sauce 250mL",
      "at": "2026-10-19"
    },
    "sesameoil": {
      "p": 5,
      "pk": 250,
      "name": "Mr Chen's Pure Sesame Oil 250mL",
      "at": "2026-10-19",
      "alt": [
        150,
        5,
        "Chang's Sesame Oil 150mL"
      ]
    },
    "ricevinegar": {
      "p": 2.4,
      "pk": 300,
      "name": "Lantern Alley Rice Wine Vinegar 300mL",
      "at": "2026-10-19"
    },
    "whitevinegar": {
      "p": 1.8,
      "pk": 2000,
      "name": "Woolworths Essentials White Vinegar 2L",
      "at": "2026-10-19"
    },
    "mirin": {
      "p": 4.4,
      "pk": 250,
      "name": "Obento Mirin Seasoning 250mL",
      "at": "2026-10-19"
    },
    "honey": {
      "p": 3.3,
      "pk": 375,
      "name": "Cloverdale Pure Honey Twist & Squeeze 375g",
      "at": "2026-10-19"
    },
    "brownsugar": {
      "p": 3.1,
      "pk": 1000,
      "name": "Woolworths Essentials Brown Sugar 1kg",
      "at": "2026-10-19",
      "alt": [
        500,
        2.5,
        "CSR Brown Sugar 500g"
      ]
    },
    "mayo": {
      "p": 2.8,
      "pk": 440,
      "name": "Woolworths Whole Egg Mayonnaise 440g",
      "at": "2026-10-19"
    },
    "ketchup": {
      "p": 1.85,
      "pk": 500,
      "name": "Woolworths Tomato Sauce Squeeze 500mL",
      "at": "2026-10-19"
    },
    "mustard": {
      "p": 4.8,
      "pk": 550,
      "name": "MasterFoods Mild American Mustard 550g",
      "at": "2026-10-19",
      "alt": [
        250,
        2.7,
        "Woolworths Mild American Mustard 250g"
      ],
      "sp": 1,
      "was": 5.8
    },
    "sesameseeds": {
      "p": 1.65,
      "pk": 100,
      "name": "Woolworths Sesame Seeds 100g",
      "at": "2026-10-19"
    },
    "stockpowder": {
      "p": 4.5,
      "pk": 200,
      "name": "Vegeta Chicken Stock Powder 200g",
      "at": "2026-10-19",
      "alt": [
        130,
        3.5,
        "Continental Classics Stock Powder Chicken 130g"
      ]
    },
    "lemongrass": {
      "p": 4.2,
      "pk": 80,
      "name": "Gourmet Garden Cold Blend Pastes Lemongrass 80g",
      "at": "2026-10-19",
      "sp": 1
    },
    "cumin": {
      "p": 2,
      "pk": 30,
      "name": "Woolworths Cumin Ground 30g",
      "at": "2026-10-19",
      "sp": 1
    },
    "smokedpaprika": {
      "p": 2,
      "pk": 30,
      "name": "Woolworths Paprika Smoked 30g",
      "at": "2026-10-19",
      "sp": 1
    },
    "garammasala": {
      "p": 2,
      "pk": 29,
      "name": "Woolworths Garam Masala 29g",
      "at": "2026-10-19",
      "sp": 1
    },
    "turmeric": {
      "p": 2,
      "pk": 30,
      "name": "Woolworths Turmeric Ground 30g",
      "at": "2026-10-19",
      "sp": 1
    },
    "chilliflakes": {
      "p": 2,
      "pk": 23,
      "name": "Woolworths Chilli Flakes 23g",
      "at": "2026-10-19",
      "sp": 1
    },
    "chillipowder": {
      "p": 2.25,
      "pk": 50,
      "name": "Hoyt's Chilli Powder 50g",
      "at": "2026-10-19"
    },
    "cinnamon": {
      "p": 2,
      "pk": 32,
      "name": "Woolworths Cinnamon Ground 32g",
      "at": "2026-10-19",
      "sp": 1
    },
    "castersugar": {
      "p": 2.2,
      "pk": 1000,
      "name": "Woolworths Essentials Caster Sugar 1kg",
      "at": "2026-10-19"
    },
    "cocoa": {
      "p": 7.5,
      "pk": 375,
      "name": "Woolworths Cocoa Powder 375g",
      "at": "2026-10-19",
      "alt": [
        250,
        8.5,
        "Cadbury Baking Bournville Cocoa Powder 250g"
      ]
    },
    "vanilla": {
      "p": 10,
      "pk": 200,
      "name": "Woolworths Vanilla Extract 200mL",
      "at": "2026-10-19",
      "alt": [
        150,
        8.9,
        "Queen Natural Vanilla Extract 150mL"
      ]
    },
    "bakingpowder": {
      "p": 5.55,
      "pk": 300,
      "name": "McKenzie's Baking Powder 300g",
      "at": "2026-10-19",
      "alt": [
        125,
        2.85,
        "McKenzie's Baking Powder 125g"
      ]
    },
    "oats": {
      "p": 3.2,
      "pk": 1500,
      "name": "Woolworths Australian Rolled Oats 1.5kg",
      "at": "2026-10-19",
      "alt": [
        750,
        1.7,
        "Woolworths Rolled Traditional Oats 750g"
      ]
    },
    "desiccated": {
      "p": 4.9,
      "pk": 500,
      "name": "Woolworths Coconut Fine Desiccated 500g",
      "at": "2026-10-19",
      "alt": [
        250,
        3.7,
        "McKenzie's Coconut Fine Desiccated 250g"
      ]
    },
    "darkchoc": {
      "p": 3,
      "pk": 200,
      "name": "Woolworths Essentials Dark Choc Cooking Block 200g",
      "at": "2026-10-19"
    },
    "chocchips": {
      "p": 7,
      "pk": 200,
      "name": "Nestle Bakers' Choice Dark Choc Bits 200g",
      "at": "2026-10-19"
    },
    "creamcheese": {
      "p": 3.3,
      "pk": 250,
      "name": "Woolworths Cream Cheese Block 250g",
      "at": "2026-10-19"
    },
    "banana": {
      "p": 0.81,
      "pk": 1,
      "name": "Cavendish Bananas each",
      "at": "2026-10-19"
    }
  },
  "aldi": {},
  "updated": "2026-10-19"
};
