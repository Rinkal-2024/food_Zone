export class User{
    subscribe(arg0: (user: any) => void) {
      throw new Error('Method not implemented.');
    }
    id!:string;
    email!:string;
    name!:string;
    address!:string;
    token!:string;
    isAdmin!:boolean;
    profilePictureUrl!: string;
  }