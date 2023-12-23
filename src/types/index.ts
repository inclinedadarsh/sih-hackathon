import { LucideIcon } from "lucide-react";
import { StaticImageData } from "next/image";

type homeCard = {
    title: string;
    image: StaticImageData;
    url: string;
    icon: LucideIcon;
};

export type homeCards = homeCard[];

export type marketItem = {
    title: string;
    price: number;
    tag: "Food" | "Souvenir" | "Medicine";
    id: string;
    quantity: number;
};

export type marketItems = marketItem[];

export type guide = {
    name: string;
    id: string;
    phone: number;
    speciality: "Adventure" | "History" | "Nature" | "Religious";
    image: StaticImageData;
    experience: number;
    rating: number;
    numOfTours: number;
    language: "English" | "Hindi" | "Marathi";
};

export type guides = guide[];

export type vrPlace = {
    name: string;
    city: string;
    type: "Religious" | "Picnic" | "Historical";
};

export type vrPlaces = vrPlace[];
