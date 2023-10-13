import { Image } from 'sanity';

export interface NavLink {
  href: string;
  label: string;
}

export interface GalleryCard {
  img: string;
  href: string;
  title: string;
  description: string;
}

export interface PricingCard {
  title: string;
  price: string;
  description: string;
}

export interface Price {
  _id: string;
  title: string;
  price: string;
  description: string;
}

export interface Photo extends Image {
  aspectRatio: number;
}

export interface Photoshoot {
  _id: string;
  slug: string;
  title: string;
  type: string;
  photos: Photo[];
}
