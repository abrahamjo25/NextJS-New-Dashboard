
export type CustomUser = {
  id?: string;
  name?: string;
  email?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  idToken?:string;
  image?:string;
  roles?: {
    roleName?: string;
    claims?: string[]; 
  }[]; 
};

export type BreadCrumbs = {
  label:string,
  to : string,
  active? : boolean
}

