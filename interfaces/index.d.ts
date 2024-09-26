export interface ILayout {
  children: React.ReactNode;
}
export interface IFilter {
  search: string;
  page: number;
  limit: number;
  wordFilter: string;
  price: string;
  status: number;
}
export interface ICart {
  cart_id: number;
  items: [{  quantity: number; product: IProduct }];
}
export interface IUser {
  user_id: number;
  name: string;
  email: string;
  password: string;
  phone: string;
  status: number;
  role: number;
  gender: number;
  address: string;
  avatar: string;
  created_at: string;
  updated_at: string;
  refreshToken: string;
}

export interface IProduct {
  product_id: number;
  name: string;
  price: number;
  description: string;
  categories: any[];
  series: string;
  character: {
    name: string;
    character_id: number;
  };
  code: string;
  brand: string;
  quantity: number;
  status: number;
  Count: number;
  discount: number;
  images: string[];
  created_at: string;
  updated_at: string;
  characteristics: string;
  liked: boolean;
}
export interface ICategory {
  category_id: number;
  name: string;
  status: number;
  created_at: string;
  updated_at: string;
}
export interface ICharacter {
  character_id: number;
  name: string;
  thumbnail: string;
  status: number;
  created_at: string;
  updated_at: string;
}
