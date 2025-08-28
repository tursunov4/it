export interface GroupType {
  id: number;
  name: string;
  postion: string;
  image: string;
  age: number;
  created_at: string;
}

export interface BlogType {
  id: number;
  title: string;
  content: string;
  image: string;
  slug: string;
  created_at: string;
  published_at: string;
}
export interface AboutType {
  id: number;
  description: string;
  image: string;
  created_at: string;
}

export interface ServiceType {
  id: number;
  title: string;
  description: string;
  points: string[];
  image: string;
  price_services: {
    id: number;
    price: string;
    title: string;
    description: string;
  }[];
  what_in_services: {
    id: number;
    title: string;
    description: string;
  }[];
  price: string;
}

export interface ServicePriceType {
  id: number;
  title: string;
  description: string;
  price: string;
}
