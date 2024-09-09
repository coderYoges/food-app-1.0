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
        " H.A. Briyani Catering Service exceeded our expectations in every way. We highly recommend them for any event, big or small.",
      clientName: "Akbar, Kodungaiyur",
      clientProfession: "Medical Labarotary, Chennai",
      imagePath: require("../assets/images/testimonial-1.jpeg"),
    },
    {
      message:
        " Best quality and best service, door step service also available from them. Totally, As a customer I feel good.",
      clientName: "Ganesh, Ramnagar",
      clientProfession: "Advocate, Chennai",
      imagePath: require("../assets/images/testimonial-2.jpeg"),
    },
    {
      message:
        " One of the tastiest Briyani, I've ever tried in my life. Briyani is very flavourful and the chicken is really succulent.",
      clientName: "Ravichandran, Kolathur",
      clientProfession: "IT center, Chennai",
      imagePath: require("../assets/images/testimonial-3.jpeg"),
    },
    {
      message:
        " Very delicious Briyani, the preparation seems to be very good, and they deliver it on time as well.",
      clientName: "Salman, Manali Road",
      clientProfession: "Bank Manager, Chennai",
      imagePath: require("../assets/images/testimonial-4.jpeg"),
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
          imagePath: "gallery-food-01.jpg",
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
          imagePath: "gallery-food-02.png",
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
          imagePath: "gallery-food-01.jpg",
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
          imagePath: "gallery-food-02.png",
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
          imagePath: "gallery-food-09.jpg",
          receipes: [],
        },
        {
          title: "Ghee rice with Mutton korma",
          price: "Rs.1000",
          label: "per kg",
          menuId: "006",
          minimumOrder: "50",
          imagePath: "gallery-food-09.jpg",
          receipes: [],
        },
        {
          title: "Ghee rice with Chicken korma",
          price: "Rs.800",
          label: "per kg",
          menuId: "007",
          minimumOrder: "50",
          imagePath: "gallery-food-09.jpg",
          receipes: [],
        },
        {
          title: "Fish fry",
          price: "Rs.160",
          label: "per piece",
          menuId: "008",
          minimumOrder: "50",
          imagePath: "gallery-food-15.jpg",
          receipes: [],
        },
        {
          title: "Prawn fry",
          price: "Rs.700",
          label: "per kg",
          menuId: "009",
          minimumOrder: "20",
          imagePath: "gallery-food-20.jpg",
          receipes: [],
        },

        {
          title: "Tandoori Chicken",
          price: "Rs.450",
          label: "full",
          menuId: "010",
          minimumOrder: "40",
          imagePath: "gallery-food-03.jpg",
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
          imagePath: "gallery-food-18.jpg",
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
          imagePath: "gallery-food-04.jpg",
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
          imagePath: "gallery-food-05.jpg",
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
          imagePath: "gallery-food-07.jpg",
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
          imagePath: "gallery-food-08.jpg",
          receipes: [],
        },
        {
          title: "Panner 65",
          price: "Rs.400",
          label: "per kg",
          menuId: "105",
          minimumOrder: "50",
          imagePath: "gallery-food-11.png",
          receipes: [],
        },
        {
          title: "Mushroom 65",
          price: "Rs.300",
          label: "per kg",
          menuId: "106",
          minimumOrder: "50",
          imagePath: "gallery-food-12.jpg",
          receipes: [],
        },
        {
          title: "Butter Panner Masala",
          price: "Rs.600",
          label: "per kg",
          menuId: "107",
          minimumOrder: "50",
          imagePath: "gallery-food-13.jpg",
          receipes: [],
        },
        {
          title: "Chappati",
          price: "Rs.15",
          label: "per piece",
          menuId: "011",
          minimumOrder: "50",
          imagePath: "gallery-food-18.jpg",
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
          imagePath: "gallery-food-14.jpg",
        },
        {
          title: "Carrot Halwa",
          price: "Rs.600",
          label: "per kg",
          minimumOrder: "50",
          menuId: "202",
          imagePath: "gallery-food-17.jpg",
        },
        {
          title: "Muntajan Sweet",
          price: "Rs.1000",
          label: "per kg",
          minimumOrder: "50",
          menuId: "203",
          imagePath: "gallery-food-19.jpg",
        },

        {
          title: "Firni Sweet",
          price: "Rs.1000",
          label: "per kg",
          minimumOrder: "50",
          menuId: "204",
          imagePath: "gallery-food-10.jpg",
        },
        {
          title: "Fruit Salad",
          price: "Rs.15",
          label: "per cup",
          minimumOrder: "50",
          menuId: "205",
          imagePath: "gallery-food-21.jpg",
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
    [
      "gallery-food-01.jpg",
      "gallery-food-02.png",
      "gallery-food-03.jpg",
      "gallery-food-04.jpg",
      "gallery-food-05.jpg",
      "gallery-food-06.jpg",
      "gallery-food-07.jpg",
      "gallery-food-08.jpg",
      "gallery-food-09.jpg",
      "gallery-food-10.jpg",
      "gallery-food-11.png",
      "gallery-food-12.jpg",
      "gallery-food-13.jpg",
      "gallery-food-14.jpg",
      "gallery-food-15.jpg",
      "gallery-food-16.jpg",
      "gallery-food-17.jpg",
      "gallery-food-18.jpg",
      "gallery-food-19.jpg",
      "gallery-food-20.jpg",
      "gallery-food-21.jpg",
    ],
    [
      "gallery-place-01.jpeg",
      "gallery-place-02.jpeg",
      "gallery-place-03.jpeg",
      "gallery-place-04.jpeg",
      "gallery-place-05.jpeg",
      "gallery-place-06.jpeg",
      "gallery-place-07.jpeg",
      "gallery-place-08.jpeg",
      "gallery-place-09.jpeg",
      "gallery-place-10.jpeg",
      "gallery-place-11.jpeg",
      "gallery-place-12.jpeg",
      "gallery-place-13.jpeg",
      "gallery-place-14.jpeg",
      "gallery-place-15.jpeg",
      "gallery-place-16.jpg",
      "gallery-place-17.jpg",
    ],
    ["gallery-wholesale-01.jpg", "gallery-wholesale-02.jpg"],
  ],
};

export const bookletImages = [
  "home-menu-page01",
  "home-menu-page02",
  "home-menu-page03",
  "home-menu-page04",
  "home-menu-page05",
  "home-menu-page06",
];
