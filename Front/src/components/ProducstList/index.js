// import { useRequestData } from "../../hooks/useRequestData"

import Product from "../Product";
import { MyProductsList, MySum } from "./style";


const ProductdList = ({ products, setProducts }) => {

    const removeProduct = (id) => {
        const newProducts = products.filter((p) => {
            return (
                p.id !== id
            )
        })
        setProducts(newProducts)
    }
    let soma = 0;
    if (products.length>0) {
        products.forEach(element => {
            soma = soma + (element.price*element.qty);
        });
    }

    return (
        <MyProductsList>
            {products.length > 0 &&
                    <h2>Produtos selecionados!</h2>
            }
            {products && products.map((p, index) => {
                return (
                    <Product
                        product={p}
                        removeProduct={removeProduct}
                        products={products}
                        setProducts={setProducts}
                    />
                )
            })
            }
    {products.length > 0 &&
            <MySum>Total: R$ {soma.toFixed(2)}</MySum>
    }
        </MyProductsList>
    )
}

export default ProductdList;