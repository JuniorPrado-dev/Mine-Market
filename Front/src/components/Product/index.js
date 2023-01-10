// import { useRequestData } from "../../hooks/useRequestData"

import { MyProduct } from "./style";


const Product = ({ product, removeProduct, products, setProducts }) => {

    const updateQuantity = (e) => {
        const currentQty = e.target.value
        const newProducts = products.map((p) => {
            if (p.id === product.id) {
                p.qty = currentQty;
            }
            return p
        })
        setProducts(newProducts)
    }
 

    return (
        <MyProduct>
            <p>{product.name}</p>
            <input id='qty' type='number' min="0" onChange={updateQuantity} name='qty' value={product.qty} />
            <p>R$: {parseFloat(product.price * product.qty).toFixed(2)}</p>
            <button type="button" onClick={() => { removeProduct(product.id) }}>Remover</button>
        </MyProduct>
    )

}

export default Product