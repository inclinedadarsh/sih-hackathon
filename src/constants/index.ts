import { homeCards } from "@/types";

import {
    BedDouble,
    MapPin,
    BusFront,
    Pizza,
    Contact2,
    FileText,
} from "lucide-react";

export const HOME_CARDS: homeCards = [
    {
        title: "Hotels & Stay",
        description:
            "Comfortable accommodations nestled in Goda Park, offering a serene retreat for a restful stay during your exploration.",
        url: "/hotel",
        icon: BedDouble,
    },
    {
        title: "Map",
        description:
            "A detailed map for Goda Park, providing navigation and highlighting key attractions to make your journey seamless and enjoyable.",
        url: "/map",
        icon: MapPin,
    },
    {
        title: "Travel & Transit Ease",
        description:
            "Convenient transportation options facilitating effortless travel within and around Goda Park, ensuring you reach your desired destinations with ease.",
        url: "/travel",
        icon: BusFront,
    },
    {
        title: "Supplement, Food & More",
        description:
            "Explore local markets and shops within Goda Park, offering a variety of food and souvenirs to enrich your experience.",
        url: "/market",
        icon: Pizza,
    },
    {
        title: "Guide & Discovery Companion",
        description:
            "Engage with knowledgeable guides to uncover the hidden gems and stories of Goda Park, enhancing your understanding of its rich history and culture.",
        url: "/guide",
        icon: Contact2,
    },
    {
        title: "About & History",
        description:
            "Delve into the history, culture, and natural wonders of Goda Park, discovering the essence that makes this destination a unique and cherished haven.",
        url: "/about",
        icon: FileText,
    },
];
