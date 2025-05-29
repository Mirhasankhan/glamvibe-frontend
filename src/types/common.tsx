export interface TLoginValues {
    email: string;
    password: string;
    username: string;
    confirmPassword: string
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