//  import { useForm } from "../../hooks/useForm";
import React, { useState } from "react";
import Header from "../../components/Header";
import OrderForm from "../../components/OrderForm";
import ProductdList from "../../components/ProducstList";
import { MyBody } from "./style";

const Home = () => {
    const [products, setProducts] = useState([])
    return (
        <>
            <Header />
            <MyBody>
                <ProductdList
                    products={products}
                    setProducts={setProducts}
                />
                <OrderForm
                    products={products}
                    setProducts={setProducts}
                />
            </MyBody>

        </>
    )

}

export default Home;









