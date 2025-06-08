import { IconType } from "react-icons";

export const userRoles = {
USER: "user"

}
export type TRoles = keyof typeof userRoles;

export interface TLoginValues {
    email: string;
    password: string;
    username: string;
    confirmPassword: string
  }
  export interface SidbarItem {
  title: string;
  path: string;
  parentPath?: string;
  child?: SidbarItem[];
  icon?: IconType;
}
export interface TService {
    id: string;
    serviceName: string;
    description: string;
    price: number
    imageUrls: string[]
  }
export interface TCategory {
    id: string;
    overview: string;
    description: string;
    mediaUrls: string[]
  }
export interface TExprt {
    id: string;
    name: string;
    imageUrl: string;
    category: {categoryName:string}
  }