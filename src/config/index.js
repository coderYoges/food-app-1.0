export const headerConstants = {
  title: "H.A.Biryani",
  paths: ["Home", "About", "Menu", "Gallery", "Contact"],
  link: "Enquiry",
};

export const enquiryConstants = {
  title: "---- Enquire Us ----",
  button: "Send Message",
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
    "Our Biryani in Chennai has turned so popular that this brand has become synonymous with a biryani variant. This frequented eatery is famous for its wood-fired cooked desi or naati style, mutton biryani. Starting its journey about a 17 years back, it rose to fame in the shortest period. Today, H.A Biryani is among India's most favourite names. People come from all over to have an early start.",
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
  content1:
    "H.A Biryani Catering is a Chennai based catering with years of wealthy experience. We are one of the most sustainable caterers in Chennai and understand our customers needs. We are accustomed to the changing trends and tastes in food and luxurious fine dining.",
  content2:
    "The word “biryani” comes from the Persian word “birian” which means “fried before cooking.” One could conclude that the biryani originated in Iran (previously known as Persia). Another interesting story traces the origins of the dish to Mumtaz Mahal (1593-1631), Shah Jahan's queen who inspired the Taj Mahal.",
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
          minimumOrder: "200",
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
            "Fruit Salad",
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
          minimumOrder: "200",
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
            "Fruit Salad",
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
          minimumOrder: "50",
          menuId: "003",
          receipes: [
            "Mutton Biryani",
            "Bread Halwa Sweet",
            "Brinjal Chutney",
            "Onion Chutney",
            "Chicken 65",
            "Ice Cream",
            "Fruit Salad",
            "Water Bottle 300ml",
            "Banana Leaf",
            "Service Boys",
          ],
        },
        {
          title: "Chicken Briyani Feast",
          price: "Rs.200",
          label: "per person",
          minimumOrder: "50",
          menuId: "004",
          receipes: [
            "Chicken Biryani",
            "Bread Halwa Sweet",
            "Brinjal Chutney",
            "Onion Chutney",
            "Chicken 65",
            "Ice Cream",
            "Fruit Salad",
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
          minimumOrder: "50",
          receipes: [],
        },
        {
          title: "Ghee rice with Mutton korma",
          price: "Rs.1000",
          label: "per kg",
          menuId: "006",
          minimumOrder: "50",
          receipes: [],
        },
        {
          title: "Ghee rice with Chicken korma",
          price: "Rs.800",
          label: "per kg",
          menuId: "007",
          minimumOrder: "50",
          receipes: [],
        },
        {
          title: "Fish fry",
          price: "Rs.160",
          label: "per piece",
          menuId: "008",
          minimumOrder: "50",
          receipes: [],
        },
        {
          title: "Prawn fry",
          price: "Rs.700",
          label: "per kg",
          menuId: "009",
          minimumOrder: "20",
          receipes: [],
        },

        {
          title: "Tandoori Chicken",
          price: "Rs.450",
          label: "full",
          menuId: "010",
          minimumOrder: "40",
          receipes: [
            "full - Rs.450",
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
          minimumOrder: "50",
          receipes: [],
        },
      ],
    },
    {
      title: "Special",
      menu: "Veg",
      items: [
        {
          title: "Our Special Jackfruit Briyani",
          price: "Rs.200",
          label: "per person",
          menuId: "101",
          minimumOrder: "50",
          receipes: [
            "Jackfruit Briyani",
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
          minimumOrder: "50",
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
          minimumOrder: "50",
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
          price: "Rs.300",
          label: "per kg",
          menuId: "104",
          minimumOrder: "50",
          receipes: [],
        },
        {
          title: "Panner 65",
          price: "Rs.400",
          label: "per kg",
          menuId: "105",
          minimumOrder: "50",
          receipes: [],
        },
        {
          title: "Mushroom 65",
          price: "Rs.300",
          label: "per kg",
          menuId: "106",
          minimumOrder: "50",
          receipes: [],
        },
        {
          title: "Butter Panner Masala",
          price: "Rs.600",
          label: "per kg",
          menuId: "107",
          minimumOrder: "50",
          receipes: [],
        },
        {
          title: "Chappati",
          price: "Rs.15",
          label: "per piece",
          menuId: "011",
          minimumOrder: "50",
          receipes: [],
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
          minimumOrder: "50",
          menuId: "201",
        },
        {
          title: "Carrot Halwa",
          price: "Rs.600",
          label: "per kg",
          minimumOrder: "50",
          menuId: "202",
        },
        {
          title: "Muntajan Sweet",
          price: "Rs.1000",
          label: "per kg",
          minimumOrder: "50",
          menuId: "203",
        },

        {
          title: "Firni Sweet",
          price: "Rs.1000",
          label: "per kg",
          minimumOrder: "50",
          menuId: "204",
        },
        {
          title: "Fruit Salad",
          price: "Rs.15",
          label: "per cup",
          minimumOrder: "50",
          menuId: "205",
        },
      ],
    },
  ],
};

export const galleryPageConstants = {
  header: "---- Gallery ----",
  subHeader: "Our Memories",
  services: [
    "Function Catering",
    "Quality Food",
    "Own Cooking Spaces",
    "Wholesale Materials",
  ],
  galleryImages: [
    [
      "gallery-catering-01.jpeg",
      "gallery-catering-02.jpeg",
      "gallery-catering-03.jpeg",
      "gallery-catering-04.jpeg",
      "gallery-catering-05.jpeg",
      "gallery-catering-06.jpeg",
      "gallery-catering-07.jpeg",
      "gallery-catering-08.jpeg",
    ],
    [],
    [
      'gallery-place-01.jpeg',
      'gallery-place-02.jpeg',
      'gallery-place-03.jpeg',
      'gallery-place-04.jpeg',
      'gallery-place-05.jpeg',
      'gallery-place-06.jpeg',
      'gallery-place-07.jpeg',
      'gallery-place-08.jpeg',
      'gallery-place-09.jpeg',
      'gallery-place-10.jpeg',
      'gallery-place-11.jpeg',
      'gallery-place-12.jpeg',
      'gallery-place-13.jpeg',
      'gallery-place-14.jpeg',
      'gallery-place-15.jpeg',
    ],
    []
  ],
};
