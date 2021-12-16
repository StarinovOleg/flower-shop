export interface ProductAdd {
  id?: number;
  name?: string;
  image?: string;
  price?: number;
  description?: string;
}
export class ProductAdd implements ProductAdd {
  constructor(
    public id?: number,
    public name?: string,
    public image?: string,
    public price?: number,
    public description?: string
  ) {}
}
