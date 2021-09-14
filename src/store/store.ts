import { makeObservable, observable, action, computed } from "mobx";
import { GenerallModel, ProductModel } from "@main/models";

class Store {
  data?: GenerallModel;
  basket: ProductModel[] = [];
  basket2: Map<number, number> = new Map();
  constructor() {
    makeObservable(this, {
      data: observable,
      basket: observable,
      basket2: observable,
      setData: action,
      addProduct: action,
      removeProduct: action,
      countBasket: computed,
      getTotalPrice: computed,
    });
  }
  setData(data: GenerallModel) {
    this.data = data;
  }

  addProduct(product: ProductModel) {
    if (this.basket2.has(product.id)) {
      let count: number = this.basket2.get(product.id)!;
      this.basket2.set(product.id, ++count);
    } else {
      this.basket2.set(product.id, 1);
    }
  }
  removeProduct(id: number) {
    if (this.basket2.has(id)) {
      let count: number = this.basket2.get(id)!;
      if (count > 1) {
        this.basket2.set(id, --count);
      } else {
        this.basket2.delete(id);
      }
    }
  }

  countProductInBasket(id: number) {
    if (this.basket2.has(id)) {
      return this.basket2.get(id);
    } else {
      return 0;
    }
  }

  get countBasket() {
    let total = 0;
    this.basket2.forEach((v, k) => {
      total += v;
    });
    return total;
  }

  get getTotalPrice() {
    let sum = 0;
    let products = this.data?.products;
    this.basket2.forEach((v, k) => {
      let product = products?.find((item) => item.id === k);
      sum += product!.price * v;
    });
    return sum;
  }
}

export const store = new Store();
