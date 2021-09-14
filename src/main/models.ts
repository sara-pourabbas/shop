
export interface GenerallModel {
  id: number;
  image: string;
  name: string;
  address: string;
  rate_average: number;
  rate_count: number;
  products:ProductModel[];
}

export interface ProductModel {
  id: number;
  image: string;
  name: string;
  price: number;
}

