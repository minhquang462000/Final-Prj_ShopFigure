
export interface ILayout {
    children: React.ReactNode;
  }
export interface IUser {
  user_id: number;
    name: string;
    email: string;
    password: string;
    numberphone: string;
    status: number;
    role: number;
    gender: number;
    address: string;
    avatar: string;
    created_at: string;
    updated_at: string;
    refreshToken: string;
  }