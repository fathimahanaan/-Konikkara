import { GiIntricateNecklace } from "react-icons/gi";
import { AiOutlineShopping } from "react-icons/ai";
import { GiHeartNecklace } from "react-icons/gi";
import { GiFeatherNecklace } from "react-icons/gi";
export const serviceData = [
  {
    id: 1,
    icon: <GiIntricateNecklace color="#593c2d" />,
    title: "Exclusive Designs",
    content:
      "   Unique and intricate designs inspired by Kerala’s rich heritage, blending tradition with modern elegance",
    clss: "border-class",
  },
  {
    id: 2,
    icon: <AiOutlineShopping color="#593c2d" />,
    title: " Highest Quality",
    content:
      " Our jewelry is crafted with precision using only the finest materials, ensuring lasting durability and beauty",
    clss: "border-class",
  },
  {
    id: 3,
    icon: <GiHeartNecklace color="#593c2d" />,
    title: "  Lightweight ",
    content:
      " Elegant, comfortable, and easy to wear, perfect for any occasion without compromising on style.",
    clss: "border-class",
  },
  {
    id: 4,
    icon: <GiFeatherNecklace color=" #593c2d" />,
    title: " Affordable Luxury",
    content:
      " We offer premium jewelry at competitive prices, ensuring elegance and quality are accessible to everyone.",
    clss: "",
  },
];

export const navData = [
  { id: 1, href: "#Home", name: "Home" },
  { id: 2, href: "#About", name: "About" },
  { id: 3, href: "#Collection", name: "Collections" },
  { id: 4, href: "#Contact", name: "Contact" },
];

// List of karat values and their corresponding price keys
export const karatValues = [
  { karat: "10k", key: "price_gram_10k" },
  { karat: "14k", key: "price_gram_14k" },
  { karat: "16k", key: "price_gram_16k" },
  { karat: "18k", key: "price_gram_18k" },
  { karat: "20k", key: "price_gram_20k" },
  { karat: "21k", key: "price_gram_21k" },
  { karat: "22k", key: "price_gram_22k" },
  { karat: "24k", key: "price_gram_24k" },
];
