import { LucideIcon } from "lucide-react";

type homeCard = {
    title: string;
    description: string;
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
