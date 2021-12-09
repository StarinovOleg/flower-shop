export interface Customer {
  id?: number;
  name?: string;
  adress?: string;
  phone?: string;
  cart?: string;
}
export class Customer implements Customer {
  constructor(
    public id?: number,
    public name?: string,
    public adress?: string,
    public phone?: string,
    public cart?: string
  ) {}
}
