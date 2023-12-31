import { guides, homeCards, hotels, marketItems, vrPlaces } from "@/types";

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
    VRImage,
    supplementsImage,
    travelImage,
    guide1,
    guide2,
    guide3,
    guide4,
    guide5,
    hotel1,
    hotel2,
    hotel3,
} from "@/assets";

export const HOME_CARDS: homeCards = [
    {
        title: "Hotels & Stay",
        url: "/hotel",
        icon: BedDouble,
        image: hotelImage,
    },
    {
        title: "Virtual Reality",
        url: "/vr",
        icon: MapPin,
        image: VRImage,
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
        image: guide1,
        experience: 5,
        numOfTours: 10,
        rating: 4.5,
        language: "English",
    },
    {
        name: "Suresh Gupta",
        id: "G20242",
        phone: 8985632145,
        speciality: "History",
        image: guide2,
        experience: 7,
        numOfTours: 15,
        rating: 3.5,
        language: "Hindi",
    },
    {
        name: "Afroz Mansuri",
        id: "G20243",
        phone: 7885632145,
        speciality: "Nature",
        image: guide3,
        experience: 3,
        numOfTours: 5,
        rating: 4,
        language: "Marathi",
    },
    {
        name: "Suhas Joshi",
        id: "G20244",
        phone: 9635632145,
        speciality: "Religious",
        image: guide4,
        experience: 2,
        numOfTours: 3,
        rating: 5,
        language: "English",
    },
    {
        name: "Prakash Deshmukh",
        id: "G20245",
        phone: 9515632145,
        speciality: "Adventure",
        image: guide5,
        experience: 4,
        numOfTours: 7,
        rating: 4,
        language: "Hindi",
    },
];

export const VR: vrPlaces = [
    {
        name: "Goda Park",
        city: "Nashik",
        type: "Picnic",
    },
    {
        name: "Ajanta Caves",
        city: "Aurangabad",
        type: "Historical",
    },
    {
        name: "Balaji Temples",
        city: "Nashik",
        type: "Religious",
    },
    {
        name: "Trimbakeshwar",
        city: "Nashik",
        type: "Religious",
    },
];

export const HOTELS: hotels = [
    {
        name: "Express Inn",
        image: hotel1,
        rating: 4.5,
    },
    {
        name: "IBIS",
        image: hotel2,
        rating: 4,
    },
    {
        name: "Ginger",
        image: hotel3,
        rating: 3.5,
    },
];
