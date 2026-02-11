import { JSX } from "react";

export interface BadgeInterface {
    text: string;
    filled?: boolean;
}
export interface ButtonInterface {
    text: string;
    filled?: boolean;
    type: string;
    onclick: () => void;
}

export interface CardInterface {
    badge?: BadgeInterface;
    id: number;
    name: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
    }
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    }
    btn: ButtonInterface;

}

export interface UserPageInterface {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string; 
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        }
    }
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    }
    posts: {
        id: number;
        title: string;
        body: string;
    }[]
}
