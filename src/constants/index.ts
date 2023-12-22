import { guides, homeCards, marketItems } from "@/types";

import {
    BedDouble,
    MapPin,
    BusFront,
    Pizza,
    Contact2,
    FileText,
} from "lucide-react";

import {
    guideImage,
    hotelImage,
    infoImage,
    mapImage,
    supplementsImage,
    travelImage,
} from "@/assets";

export const HOME_CARDS: homeCards = [
    {
        title: "Hotels & Stay",
        url: "/hotel",
        icon: BedDouble,
        image: hotelImage,
    },
    {
        title: "Map",
        url: "/map",
        icon: MapPin,
        image: mapImage,
    },
    {
        title: "Travel & Transit Ease",
        url: "/travel",
        icon: BusFront,
        image: travelImage,
    },
    {
        title: "Supplement, Food & More",
        url: "/market",
        icon: Pizza,
        image: supplementsImage,
    },
    {
        title: "Guide & Discovery Companion",
        url: "/guide",
        icon: Contact2,
        image: guideImage,
    },
    {
        title: "About & History",
        url: "/about",
        icon: FileText,
        image: infoImage,
    },
];

export const MARKET_ITEMS: marketItems = [
    {
        title: "Misal Pav",
        price: 120,
        tag: "Food",
        id: "F20241",
        quantity: 0,
    },
    {
        title: "Toy Gun & Bullets",
        price: 80,
        tag: "Souvenir",
        id: "S20241",
        quantity: 0,
    },
    {
        title: "Dolo 650",
        price: 45,
        tag: "Medicine",
        id: "M20241",
        quantity: 0,
    },
    {
        title: "Bottle of Water",
        price: 20,
        tag: "Food",
        id: "F20242",
        quantity: 0,
    },
    {
        title: "Paracetamol",
        price: 60,
        tag: "Medicine",
        id: "M20242",
        quantity: 0,
    },
];

export const GUIDE: guides = [
    {
        name: "Rajesh Mishra",
        id: "G20241",
        phone: 9885632145,
        speciality: "Adventure",
    },
    {
        name: "Suresh Gupta",
        id: "G20242",
        phone: 8985632145,
        speciality: "History",
    },
    {
        name: "Afroz Mansuri",
        id: "G20243",
        phone: 7885632145,
        speciality: "Nature",
    },
    {
        name: "Suhas Joshi",
        id: "G20244",
        phone: 9635632145,
        speciality: "Religious",
    },
    {
        name: "Prakash Deshmukh",
        id: "G20245",
        phone: 9515632145,
        speciality: "Adventure",
    },
    {
        name: "Hemant Kulkarni",
        id: "G20246",
        phone: 7535632145,
        speciality: "History",
    },
    {
        name: "Jagdish Patil",
        id: "G20247",
        phone: 985632145,
        speciality: "Nature",
    },
    {
        name: "Eknath Shinde",
        id: "G20248",
        phone: 9632145527,
        speciality: "Religious",
    },
    {
        name: "Wamanrao Chatap",
        id: "G20249",
        phone: 865632145,
        speciality: "Adventure",
    },
    {
        name: "Bhushan Patil",
        id: "G20250",
        phone: 8441232145,
        speciality: "History",
    },
];
