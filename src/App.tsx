import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { store } from "@store";
import { ShopApp } from "@main/app";
import { Footer } from "@components/footer";
import { Header } from "@components/header";
import { Products } from "@components/products";

const app = new ShopApp();

const App = observer(() => {
  useEffect(() => {
    const getProducts = async () => {
      const result = await app.product.list();
      store.setData(result.data);
    };
    getProducts();
  }, []);
  return (
    <>
      <main>
        <div className="bg-light wrapper">
          <div className="container">
            <Header />
            <Products />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
});

export default App;
