import { FiDatabase, FiSmile, FiTruck } from "react-icons/fi";

const navbarData = [
  {
    title: "Men",
    to: "/product-category/living",
    children: [
      {
        title: "Shoes",
        to: "/product-category/living/sofa-collection",
        children: [
          {
            title: "Casual Shoes",
            to: "/product-category/living/sofa-collection/sofa-sets",
          },
          {
            title: "Formal Shoes",
            to: "/product-category/living/sofa-collection/corner-sofa",
          },
          {
            title: "Sports",
            to: "/product-category/living/sofa-collection/chairs",
          },
          {
            title: "Men's Sandal",
            to: "/product-category/living/sofa-collection/chairs",
          },
        ],
      },
      {
        title: "Brand",
        to: "/product-category/living/storage",
        children: [
          {
            title: "Bata",
            to: "/product-category/living/storage/bar-cabinet",
          },
          {
            title: "Bata Comfit",
            to: "/product-category/living/storage/bar-shoee",
          },
          {
            title: "Hush Pupies",
            to: "/product-category/living/storage/bar-shoee",
          },
          {
            title: "North Star",
            to: "/product-category/living/storage/bar-shoee",
          },
          {
            title: "Power",
            to: "/product-category/living/storage/bar-shoee",
          },
          {
            title: "Weinbrenner",
            to: "/product-category/living/storage/bar-shoee",
          },
        ],
      },
      {
        title: "By Price",
        to: "#",
        children: [
          {
            title: "Under 1000",
            to: "/product-category/living/others/tv-units",
          },
          {
            title: "TK.10000 - 20000",
            to: "/product-category/living/others/bean-bag",
          },
          {
            title: "TK.20000 - 30000",
            to: "/product-category/living/others/coffee-tables",
          },
          {
            title: "TK.30000 - 40000",
            to: "/product-category/living/others/office-study",
          },
          {
            title: "TK.40000 - 50000",
            to: "/product-category/living/others/office-study",
          },
          {
            title: "Upper then 50000",
            to: "/product-category/living/others/office-study",
          },
        ],
      },
    ],
  },
  {
    title: "Women",
    to: "/product-category/bed-room",
    children: [
      {
        title: "Shoes",
        to: "/product-category/bed-room/bed-room-furniture",
        children: [
          {
            title: "Ladies Sandals",
            to: "/product-category/bed-room/bed-room-furniture/bed-room-set",
          },
          {
            title: "Ladies Heels",
            to: "/product-category/bed-room/bed-room-furniture/beds-headboards",
          },
          {
            title: "Ladies Sports Shoes",
            to: "/product-category/bed-room/bed-room-furniture/kids",
          },
          {
            title: "Ladies Casual",
            to: "/product-category/bed-room/bed-room-furniture/kids",
          },
          {
            title: "Formal Shoes",
            to: "/product-category/bed-room/bed-room-furniture/kids",
          },
        ],
      },
      {
        title: "Brand",
        to: "/product-category/living/storage",
        children: [
          {
            title: "Bata",
            to: "/product-category/living/storage/bar-cabinet",
          },
          {
            title: "Bata Comfit",
            to: "/product-category/living/storage/bar-shoee",
          },
          {
            title: "Hush Pupies",
            to: "/product-category/living/storage/bar-shoee",
          },
          {
            title: "North Star",
            to: "/product-category/living/storage/bar-shoee",
          },
          {
            title: "Power",
            to: "/product-category/living/storage/bar-shoee",
          },
          {
            title: "Weinbrenner",
            to: "/product-category/living/storage/bar-shoee",
          },
        ],
      },
      {
        title: "By Price",
        to: "#",
        children: [
          {
            title: "Under 1000",
            to: "/product-category/living/others/tv-units",
          },
          {
            title: "TK.10000 - 20000",
            to: "/product-category/living/others/bean-bag",
          },
          {
            title: "TK.20000 - 30000",
            to: "/product-category/living/others/coffee-tables",
          },
          {
            title: "TK.30000 - 40000",
            to: "/product-category/living/others/office-study",
          },
          {
            title: "TK.40000 - 50000",
            to: "/product-category/living/others/office-study",
          },
          {
            title: "Upper then 50000",
            to: "/product-category/living/others/office-study",
          },
        ],
      },
    ],
  },
  {
    title: "Dining",
    to: "/product-category/dining",
  },
  {
    title: "Deals",
    to: "/product-category/deails",
  },
  {
    title: "NEW ARRIVALS",
    to: "/product-category/new-arrivals",
  },
  {
    title: "NEW ARRIVALS",
    to: "/product-category/new-arrivals",
  },
];

const userData = [
  {
    label: "My Profile",
    to: "/user/my-account",
    Icon: FiSmile,
  },
  {
    label: "My Orders",
    to: "/user/my-orders",
    Icon: FiDatabase,
  },
  {
    label: "My Address Book",
    to: "/user/my-address-book",
    Icon: FiTruck,
  },
];

export { navbarData, userData };
