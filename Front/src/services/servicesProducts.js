//add produtos na lista de pedidos
export const addProduct = (selectedProduct,form2,products,setProducts,resetState2) => {
    let newProduct = selectedProduct
    console.log(newProduct);
    newProduct.qty = Number(form2.qty)
    console.log(newProduct);

    if (newProduct) {
        setProducts([...products, newProduct])
    }
    resetState2();
}