export const headerConstants = {
  title: "H.A.Briyani",
  paths: ["Home", "About", "Menu", "Gallery", "Contact"],
  link: "Enquiry",
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
  title: "---- Welcome to H.A.Briyani ----",
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
        },
        {
          title: "Our Special Chicken Briyani",
          price: "Rs.250",
          label: "per person",
        },
        {
          title: "Mutton Briyani Feast",
          price: "Rs.300",
          label: "per person",
        },
        {
          title: "Chicken Briyani Feast",
          price: "Rs.200",
          label: "per person",
        },
        {
          title: "Ghee rice with Dalcha",
          price: "Rs.1000",
          label: "per kg",
        },
        {
          title: "Ghee rice with Mutton korma",
          price: "Rs.1000",
          label: "per kg",
        },
        {
          title: "Ghee rice with Chicken korma",
          price: "Rs.1000",
          label: "per kg",
        },
        {
          title: "Fish fry",
          price: "Rs.160",
          label: "per piece",
        },
        {
          title: "Prawn fry",
          price: "Rs.700",
          label: "per kg",
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
        },
        {
          title: "Mushroom Briyani",
          price: "Rs.200",
          label: "per person",
        },
        {
          title: "Veg Briyani",
          price: "Rs.160",
          label: "per person",
        },

        {
          title: "Panner Tikka",
          price: "Rs.60",
          label: "per quantity",
        },
        {
          title: "Butter Panner Masala",
          price: "",
          label: "",
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
        },
        {
          title: "Carrot Halwa",
          price: "",
          label: "",
        },
        {
          title: "Muntajan Sweet",
          price: "",
          label: "",
        },

        {
          title: "Firni Sweet",
          price: "",
          label: "",
        },
      ],
    },
  ],
};
