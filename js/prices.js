// Shelf prices, updated automatically every Wednesday (scripts/update-prices.mjs) and by hand from admin/prices.html.
// Each entry: p = shelf price, pk = pack size (in the ingredient's unit), name = product, at = date, sp = on special this week, was = normal price.
window.DOCKET_PRICES = {
  "coles": {
    "chk_thigh": {
      "p": 17.4,
      "pk": 1200,
      "name": "Coles RSPCA Approved Chicken Thigh Fillets Large Pack approx. 1.2kg",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/2263328",
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
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/2263179",
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
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/9196739",
      "alt": [
        1650,
        7.1,
        "Coles RSPCA Approved Medium Whole Chicken approx. 1.65Kg"
      ]
    },
    "beef_rump": {
      "p": 25.2,
      "pk": 1050,
      "name": "Drovers Choice No Added Hormone Beef Rump Steak approx. 1.05Kg",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/2591870",
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
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/1773726",
      "sp": 1,
      "was": 20
    },
    "pork_shoulder": {
      "p": 26,
      "pk": 2600,
      "name": "Coles Boneless Pork Shoulder Roast approx. 2.6kg",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/9413881"
    },
    "pork_mince": {
      "p": 6,
      "pk": 500,
      "name": "Coles Regular Pork Mince 500g",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/8781518"
    },
    "lamb_sh": {
      "p": 33,
      "pk": 2200,
      "name": "Coles Lamb Shoulder Roast On The Bone approx. 2.2kg",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/9154794",
      "alt": [
        700,
        14,
        "Coles Graze Lamb Mini Shoulder Roast 2 Pack approx. 700g"
      ],
      "sp": 1,
      "was": 39.6
    },
    "salmon": {
      "p": 35,
      "pk": 1000,
      "name": "KB's Salmon Skin Off 1kg",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/4660373",
      "alt": [
        500,
        26,
        "I&J Salmon Skin On 500g"
      ]
    },
    "chorizo": {
      "p": 9,
      "pk": 300,
      "name": "Wurstel Chorizo 300g",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/2531664",
      "alt": [
        200,
        7.5,
        "Coles Spicy Chorizo Salami Hot Chub 200g"
      ]
    },
    "bacon": {
      "p": 4.4,
      "pk": 250,
      "name": "Thomson's Deli Middle Bacon 250g",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/1026702"
    },
    "ham": {
      "p": 6,
      "pk": 250,
      "name": "The Deli Shaved Leg Ham 250g",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/1476946",
      "alt": [
        150,
        4,
        "The Deli Shaved Leg Ham 150g"
      ]
    },
    "eggs": {
      "p": 6.6,
      "pk": 12,
      "name": "Coles Free Range Eggs 12 Pack 600g",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/9453456"
    },
    "cream": {
      "p": 5.2,
      "pk": 600,
      "name": "Coles Thickened Cream 600mL",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/246962",
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
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/8150288",
      "alt": [
        1000,
        2.2,
        "Devondale Full Cream Long Life Milk 1L"
      ]
    },
    "butter": {
      "p": 4.9,
      "pk": 250,
      "name": "Western Star Dairy Butter Pat 250g",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/210590",
      "sp": 1,
      "was": 5.5
    },
    "cheese": {
      "p": 10,
      "pk": 700,
      "name": "Coles Cheese Shredded Tasty 700g",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/8145335",
      "alt": [
        250,
        6,
        "Bega Cheese Grated Tasty 250g"
      ]
    },
    "mozz": {
      "p": 8.5,
      "pk": 450,
      "name": "Perfect Italiano Dairy Cheese Grated Mozzarella:mozzarella 450g",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/63816",
      "sp": 1,
      "was": 9.5
    },
    "parm": {
      "p": 5.4,
      "pk": 250,
      "name": "Coles Dairy Shredded Parmesan Cheese 250g",
      "at": "2026-10-21",
      "u": "https://www.coles.com.au/product/5726014"
    },
    "fetta": {
      "p": 6,
      "pk": 410,
      "name": "Castello Greek Style Fetta Cubes 410g",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/1096832",
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
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/8792988"
    },
    "yoghurt": {
      "p": 7.5,
      "pk": 1000,
      "name": "Farmers Union Greek Style Natural Yoghurt 1kg",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/5266865",
      "alt": [
        500,
        5.3,
        "Farmers Union Greek Style Yoghurt Natural 500g"
      ]
    },
    "cottagecheese": {
      "p": 6,
      "pk": 500,
      "name": "Coles Low Fat Creamed Cottage Cheese 500g",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/9488552",
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
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/5311187"
    },
    "potato": {
      "p": 6,
      "pk": 2000,
      "name": "Coles Potatoes Washed 2kg",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/1206748",
      "sp": 1
    },
    "swpotato": {
      "p": 4.9,
      "pk": 1500,
      "name": "Coles I'm Perfect Sweet Potato 1.5kg",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/3616751"
    },
    "onion": {
      "p": 2.5,
      "pk": 1000,
      "name": "Coles Brown Onions 1kg",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/4803991",
      "alt": [
        200,
        0.84,
        "Coles Loose Brown Onions approx. 200g"
      ],
      "sp": 1
    },
    "red_onion": {
      "p": 1.1,
      "pk": 1,
      "name": "Coles Onions Red Local approx. 200g",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/4218459"
    },
    "garlic": {
      "p": 1.98,
      "pk": 1,
      "name": "Coles Australian Garlic Loose approx. 60g",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/6105715"
    },
    "ginger": {
      "p": 4.29,
      "pk": 130,
      "name": "Coles Australian Ginger Loose approx. 130g",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/5034484",
      "alt": [
        80,
        4.2,
        "Gourmet Garden Ginger Cold Blended Paste 80g"
      ]
    },
    "carrot": {
      "p": 1.7,
      "pk": 1000,
      "name": "Coles Carrots 1Kg",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/9006560",
      "alt": [
        170,
        0.44,
        "Coles Carrots Loose approx. 170g"
      ],
      "sp": 1
    },
    "broccoli": {
      "p": 2.11,
      "pk": 340,
      "name": "Coles Broccoli Medium approx. 340g",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/407755"
    },
    "capsicum": {
      "p": 1.3,
      "pk": 1,
      "name": "Coles Red Capsicum Loose approx. 220g",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/4580208",
      "sp": 1
    },
    "zucchini": {
      "p": 1.78,
      "pk": 200,
      "name": "Coles Green Zucchini approx. 200g",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/4910506"
    },
    "cherrytom": {
      "p": 2.1,
      "pk": 400,
      "name": "Mutti Cherry Tomatoes Whole 400g",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/2612948",
      "sp": 1,
      "was": 2.7
    },
    "spinach": {
      "p": 3.3,
      "pk": 120,
      "name": "Coles Baby Spinach 120g",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/1499340",
      "alt": [
        60,
        2.2,
        "Coles Baby Spinach 60g"
      ],
      "sp": 1
    },
    "cos": {
      "p": 3.5,
      "pk": 1,
      "name": "Coles Lettuce Cos Baby Hearts 2 Pack",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/4646485"
    },
    "cabbage": {
      "p": 4.5,
      "pk": 1,
      "name": "Coles Cabbage Half Red 1 each",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/4457052"
    },
    "cucumber": {
      "p": 1.9,
      "pk": 1,
      "name": "Coles Cucumbers Continental Loose 1 Each",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/4575605",
      "sp": 1
    },
    "lemon": {
      "p": 1.6,
      "pk": 1,
      "name": "Coles Lemons 1 Each",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/5318302",
      "sp": 1
    },
    "lime": {
      "p": 1.8,
      "pk": 1,
      "name": "Coles Limes Medium Loose 1 each",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/197594",
      "sp": 1
    },
    "springonion": {
      "p": 3,
      "pk": 1,
      "name": "Coles Spring Onions 1 Bunch",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/408419"
    },
    "coriander": {
      "p": 3.3,
      "pk": 1,
      "name": "Coles Sleeved Herbs Coriander 1 Bunch",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/4575321",
      "sp": 1
    },
    "mint": {
      "p": 3.3,
      "pk": 1,
      "name": "Coles Sleeved Herbs Mint 1 Bunch",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/4575514",
      "sp": 1
    },
    "thaibasil": {
      "p": 3.3,
      "pk": 1,
      "name": "Coles Herb Punnets Thai Basil 15g",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/3593430"
    },
    "mushroom": {
      "p": 7,
      "pk": 500,
      "name": "Coles Cup Mushrooms 500g",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/4829838",
      "alt": [
        200,
        4,
        "Coles Mushrooms Cup 200g"
      ]
    },
    "eggplant": {
      "p": 4.45,
      "pk": 1,
      "name": "Coles Purple Eggplant approx. 500g",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/4583206"
    },
    "greenbeans": {
      "p": 5.5,
      "pk": 375,
      "name": "Coles Green Beans Prepacked 375g",
      "at": "2026-10-21",
      "u": "https://www.coles.com.au/product/4829204",
      "alt": [
        250,
        4.9,
        "Coles Trimmed Green Beans 250g"
      ]
    },
    "lamb_mince": {
      "p": 8,
      "pk": 500,
      "name": "Coles 3 Star Lamb Mince 500g",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/8850461",
      "sp": 1,
      "was": 9
    },
    "pork_belly": {
      "p": 18.2,
      "pk": 1300,
      "name": "Coles Pork Belly Roast Boneless approx. 1.3kg",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/2839579",
      "sp": 1,
      "was": 23.4
    },
    "hummus": {
      "p": 6,
      "pk": 200,
      "name": "Tahini Neri Classic Hummus Dip 200g",
      "at": "2026-10-19"
    },
    "beansprouts": {
      "p": 2.7,
      "pk": 410,
      "name": "UFC Bean Sprouts 410g",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/8853710"
    },
    "massaman": {
      "p": 3,
      "pk": 210,
      "name": "Valcom Massaman Curry Paste 210g",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/6823377",
      "sp": 1,
      "was": 4.3
    },
    "ricenoodles": {
      "p": 2.55,
      "pk": 375,
      "name": "Erawan Blue Rice Sticks Noodles 375g",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/5252328",
      "alt": [
        200,
        2.2,
        "Erawan Rice Sticks Pad Thai Noodles 200g"
      ]
    },
    "cornchips": {
      "p": 2.2,
      "pk": 175,
      "name": "Coles Corn Chips Original 175g",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/6696407"
    },
    "turkish": {
      "p": 2.6,
      "pk": 4,
      "name": "Coles Turkish Rolls 4 Pack 400g",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/5625017"
    },
    "currypowder": {
      "p": 4,
      "pk": 100,
      "name": "Clive of India Curry Powder 100g",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/121297",
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
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/5437083"
    },
    "scotch": {
      "p": 23,
      "pk": 480,
      "name": "Coles Beef Scotch Steak Fillet 2 Pack 480g",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/4997220",
      "alt": [
        170,
        9,
        "Coles No Added Hormone Beef Quick Cook Scotch Fillet Steak 170g"
      ]
    },
    "lambcutlets": {
      "p": 39.53,
      "pk": 775,
      "name": "Coles Lamb Cutlets approx. 775g",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/1757810",
      "alt": [
        300,
        15.9,
        "Coles Graze Lamb Extra Trim Cutlets 7x5 approx. 300g"
      ]
    },
    "barra": {
      "p": 20,
      "pk": 1000,
      "name": "Kb's Barramundi Fillets 1kg",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/3984482",
      "sp": 1,
      "was": 26
    },
    "prosciutto": {
      "p": 8,
      "pk": 150,
      "name": "The Deli Prosciutto 150g",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/1509444",
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
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/4352145",
      "sp": 1
    },
    "pumpkin": {
      "p": 2.73,
      "pk": 700,
      "name": "Coles Wrapped Butternut Pumpkin approx. 700g each",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/4190600"
    },
    "iceberg": {
      "p": 2.2,
      "pk": 1,
      "name": "Coles Shredded Iceberg Lettuce 200g",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/2470526"
    },
    "rosemary": {
      "p": 2,
      "pk": 1,
      "name": "Hoyts Rosemary 25g",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/287493"
    },
    "sage": {
      "p": 2.7,
      "pk": 1,
      "name": "MasterFoods Ground Sage Leaves 20g",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/318746"
    },
    "harissa": {
      "p": 2.65,
      "pk": 350,
      "name": "Zahra Harissa Paste 350g",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/9920176"
    },
    "capers": {
      "p": 3.2,
      "pk": 230,
      "name": "Always Fresh Capers Vinegar 230g",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/6738835",
      "alt": [
        110,
        2.4,
        "Sandhurst Capers Baby Wine Vinegar 110g"
      ],
      "sp": 1,
      "was": 4
    },
    "quinoa": {
      "p": 10.5,
      "pk": 600,
      "name": "Red Tractor Quinoa Grain 600g",
      "at": "2026-10-21",
      "u": "https://www.coles.com.au/product/2497668"
    },
    "brownrice": {
      "p": 2.5,
      "pk": 1000,
      "name": "Coles Brown Rice 1kg",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/1075107"
    },
    "miso": {
      "p": 3.4,
      "pk": 400,
      "name": "Hikari White Miso Paste 400g",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/6068980",
      "sp": 1,
      "was": 4.3
    },
    "pork_cutlets": {
      "p": 12.5,
      "pk": 800,
      "name": "Coles Pork Forequarter Cutlets 800g",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/6409174",
      "alt": [
        500,
        10.75,
        "Coles Pork Cutlets approx. 500g pack"
      ]
    },
    "beef_cheek": {
      "p": 19.2,
      "pk": 600,
      "name": "Coles No Added Hormone Beef Cheeks approx. 600g",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/3492728"
    },
    "lamb_shanks": {
      "p": 9.3,
      "pk": 775,
      "name": "Coles Lamb Shanks 2 Pack (cv) approx. 775g",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/9264533",
      "sp": 1,
      "was": 10.85
    },
    "duck": {
      "p": 19.5,
      "pk": 560,
      "name": "Luv A Duck Peking Duck Breast Pancake Kit 560g",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/1309886",
      "alt": [
        380,
        13.5,
        "Luv A Duck Fresh Duck Breast Fillets 380g"
      ]
    },
    "rocket": {
      "p": 3.3,
      "pk": 120,
      "name": "Coles Lettuce Baby Rocket 120g",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/1499475",
      "alt": [
        60,
        2.2,
        "Coles Baby Rocket 60g"
      ],
      "sp": 1
    },
    "asparagus": {
      "p": 1.5,
      "pk": 1,
      "name": "Coles Green Asparagus 1 each",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/4838737",
      "sp": 1
    },
    "broccolini": {
      "p": 6,
      "pk": 1,
      "name": "Coles Family Broccolini 1 each",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/4841775"
    },
    "snowpeas": {
      "p": 7.4,
      "pk": 250,
      "name": "Coles Snow Peas Prepacked 250g",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/7701375"
    },
    "ricepaper": {
      "p": 2.7,
      "pk": 250,
      "name": "Valcom Rice Paper 250g",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/9919905"
    },
    "fivespice": {
      "p": 2.4,
      "pk": 41,
      "name": "Coles Five Spice Chinese 41g",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/8987150"
    },
    "peas": {
      "p": 2.5,
      "pk": 1000,
      "name": "Coles Simply Peas Snap Frozen 1Kg",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/399067"
    },
    "edamame": {
      "p": 3.9,
      "pk": 400,
      "name": "Jun Pacific Frozen Shelled Soybean (mukimame) 400g",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/1917870"
    },
    "prawns": {
      "p": 29,
      "pk": 1000,
      "name": "KB's Raw Prawn Tail Off 1kg",
      "at": "2026-10-21",
      "u": "https://www.coles.com.au/product/3984438"
    },
    "tintom": {
      "p": 1.8,
      "pk": 410,
      "name": "Ardmona Crushed Tomatoes 410g",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/4687074",
      "sp": 1
    },
    "passata": {
      "p": 2,
      "pk": 700,
      "name": "Coles Italian Passata Sauce 700g",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/5419718"
    },
    "tompaste": {
      "p": 1,
      "pk": 140,
      "name": "Coles Italian Tomato Paste 140g",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/8745310"
    },
    "coconut": {
      "p": 1.7,
      "pk": 400,
      "name": "Coles Simply Light Coconut Milk 400mL",
      "at": "2026-10-21",
      "u": "https://www.coles.com.au/product/4224677"
    },
    "chickpeas": {
      "p": 2.5,
      "pk": 400,
      "name": "Cortas Chickpea Whole 400g",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/9888765"
    },
    "blackbeans": {
      "p": 0.9,
      "pk": 420,
      "name": "Coles Black Beans 420g",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/3812975"
    },
    "corn": {
      "p": 1,
      "pk": 420,
      "name": "Coles Simply Corn Kernels 420g",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/4774066"
    },
    "sundried": {
      "p": 5.5,
      "pk": 250,
      "name": "Latina Creamy Sun Dried Tomato Sauce 250g",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/9954644"
    },
    "greencurry": {
      "p": 3,
      "pk": 210,
      "name": "Valcom Green Curry Paste 210g",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/6823413",
      "sp": 1,
      "was": 4.3
    },
    "currypaste": {
      "p": 5.8,
      "pk": 270,
      "name": "Arth Paste Masala Tikka Masala Paste 270g",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/1019718"
    },
    "pickles": {
      "p": 3,
      "pk": 500,
      "name": "Wicked Dill Pickle 500g",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/5309265"
    },
    "peanuts": {
      "p": 8,
      "pk": 750,
      "name": "Coles. Aust Roasted & Salted Peanuts 750g",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/1110092",
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
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/8465788",
      "alt": [
        750,
        4.8,
        "Nice Rice Australian Arborio Rice 750 g"
      ]
    },
    "vermicelli": {
      "p": 2.15,
      "pk": 340,
      "name": "Coles Asia Vermicelli Rice Noodles 340g",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/3735660",
      "alt": [
        200,
        2,
        "Wai Wai Rice Vermicelli Noodles 200g"
      ]
    },
    "pasta": {
      "p": 1,
      "pk": 500,
      "name": "Coles Durum Wheat Pasta Large Spirals 500g",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/3329035"
    },
    "lasagne": {
      "p": 2,
      "pk": 250,
      "name": "Coles Pasta Lasagne Sheets 250g",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/5717090"
    },
    "panko": {
      "p": 3.7,
      "pk": 190,
      "name": "Kooka A Krumb Panko Breadcrumbs 190g",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/1437230"
    },
    "wraps": {
      "p": 2.2,
      "pk": 8,
      "name": "Coles Simply Soft White Wraps 8 Pack 360g",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/3731705"
    },
    "tortillas": {
      "p": 4.3,
      "pk": 10,
      "name": "Old El Paso Tortillas Mini Tacos 10 Pack 250g",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/7395337",
      "sp": 1,
      "was": 5
    },
    "gf_lasagne": {
      "p": 8.5,
      "pk": 280,
      "name": "Latina Fresh Gluten Free Lasagne Sheets 280g",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/3758676"
    },
    "corn_tortillas": {
      "p": 2.1,
      "pk": 12,
      "name": "Mission Tortillas White Corn 12 Pack 312g",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/6768745",
      "sp": 1,
      "was": 4.2
    },
    "tamari": {
      "p": 4.5,
      "pk": 280,
      "name": "Chang's Tamari Soy Sauce Light 280mL",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/1323504"
    },
    "gf_flour": {
      "p": 2.4,
      "pk": 500,
      "name": "Coles I'm Free From Plain Flour Gluten Free 500g",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/2478197"
    },
    "sriracha": {
      "p": 5.8,
      "pk": 480,
      "name": "Trident Sriracha Sauce 480mL",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/5981543"
    },
    "rice": {
      "p": 6.8,
      "pk": 2000,
      "name": "Sunrice Jasmine Rice 2kg",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/7423217",
      "alt": [
        1000,
        4.5,
        "Sunrice Jasmine Rice 1kg"
      ]
    },
    "flour": {
      "p": 1.3,
      "pk": 1000,
      "name": "Coles Simply Plain Flour 1Kg",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/5881232"
    },
    "cornflour": {
      "p": 2.2,
      "pk": 500,
      "name": "Coles Cornflour 500g",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/1880602"
    },
    "soy": {
      "p": 1.9,
      "pk": 500,
      "name": "Coles Soy Sauce 500mL",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/2579434"
    },
    "fishsauce": {
      "p": 2.85,
      "pk": 300,
      "name": "Squid Fish Sauce 300mL",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/5420998"
    },
    "oyster": {
      "p": 2.3,
      "pk": 300,
      "name": "Coles Oyster Sauce 300mL",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/5332234"
    },
    "sesameoil": {
      "p": 8.6,
      "pk": 370,
      "name": "Coles Asia Sesame Oil 370mL",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/3735615",
      "alt": [
        150,
        4.1,
        "Coles Asia Pure Roasted Sesame Oil 150mL"
      ]
    },
    "ricevinegar": {
      "p": 3.5,
      "pk": 500,
      "name": "Coles Rice Wine Vinegar 500mL",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/3486838",
      "alt": [
        250,
        2.6,
        "Obento Rice Wine Vinegar 250mL"
      ]
    },
    "whitevinegar": {
      "p": 1.8,
      "pk": 2000,
      "name": "Coles Simply White Vinegar 2L",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/4524127"
    },
    "mirin": {
      "p": 4.4,
      "pk": 250,
      "name": "Obento Mirin Seasoning 250mL",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/3743759"
    },
    "honey": {
      "p": 7.9,
      "pk": 500,
      "name": "Capilano Pure Honey Upside Down Squeeze 500g",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/9247578",
      "sp": 1,
      "was": 9.3
    },
    "brownsugar": {
      "p": 3.1,
      "pk": 1000,
      "name": "Coles Sugar Brown 1Kg",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/2909335",
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
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/3328768"
    },
    "mayo": {
      "p": 2.8,
      "pk": 445,
      "name": "Coles Whole Egg Mayonnaise 445g",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/2454789"
    },
    "ketchup": {
      "p": 3.9,
      "pk": 500,
      "name": "Masterfoods Aussie Farmers Tomato Sauce 500mL",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/7447350",
      "sp": 1,
      "was": 4.9
    },
    "mustard": {
      "p": 4.8,
      "pk": 550,
      "name": "MasterFoods Mild American Mustard Smooth & Tangy 550g",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/8833305",
      "sp": 1,
      "was": 5.8
    },
    "sesameseeds": {
      "p": 5,
      "pk": 200,
      "name": "Wang Sesame Seeds Roasted White 200g",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/8140580",
      "alt": [
        100,
        3.5,
        "Hoyts Sesame Seeds 100g"
      ]
    },
    "stockpowder": {
      "p": 3.5,
      "pk": 130,
      "name": "Continental Superb Chicken Stock Powder 130g",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/5086105"
    },
    "lemongrass": {
      "p": 4.2,
      "pk": 80,
      "name": "Gourmet Garden Lemongrass Cold Blended Paste 80g",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/3023272",
      "sp": 1
    },
    "cumin": {
      "p": 2.65,
      "pk": 42,
      "name": "Coles Cumin Seeds Ground 42g",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/8982837",
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
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/8984210"
    },
    "garammasala": {
      "p": 3.2,
      "pk": 42,
      "name": "Coles Garam Masala 42g",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/8987477",
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
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/8983341",
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
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/8983625"
    },
    "chillipowder": {
      "p": 2.25,
      "pk": 50,
      "name": "Hoyts Chilli Powder 50g",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/318021"
    },
    "cinnamon": {
      "p": 2.45,
      "pk": 41,
      "name": "Coles Cinnamon Ground 41g",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/8982826",
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
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/2909357"
    },
    "cocoa": {
      "p": 5,
      "pk": 250,
      "name": "Coles Cocoa Powder 250g",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/1838060"
    },
    "vanilla": {
      "p": 12,
      "pk": 100,
      "name": "Queen Celebrating 120 Years Master Blend Pure Vanilla Extract 100mL",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/3025427",
      "alt": [
        50,
        8,
        "Queen Finest Vanilla Pure Extract Madagascar 50mL"
      ],
      "sp": 1,
      "was": 15
    },
    "bakingpowder": {
      "p": 1.8,
      "pk": 125,
      "name": "Coles Baking Powder 125g",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/1838071"
    },
    "oats": {
      "p": 3.5,
      "pk": 1800,
      "name": "Coles Simply Rolled Oats 1.8Kg",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/4972693"
    },
    "desiccated": {
      "p": 4.9,
      "pk": 500,
      "name": "Coles Desiccated Coconut 500g",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/8734482",
      "alt": [
        250,
        3.7,
        "Mckenzie's Coconut Desiccated 250g"
      ]
    },
    "darkchoc": {
      "p": 4.8,
      "pk": 225,
      "name": "Nestle Baker's Choice Dark Chocolate Melts 225g",
      "at": "2026-10-21",
      "u": "https://www.coles.com.au/product/1325022",
      "sp": 1,
      "was": 6
    },
    "chocchips": {
      "p": 7,
      "pk": 200,
      "name": "Nestle Bakers' Choice Baking Dark Chocolate Bits 200g",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/299903",
      "sp": 1
    },
    "sweetbiscuits": {
      "p": 2,
      "pk": 250,
      "name": "Arnott's Plain Biscuits Marie 250g",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/329006",
      "sp": 1,
      "was": 2.5
    },
    "creamcheese": {
      "p": 3.35,
      "pk": 250,
      "name": "Coles Regular Cream Cheese Block 250g",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/2486672"
    },
    "banana": {
      "p": 0.83,
      "pk": 1,
      "name": "Coles Bananas approx. 170g",
      "at": "2026-10-28",
      "u": "https://www.coles.com.au/product/409499"
    }
  },
  "woolies": {
    "chk_thigh": {
      "p": 9.9,
      "pk": 550,
      "name": "Woolworths RSPCA Approved Chicken Thigh Fillets 550g",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/6078692/woolworths-rspca-approved-chicken-thigh-fillets"
    },
    "chk_breast": {
      "p": 9.4,
      "pk": 650,
      "name": "Woolworths RSPCA Approved Chicken Breast Fillets 650g",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/6078623/woolworths-rspca-approved-chicken-breast-fillets",
      "sp": 1
    },
    "beef_rump": {
      "p": 9,
      "pk": 250,
      "name": "Woolworths Beef Rump Steak 250g",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/236846/woolworths-beef-rump-steak",
      "sp": 1
    },
    "pork_mince": {
      "p": 7.5,
      "pk": 500,
      "name": "Woolworths Lean Pork Mince 500g",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/582608/woolworths-lean-pork-mince"
    },
    "chorizo": {
      "p": 7.5,
      "pk": 250,
      "name": "D'Orsogna Chorizo 250g",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/912636/d-orsogna-chorizo",
      "alt": [
        80,
        3.4,
        "D'Orsogna Deli Fresh Spicy Chorizo Salami 80g"
      ]
    },
    "bacon": {
      "p": 8,
      "pk": 500,
      "name": "Woolworths Middle Bacon 500g",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/6058495/woolworths-middle-bacon",
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
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/224762/woolworths-12-pack-large-free-range-eggs",
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
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/48720/woolworths-thickened-cream",
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
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/888140/woolworths-full-cream-milk",
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
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/48650/woolworths-salted-butter",
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
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/491820/hillview-tasty-shredded-cheese",
      "alt": [
        250,
        5,
        "Woolworths Tasty Cheese Shredded 250g"
      ]
    },
    "mozz": {
      "p": 7.5,
      "pk": 500,
      "name": "Dairyworks Grated Mozzarella Cheese 500g",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/6001736/dairyworks-grated-mozzarella-cheese",
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
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/85587/woolworths-shredded-parmesan-cheese",
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
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/452083/woolworths-greek-style-fetta"
    },
    "slices": {
      "p": 5.2,
      "pk": 12,
      "name": "Woolworths Cheese Burger Slices 250g",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/6040705/woolworths-cheese-burger-slices"
    },
    "sourcream": {
      "p": 3.1,
      "pk": 300,
      "name": "Woolworths Sour Cream 300mL",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/105609/woolworths-sour-cream",
      "alt": [
        200,
        3.3,
        "Bulla Premium Sour Cream 200mL"
      ]
    },
    "yoghurt": {
      "p": 4.2,
      "pk": 1000,
      "name": "Woolworths Natural Greek Style Yoghurt 1kg",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/571487/woolworths-natural-greek-style-yoghurt"
    },
    "cottagecheese": {
      "p": 6.5,
      "pk": 500,
      "name": "Woolworths Creamed Cottage Cheese 500g",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/780717/woolworths-creamed-cottage-cheese",
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
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/172297/bryne-co-kimchi"
    },
    "potato": {
      "p": 8.5,
      "pk": 2000,
      "name": "Woolworths Washed Potatoes Bag 2kg",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/262783/woolworths-washed-potatoes-bag"
    },
    "onion": {
      "p": 4,
      "pk": 1000,
      "name": "Woolworths Onion Brown Bag 1kg",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/144336/woolworths-onion-brown-bag"
    },
    "red_onion": {
      "p": 0.83,
      "pk": 1,
      "name": "Onion Red each",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/144497/onion-red"
    },
    "garlic": {
      "p": 1.88,
      "pk": 1,
      "name": "Garlic Head each",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/713429/woolworths-garlic-head"
    },
    "carrot": {
      "p": 2.5,
      "pk": 1000,
      "name": "Woolworths Australian Grown Carrots 1kg",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/135369/woolworths-australian-grown-carrots"
    },
    "capsicum": {
      "p": 2.23,
      "pk": 1,
      "name": "Red Capsicum each",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/135306/red-capsicum"
    },
    "zucchini": {
      "p": 5.3,
      "pk": 750,
      "name": "The Odd Bunch Zucchini Prepacked 750g",
      "at": "2026-10-21",
      "u": "https://www.woolworths.com.au/shop/productdetails/825869/the-odd-bunch-zucchini-prepacked"
    },
    "cherrytom": {
      "p": 2.7,
      "pk": 400,
      "name": "Mutti Whole Cherry Tomatoes 400g",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/290300/mutti-whole-cherry-tomatoes",
      "alt": [
        250,
        2.5,
        "Woolworths Cherry Tomatoes Punnet 250g"
      ]
    },
    "spinach": {
      "p": 5,
      "pk": 280,
      "name": "Woolworths Baby Leaf Spinach 280g",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/524336/woolworths-baby-leaf-spinach-spinach",
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
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/190092/woolworths-lettuce-baby-cos"
    },
    "cabbage": {
      "p": 4.25,
      "pk": 1,
      "name": "Cabbage Red Half each",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/134986/cabbage-red-half"
    },
    "cucumber": {
      "p": 2.3,
      "pk": 1,
      "name": "The Odd Bunch Continental Cucumber each",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/829360/the-odd-bunch-continental-cucumber"
    },
    "avocado": {
      "p": 2.7,
      "pk": 1,
      "name": "Hass Avocado each",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/120080/hass-avocado"
    },
    "lemon": {
      "p": 1.56,
      "pk": 1,
      "name": "Lemon Loose each",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/259514/lemon-loose"
    },
    "springonion": {
      "p": 3,
      "pk": 1,
      "name": "Spring Onion Bunch each",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/147603/spring-onion-bunch"
    },
    "coriander": {
      "p": 3.3,
      "pk": 1,
      "name": "Woolworths Fresh Herb Coriander Bunch each",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/137091/woolworths-fresh-herb-coriander-bunch",
      "sp": 1
    },
    "mint": {
      "p": 3.3,
      "pk": 1,
      "name": "Woolworths Fresh Mint Bunch each",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/142948/woolworths-fresh-mint-bunch",
      "sp": 1
    },
    "thaibasil": {
      "p": 3,
      "pk": 1,
      "name": "Passage To Asia Thai Basil & Sweet Chilli 200g",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/307473/passage-to-asia-thai-basil-sweet-chilli",
      "sp": 1,
      "was": 3.8
    },
    "mushroom": {
      "p": 7,
      "pk": 500,
      "name": "Woolworths Mushrooms Cups Punnet 500g",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/149963/woolworths-mushrooms-cups-punnet",
      "alt": [
        200,
        3.5,
        "Woolworths Mushrooms Cups Punnet 200g"
      ]
    },
    "eggplant": {
      "p": 2.21,
      "pk": 1,
      "name": "Fresh Eggplant each",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/137546/fresh-eggplant"
    },
    "greenbeans": {
      "p": 6.3,
      "pk": 340,
      "name": "Mulgowie Green Beans Cleaned & Cut 340g",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/730118/mulgowie-green-beans-cleaned-cut"
    },
    "lamb_mince": {
      "p": 9,
      "pk": 500,
      "name": "Woolworths Lamb Mince 500g",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/6084212/woolworths-lamb-mince"
    },
    "pork_belly": {
      "p": 11,
      "pk": 350,
      "name": "Woolworths Pork Belly Thinly Sliced 350g",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/488351/woolworths-pork-belly-thinly-sliced"
    },
    "beansprouts": {
      "p": 2.6,
      "pk": 250,
      "name": "Aussie Sprouts Bean 250g",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/133687/aussie-sprouts-bean-bean-shoot"
    },
    "massaman": {
      "p": 4.3,
      "pk": 210,
      "name": "Valcom Massaman Curry Paste 210g",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/82128/valcom-massaman-curry-paste"
    },
    "turkish": {
      "p": 2.6,
      "pk": 4,
      "name": "Woolworths Stonebaked Turkish Rolls 4 pack",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/6037735/woolworths-stonebaked-turkish-rolls"
    },
    "currypowder": {
      "p": 4,
      "pk": 100,
      "name": "Clive Of India Curry Powder 100g",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/30015/clive-of-india-curry-powder",
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
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/230475/woolworths-worcestershire-sauce"
    },
    "scotch": {
      "p": 9,
      "pk": 170,
      "name": "Woolworths Beef Scotch Fillet Steak 170g",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/317293/woolworths-beef-scotch-fillet-steak",
      "sp": 1
    },
    "barra": {
      "p": 20,
      "pk": 250,
      "name": "Thawed Barramundi Fillets per 250g",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/71587/woolworths-thawed-barramundi-fillets-thawed-fillets"
    },
    "prosciutto": {
      "p": 6.6,
      "pk": 100,
      "name": "Primo Reserve Gourmet Prosciutto Sliced 100g",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/334804/primo-reserve-gourmet-prosciutto-sliced"
    },
    "chk_mince": {
      "p": 10.5,
      "pk": 1000,
      "name": "Woolworths RSPCA Approved Chicken Mince 1kg",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/321099/woolworths-rspca-approved-chicken-mince",
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
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/638009/woolworths-iceberg-shredded-lettuce-lettuce"
    },
    "rosemary": {
      "p": 2,
      "pk": 1,
      "name": "Woolworths Rosemary Leaves 18g",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/251141/woolworths-rosemary-leaves",
      "sp": 1
    },
    "sage": {
      "p": 3.3,
      "pk": 1,
      "name": "Woolworths Sage Fresh Herb Punnet 10g",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/707369/woolworths-sage-fresh-herb-punnet"
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
      "p": 4,
      "pk": 230,
      "name": "Always Fresh Capers Vinegar 230g",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/464822/always-fresh-capers-vinegar",
      "alt": [
        110,
        2.1,
        "Sandhurst Baby Capers In Wine Vinegar 110g"
      ]
    },
    "brownrice": {
      "p": 2.5,
      "pk": 1000,
      "name": "Woolworths Brown Rice Grain 1kg",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/777630/woolworths-brown-rice-grain"
    },
    "miso": {
      "p": 4.3,
      "pk": 400,
      "name": "Hikari Japanese Paste White Miso 400g",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/313546/hikari-japanese-paste-white-miso"
    },
    "duck": {
      "p": 15.5,
      "pk": 380,
      "name": "Luv-A-Duck Fresh Duck Breast Fillets 380g",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/964342/luv-a-duck-fresh-duck-breast-fillets"
    },
    "rocket": {
      "p": 3.3,
      "pk": 120,
      "name": "Woolworths Baby Leaf Rocket 120g",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/54900/woolworths-baby-leaf-rocket",
      "alt": [
        60,
        2.2,
        "Woolworths Baby Leaf Rocket 60g"
      ]
    },
    "asparagus": {
      "p": 2.5,
      "pk": 1,
      "name": "Woolworths Asparagus Green Bunch each",
      "at": "2026-10-21",
      "u": "https://www.woolworths.com.au/shop/productdetails/132538/woolworths-asparagus-green-bunch",
      "sp": 1
    },
    "broccolini": {
      "p": 2.5,
      "pk": 1,
      "name": "Woolworths Broccolini Bunch each",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/187314/woolworths-broccolini-bunch"
    },
    "snowpeas": {
      "p": 6.5,
      "pk": 250,
      "name": "Woolworths Snow Peas Fresh Bag 250g",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/162931/woolworths-snow-peas-fresh-bag"
    },
    "fivespice": {
      "p": 3.5,
      "pk": 30,
      "name": "MasterFoods Chinese 5 Spice 30g",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/35546/masterfoods-chinese-5-spice",
      "sp": 1
    },
    "peas": {
      "p": 2.5,
      "pk": 1000,
      "name": "Woolworths Essentials Frozen Peas 1kg",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/96845/woolworths-essentials-frozen-peas"
    },
    "prawns": {
      "p": 12,
      "pk": 500,
      "name": "Ocean Chef Peeled Tail Off & Deveined Raw Prawns 500g",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/399608/ocean-chef-peeled-tail-off-deveined-raw-prawns",
      "sp": 1,
      "was": 16
    },
    "tintom": {
      "p": 1.8,
      "pk": 400,
      "name": "Ardmona Crushed Vine Ripened Tomatoes 400g",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/230392/ardmona-crushed-vine-ripened-tomatoes"
    },
    "passata": {
      "p": 1.95,
      "pk": 680,
      "name": "La Gina Italian Tomato Paste Passata 680g",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/63005/la-gina-italian-tomato-paste-passata"
    },
    "tompaste": {
      "p": 0.95,
      "pk": 170,
      "name": "Woolworths Essentials Tomato Paste 170g",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/90260/woolworths-essentials-tomato-paste"
    },
    "coconut": {
      "p": 1.7,
      "pk": 400,
      "name": "Woolworths Essentials Coconut Milk 400mL",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/694751/woolworths-essentials-coconut-milk"
    },
    "chickpeas": {
      "p": 1.7,
      "pk": 400,
      "name": "La Gina Chickpeas 400g",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/6006275/la-gina-chickpeas"
    },
    "blackbeans": {
      "p": 1.9,
      "pk": 400,
      "name": "Annalisa Black Beans 400g",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/6052697/annalisa-black-beans"
    },
    "corn": {
      "p": 1,
      "pk": 420,
      "name": "Woolworths Corn Sweet Kernels 420g",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/218926/woolworths-corn-sweet-kernels"
    },
    "sundried": {
      "p": 2,
      "pk": 110,
      "name": "Belladotti Cous Cous Sun-Dried Tomato & Basil 110g",
      "at": "2026-10-21",
      "u": "https://www.woolworths.com.au/shop/productdetails/6048032/belladotti-cous-cous-sun-dried-tomato-basil",
      "sp": 1,
      "was": 4
    },
    "greencurry": {
      "p": 2.3,
      "pk": 190,
      "name": "Mr Chen's Thai Green Curry Paste 190g",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/224633/mr-chen-s-thai-green-curry-paste",
      "alt": [
        114,
        2.3,
        "Maesri Paste Green Curry 114g"
      ]
    },
    "currypaste": {
      "p": 4.5,
      "pk": 283,
      "name": "Patak's Tikka Masala Curry Paste 283g",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/24275/patak-s-tikka-masala-curry-paste-paste",
      "sp": 1,
      "was": 7.5
    },
    "pickles": {
      "p": 6.5,
      "pk": 1360,
      "name": "Woolworths Whole Dill Pickles 1.36kg",
      "at": "2026-10-21",
      "u": "https://www.woolworths.com.au/shop/productdetails/6039973/woolworths-whole-dill-pickles"
    },
    "peanuts": {
      "p": 5.5,
      "pk": 750,
      "name": "Woolworths Peanuts Roasted & Salted 750g",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/185221/woolworths-peanuts-roasted-salted"
    },
    "arborio": {
      "p": 4,
      "pk": 1000,
      "name": "La Gina Arborio Rice 1kg",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/6047162/la-gina-arborio-rice"
    },
    "vermicelli": {
      "p": 2.55,
      "pk": 250,
      "name": "Chang's Rice Vermicelli 250g",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/87453/chang-s-rice-vermicelli"
    },
    "pasta": {
      "p": 0.9,
      "pk": 500,
      "name": "Woolworths Essentials Pasta Penne 500g",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/188800/woolworths-essentials-pasta-penne"
    },
    "lasagne": {
      "p": 2,
      "pk": 250,
      "name": "Woolworths Lasagne Sheets 250g",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/700276/woolworths-lasagne-sheets"
    },
    "panko": {
      "p": 2.9,
      "pk": 200,
      "name": "Obento Japanese Panko Breadcrumbs 200g",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/702323/obento-japanese-panko-breadcrumbs"
    },
    "buns": {
      "p": 3.6,
      "pk": 4,
      "name": "Bakery Du Jour Brioche Burger Buns 4 pack",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/645865/bakery-du-jour-brioche-burger-buns"
    },
    "wraps": {
      "p": 2.2,
      "pk": 8,
      "name": "Woolworths White Wrap 8 pack",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/634918/woolworths-white-wrap"
    },
    "tortillas": {
      "p": 4.3,
      "pk": 10,
      "name": "Old El Paso Mini Taco Tortilla Wraps 10 pack",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/248677/old-el-paso-mini-taco-tortilla-wraps",
      "sp": 1,
      "was": 5
    },
    "pita": {
      "p": 1.95,
      "pk": 6,
      "name": "Nana Traditional Lebanese Bread White 350g",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/650549/nana-traditional-lebanese-bread-white"
    },
    "naan": {
      "p": 4.5,
      "pk": 4,
      "name": "Simson's Pantry Mini Naans Garlic & Herb 225g",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/253142/simson-s-pantry-mini-naans-garlic-herb",
      "alt": [
        2,
        3.9,
        "Garlic Naan 2 pack"
      ]
    },
    "gf_wraps": {
      "p": 5.4,
      "pk": 6,
      "name": "Old El Paso Gluten Free Tortilla Fajita Wraps 6 pack",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/680471/old-el-paso-gluten-free-tortilla-fajita-wraps",
      "alt": [
        4,
        6,
        "Old El Paso Gluten Free Jumbo Tortilla Wraps 4 pack"
      ],
      "sp": 1,
      "was": 6
    },
    "corn_tortillas": {
      "p": 4.2,
      "pk": 12,
      "name": "Mission Gluten Free White Corn Tortillas 312g 12 pack",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/379736/mission-gluten-free-white-corn-tortillas"
    },
    "tamari": {
      "p": 4.5,
      "pk": 280,
      "name": "Chang's Tamari Light Soy Sauce 280mL",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/167388/chang-s-tamari-light-soy-sauce"
    },
    "sriracha": {
      "p": 4,
      "pk": 455,
      "name": "Tiao Hu Sriracha Hot Sauce 455mL",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/241193/tiao-hu-sriracha-hot-sauce",
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
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/601343/woolworths-jasmine-rice"
    },
    "flour": {
      "p": 2.4,
      "pk": 2000,
      "name": "Woolworths Essentials Plain Flour 2kg",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/45813/woolworths-essentials-plain-flour",
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
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/198763/lee-kum-kee-soy-sauce-premium",
      "sp": 1,
      "was": 4.3
    },
    "fishsauce": {
      "p": 2.85,
      "pk": 300,
      "name": "Squid Brand Fish Sauce 300mL",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/99484/squid-brand-fish-sauce"
    },
    "oyster": {
      "p": 2.85,
      "pk": 250,
      "name": "Mr Chen's Oyster Sauce 250mL",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/122359/mr-chen-s-oyster-sauce"
    },
    "sesameoil": {
      "p": 3.25,
      "pk": 150,
      "name": "Hong Gong Pure Sesame Oil 150mL",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/488890/hong-gong-pure-sesame-oil"
    },
    "ricevinegar": {
      "p": 2.4,
      "pk": 300,
      "name": "Lantern Alley Rice Wine Vinegar 300mL",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/6031429/lantern-alley-rice-wine-vinegar"
    },
    "whitevinegar": {
      "p": 1.8,
      "pk": 2000,
      "name": "Woolworths Essentials White Vinegar 2L",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/94706/woolworths-essentials-white-vinegar"
    },
    "mirin": {
      "p": 4.4,
      "pk": 250,
      "name": "Obento Mirin Seasoning 250mL",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/101938/obento-mirin-seasoning"
    },
    "honey": {
      "p": 3.3,
      "pk": 375,
      "name": "Cloverdale Pure Honey Twist & Squeeze 375g",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/89159/cloverdale-pure-honey-twist-squeeze"
    },
    "brownsugar": {
      "p": 3.1,
      "pk": 1000,
      "name": "Woolworths Essentials Brown Sugar 1kg",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/720342/woolworths-essentials-brown-sugar",
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
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/360680/woolworths-whole-egg-mayonnaise"
    },
    "ketchup": {
      "p": 1.85,
      "pk": 500,
      "name": "Woolworths Tomato Sauce Squeeze 500mL",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/230519/woolworths-tomato-sauce-squeeze"
    },
    "mustard": {
      "p": 4.8,
      "pk": 550,
      "name": "MasterFoods Mild American Mustard 550g",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/141604/masterfoods-mild-american-mustard-mild-american-squeeze",
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
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/501762/woolworths-sesame-seeds"
    },
    "stockpowder": {
      "p": 4.5,
      "pk": 200,
      "name": "Vegeta Chicken Stock Powder 200g",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/117241/vegeta-chicken-stock-powder",
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
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/948525/gourmet-garden-cold-blend-pastes-lemongrass"
    },
    "cumin": {
      "p": 2,
      "pk": 30,
      "name": "Woolworths Cumin Ground 30g",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/251007/woolworths-cumin-ground-ground",
      "sp": 1
    },
    "smokedpaprika": {
      "p": 2,
      "pk": 30,
      "name": "Woolworths Paprika Smoked 30g",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/251131/woolworths-paprika-smoked",
      "sp": 1
    },
    "garammasala": {
      "p": 2,
      "pk": 29,
      "name": "Woolworths Garam Masala 29g",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/251013/woolworths-garam-masala",
      "sp": 1
    },
    "turmeric": {
      "p": 2,
      "pk": 30,
      "name": "Woolworths Turmeric Ground 30g",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/251230/woolworths-turmeric-ground-ground",
      "sp": 1
    },
    "chilliflakes": {
      "p": 2,
      "pk": 23,
      "name": "Woolworths Chilli Flakes 23g",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/250994/woolworths-chilli-flakes",
      "sp": 1
    },
    "chillipowder": {
      "p": 2.25,
      "pk": 50,
      "name": "Hoyt's Chilli Powder 50g",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/94630/hoyt-s-chilli-powder"
    },
    "cinnamon": {
      "p": 2,
      "pk": 32,
      "name": "Woolworths Cinnamon Ground 32g",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/251000/woolworths-cinnamon-ground",
      "sp": 1
    },
    "castersugar": {
      "p": 2.2,
      "pk": 1000,
      "name": "Woolworths Essentials Caster Sugar 1kg",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/720343/woolworths-essentials-caster-sugar"
    },
    "cocoa": {
      "p": 7.5,
      "pk": 375,
      "name": "Woolworths Cocoa Powder 375g",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/311782/woolworths-cocoa-powder",
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
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/149218/woolworths-vanilla-extract",
      "alt": [
        150,
        10,
        "Queen Natural Vanilla Extract 150mL"
      ]
    },
    "bakingpowder": {
      "p": 4.4,
      "pk": 300,
      "name": "McKenzie's Baking Powder 300g",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/574616/mckenzie-s-baking-powder",
      "alt": [
        125,
        2.85,
        "McKenzie's Baking Powder 125g"
      ],
      "sp": 1,
      "was": 5.55
    },
    "oats": {
      "p": 3,
      "pk": 1500,
      "name": "Woolworths Australian Rolled Oats 1.5kg",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/196293/woolworths-australian-rolled-oats",
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
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/71324/woolworths-coconut-fine-desiccated",
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
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/6036468/woolworths-essentials-dark-choc-cooking-block"
    },
    "chocchips": {
      "p": 7,
      "pk": 200,
      "name": "Nestle Bakers' Choice Dark Choc Bits 200g",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/490008/nestle-bakers-choice-dark-choc-bits"
    },
    "creamcheese": {
      "p": 3.3,
      "pk": 250,
      "name": "Woolworths Cream Cheese Block 250g",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/6060039/woolworths-cream-cheese-block"
    },
    "banana": {
      "p": 0.81,
      "pk": 1,
      "name": "Cavendish Bananas each",
      "at": "2026-10-28",
      "u": "https://www.woolworths.com.au/shop/productdetails/133211/cavendish-bananas"
    }
  },
  "aldi": {},
  "updated": "2026-10-28"
};
