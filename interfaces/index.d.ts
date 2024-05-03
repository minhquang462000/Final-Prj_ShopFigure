export interface ILayout {
  children: React.ReactNode;
}
export interface IFilter {
  search: string;
  page: number;
  limit: number;
  category: string;
  character: string;
  brand: string;
  series: string;
  price: string;
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
  category: string;
  quantity: number;
  status: number;
  Count: number;
  disCount: number;
  image: string[];
  created_at: string;
  updated_at: string;
}
export interface ICategory {
  category_id: number;
  thumbnail: string;
  name: string;
  description: string;
  status: number;
  created_at: string;
  updated_at: string;
}
export interface ICharacter {
  character_id: number;
  name: string;
  thumbnail: string;
  description: string;
  status: number;
  created_at: string;
  updated_at: string;
}
export interface IBrand {
  brand_id: number;
  name: string;
  thumbnail: string;
  description: string;
  status: number;
  created_at: string;
  updated_at: string;
}
export interface ISeries {
  series_id: number;
  name: string;
  thumbnail: string;
  description: string;
  status: number;
  created_at: string;
  updated_at: string;
}
