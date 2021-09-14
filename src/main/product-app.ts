import { AxiosInstance } from "axios";
import {GenerallModel} from "./models";

export class ProductApp {
  constructor(private readonly http: AxiosInstance) {}

async list(){
    const response = await this.http.get('');
    return{
        data:response.data as GenerallModel,        
    }
}









}
