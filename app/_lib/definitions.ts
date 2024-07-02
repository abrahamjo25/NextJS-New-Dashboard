
export type User = {
  id: string;
  name: string;
  userId: string;
  password: string;
};

export type Revenue = {
  month: string;
  revenue: number;
};

export type BreadCrumbs = {
  label:string,
  to : string,
  active? : boolean
}

