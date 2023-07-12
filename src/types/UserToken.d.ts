export interface UserToken {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    image: string;
    exp: number | Date;
    iat: number;
  }
  