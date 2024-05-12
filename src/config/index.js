export const headerConstants = {
  title: "H.A.Biryani",
  paths: ["Home", "About", "Menu", "Gallery", "Contact"],
  link: "Enquiry",
};

export const enquiryConstants = {
  title: "---- Enquire Us ----",
};

export const footerConstants = {
  companyList: {
    header: "Company -----",
    paths: [
      {
        title: "Menu",
        path: "/menu",
      },
      {
        title: "Gallery",
        path: "/gallery",
      },
      {
        title: "Privacy Policy",
        path: "/",
      },
      {
        title: "Terms & Condition",
        path: "/",
      },
    ],
  },
  addressList: {
    header: "Locate Us -----",
    content1: "No 19/49, Teed's",
    content: ["Garden, 7th Street,", "Sembiyam,", "Perambur,", "Chennai-11."],
  },
  servicesList: {
    header: "Services -----",
    paths: [
      {
        title: "Function Catering",
        path: "/",
      },
      {
        title: "Quality Food",
        path: "/",
      },
      {
        title: "Commercial Spaces",
        path: "/",
      },
      {
        title: "Raw Materials",
        path: "/",
      },
    ],
  },
  contactList: {
    header: "Contact Us -----",
    phone1: "+91 9789925091",
    phone2: "+91 7845682228",
    email: "h.a.briyani1974",
    content: ["Garden, 7th Street,", "Sembiyam,", "Perambur,", "Chennai-11."],
  },
};

export const homePageConstants = {
  title: "---- Welcome to H.A.Biryani ----",
  header: "Eat our food, Feel the flavour,\nEnjoy the taste, Fill your soul.",
  subHeader:
    "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqudiam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet",
  link: "Read more about us",
  services: [
    {
      title: "Function Catering Service",
      icon: "fa-user-tie",
      content:
        "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
    },
    {
      title: "Quality Food",
      icon: "fa-utensils",
      content:
        "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
    },
    {
      title: "Own Commercial Spaces",
      icon: "fa-warehouse",
      content:
        "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
    },
    {
      title: "Wholesale Raw Materials",
      icon: "fa-cart-plus",
      content:
        "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
    },
  ],
};

export const aboutPageConstants = {
  title: '---- "About Us" ----',
  content:
    " Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.",
  yearsOfExperience: "Years of Experience",
};

export const contactPageConstants = {
  title: "---- Contact Us ----",
  subTitle: "Contact For Any Query",
  contactItems: [
    {
      title: "Booking ----",
      content: "+91 9789925091",
    },
    {
      title: "General ----",
      content: "+91 7845682228",
    },
    {
      title: "Technical ----",
      content: "h.a.briyani1974",
    },
  ],
};

export const testimonialsConstants = {
  title: "---- Testimonial ----",
  subTitle: "Our Clients say!!!",
  testimonies: [
    {
      message:
        " Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
      clientName: "Client1",
      clientProfession: "Client1-Profession",
      imagePath: require("../assets/images/testimonial-1.jpg"),
    },
    {
      message:
        " Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
      clientName: "Client2",
      clientProfession: "Client2-Profession",
      imagePath: require("../assets/images/testimonial-2.jpg"),
    },
    {
      message:
        " Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
      clientName: "Client3",
      clientProfession: "Client3-Profession",
      imagePath: require("../assets/images/testimonial-3.jpg"),
    },
    {
      message:
        " Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
      clientName: "Client4",
      clientProfession: "Client4-Profession",
      imagePath: require("../assets/images/testimonial-4.jpg"),
    },
  ],
};

