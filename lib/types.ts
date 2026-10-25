export type UserRole = "admin" | "vendor" | "customer";

export interface UserRecord {
  id: string;
  name: string;
  email: string;
  password_hash: string;
  role: UserRole;
  created_at: string;
}

export interface StorefrontRecord {
  id: string;
  owner_id: string;
  name: string;
  tagline: string;
  description: string;
  created_at: string;
}

export interface ProductRecord {
  id: string;
  seller_id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  stock: number;
  digital: number;
  image_emoji: string;
  created_at: string;
}

export interface FavoriteRecord {
  id: string;
  user_id: string;
  product_id: string;
  created_at: string;
}

export interface ReviewRecord {
  id: string;
  product_id: string;
  customer_id: string;
  rating: number;
  comment: string;
  created_at: string;
}

export interface OrderRecord {
  id: string;
  customer_id: string;
  seller_id: string;
  product_id: string;
  product_name: string;
  quantity: number;
  total_amount: number;
  status: string;
  payment_status: string;
  shipping_address: string;
  created_at: string;
}

export interface SessionUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}
