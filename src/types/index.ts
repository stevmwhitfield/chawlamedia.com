export interface NavLink {
  href: string;
  label: string;
}

export interface GalleryCard {
  img: string;
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