export const menuPageConstants = {
  header: "---- Food Menu ----",
  subHeader: "Most Popular Items",
  content: [
    {
      title: "Popular",
      menu: "Non Veg",
      items: [
        {
          title: "Our Special Mutton Briyani",
          price: "Rs.350",
          label: "per person",
          menuId: "001",
          receipes: [
            "Welcome Drink",
            "Mutton Biryani",
            "Bread Halwa Sweet",
            "Brinjal Chutney",
            "Onion Chutney",
            "Chicken 65",
            "Chicken Gravy",
            "Rumani Roti",
            "Chappati",
            "Ice Cream",
            "Beeda",
            "Popcorn",
            "Panjimithani",
            "Chocolate Fountain",
            "Water Bottle 300ml",
            "Banana Leaf",
            "Service Boys",
          ],
        },
        {
          title: "Our Special Chicken Briyani",
          price: "Rs.250",
          label: "per person",
          menuId: "002",
          receipes: [
            "Welcome Drink",
            "Chicken Biryani",
            "Bread Halwa Sweet",
            "Brinjal Chutney",
            "Onion Chutney",
            "Chicken 65",
            "Chicken Gravy",
            "Rumani Roti",
            "Chappati",
            "Ice Cream",
            "Beeda",
            "Popcorn",
            "Panjimithani",
            "Chocolate Fountain",
            "Water Bottle 300ml",
            "Banana Leaf",
            "Service Boys",
          ],
        },
        {
          title: "Mutton Briyani Feast",
          price: "Rs.300",
          label: "per person",
          menuId: "003",
          receipes: [
            "Mutton Biryani",
            "Bread Halwa Sweet",
            "Brinjal Chutney",
            "Onion Chutney",
            "Chicken 65",
            "Ice Cream",
            "Water Bottle 300ml",
            "Banana Leaf",
            "Service Boys",
          ],
        },
        {
          title: "Chicken Briyani Feast",
          price: "Rs.200",
          label: "per person",
          menuId: "004",
          receipes: [
            "Chicken Biryani",
            "Bread Halwa Sweet",
            "Brinjal Chutney",
            "Onion Chutney",
            "Chicken 65",
            "Ice Cream",
            "Water Bottle 300ml",
            "Banana Leaf",
            "Service Boys",
          ],
        },
        {
          title: "Ghee rice with Dalcha",
          price: "Rs.900",
          label: "per kg",
          menuId: "005",
          receipes: [],
        },
        {
          title: "Ghee rice with Mutton korma",
          price: "Rs.1000",
          label: "per kg",
          menuId: "006",
          receipes: [],
        },
        {
          title: "Ghee rice with Chicken korma",
          price: "Rs.800",
          label: "per kg",
          menuId: "007",
          receipes: [],
        },
        {
          title: "Fish fry",
          price: "Rs.160",
          label: "per piece",
          menuId: "008",
          receipes: [],
        },
        {
          title: "Prawn fry",
          price: "Rs.700",
          label: "per kg",
          menuId: "009",
          receipes: [],
        },

        {
          title: "Tandoori Chicken",
          price: "Rs.450",
          label: "full",
          menuId: "010",
          receipes: [
            "full - Rs. 450",
            "half - Rs.250",
            "Fresh Mayonnaise",
            "Green Chutney",
          ],
        },
        {
          title: "Chappati",
          price: "Rs.15",
          label: "per piece",
          menuId: "011",
          receipes: [
          ]
        },
      ],
    },
    {
      title: "Special",
      menu: "Veg",
      items: [
        {
          title: "Our Special Halakka Briyani",
          price: "Rs.200",
          label: "per person",
          menuId: "101",
          receipes: [
            "Palakka Briyani",
            "Bread Halwa Sweet",
            "Brinjal Chutney",
            "Onion Chutney",
            "Cauliflower Pakoda",
            "Ice Cream",
            "Water Bottle 300ml",
            "Banana Leaf",
            "Service Boys",
          ],
        },
        {
          title: "Mushroom Briyani",
          price: "Rs.200",
          label: "per person",
          menuId: "102",
          receipes: [
            "Mushroom Briyani",
            "Bread Halwa Sweet",
            "Brinjal Chutney",
            "Onion Chutney",
            "Cauliflower Pakoda",
            "Ice Cream",
            "Water Bottle 300ml",
            "Banana Leaf",
            "Service Boys",
          ],
        },
        {
          title: "Veg Briyani",
          price: "Rs.160",
          label: "per person",
          menuId: "103",
          receipes: [
            "Veg Briyani",
            "Bread Halwa Sweet",
            "Brinjal Chutney",
            "Onion Chutney",
            "Cauliflower Pakoda",
            "Ice Cream",
            "Water Bottle 300ml",
            "Banana Leaf",
            "Service Boys",
          ],
        },
        {
          title: "Panner Tikka",
          price: "Rs.60",
          label: "per piece",
          menuId: "104",
          receipes: [],
        },
        {
          title: "Panner 65",
          price: "Rs.400",
          label: "per kg",
          menuId: "105",
          receipes: [],
        },
        {
          title: "Mushroom 65",
          price: "Rs.300",
          label: "per kg",
          menuId: "106",
          receipes: [],
        },
        {
          title: "Butter Panner Masala",
          price: "Rs.60",
          label: "per piece",
          menuId: "107",
          receipes: [],
        },
        {
          title: "Chappati",
          price: "Rs.15",
          label: "per piece",
          menuId: "011",
          receipes: [
          ]
        },
      ],
    },
    {
      title: "Lovely",
      menu: "Sweets",
      items: [
        {
          title: "Gulab Jamun",
          price: "Rs.10",
          label: "per piece",
          menuId: "201",
        },
        {
          title: "Carrot Halwa",
          price: "Rs.600",
          label: "per kg",
          menuId: "202",
        },
        {
          title: "Muntajan Sweet",
          price: "Rs.1000",
          label: "per kg",
          menuId: "203",
        },

        {
          title: "Firni Sweet",
          price: "Rs.1000",
          label: "per kg",
          menuId: "204",
        },
        {
          title: "Fruit Salad",
          price: "Rs.15",
          label: "per cup",
          menuId: "205",
        },
      ],
    },
  ],
};
