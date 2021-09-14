import axios, { AxiosInstance } from "axios";
import { ProductApp } from "./product-app";


export class ShopApp {
  private readonly http: AxiosInstance;
  public readonly product: ProductApp;


  constructor() {
    this.http = axios.create({
      baseURL: "https://run.mocky.io/v3/a8d03157-a077-44db-9746-695e18a7549e ",     
    });

    this.product = new ProductApp(this.http);

  }
}
