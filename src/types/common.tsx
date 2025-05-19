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
    imageUrls: string[]
  }