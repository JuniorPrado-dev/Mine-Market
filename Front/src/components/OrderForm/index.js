import React, { useState } from 'react';
import { useForm } from '../../hooks/useForm';
import { useRequestData } from '../../hooks/useRequestData';
import * as ServicesClient from "../../services/servicesClients";
import * as ServicesProduct from "../../services/servicesProducts";
import * as ServicesOrder from "../../services/servicesOrder";
import { MyOrderForm } from './style';
import { useNavigate } from 'react-router-dom';
import * as C from '../../routers/Coordenator'

export default function OrderForm({ products, setProducts }) {
    //----------  DADOS E VARIAVEIS ------------------------
    console.log("oi", { products });
    //estado dos botões
    const [visibleButtonAddClient, setVisibleButtonAddClient] = useState(true)
    const [visibleButtonConfirmClient, setVisibleButtonConfirmClient] = useState(true)
    ///carregando DB
    const [dataClient, isLoadingClient, errorClient, setUp, up] = useRequestData("http://localhost:3003/clients")
    const [dataProducts, isLoadingProducts, errorProducts] = useRequestData("http://localhost:3003/products")
    // dados do formularios
    const [form, onChange, resetState] = useForm({ client: "", delivery_date: "" });
    const [form2, onChange2, resetState2] = useForm({ product: "", qty: 1 });
    //navigate
    const navigate=useNavigate()
    //----------  CLIENTES --------------------------------
    //testa se cliente está na base de dados
    const selectedClient = !isLoadingClient && dataClient && dataClient.filter((c) => {
        return c.name === form.client
    })[0]
    //----------  PRODUTOS --------------------------------
    //seleciona produtos
    const selectedProduct = !isLoadingProducts && dataProducts && dataProducts.filter((p) => {
        return p.name === form2.product
    })[0]
    //----------  PEDIDO --------------------------------
    return (
        <MyOrderForm>
            {selectedClient && !visibleButtonConfirmClient &&
                <div>
                    <h2>Cliente: {form.client}</h2>
                </div>
            }
            {selectedClient && !visibleButtonConfirmClient ||
                <div id='selec-client'>
                    <label for='client'>Nome do cliente</label>
                    <input id='client' list='data' onChange={onChange} value={form.client} name='client' />
                    <datalist id='data'>
                        {isLoadingClient && <option>Carregando...</option>}
                        {!isLoadingClient && dataClient && dataClient.map((op, index) => {
                            return (
                                <option key={index}>{op.name}</option>
                            )
                        })}
                    </datalist>
                    {visibleButtonConfirmClient && selectedClient &&
                        <button onClick={()=>{ServicesClient.confirmClient(setVisibleButtonConfirmClient)}} type="button">Confirmar</button>}

                    {visibleButtonAddClient && form.client.length >= 3 && !selectedClient &&
                        <button onClick={()=>{ServicesClient.addClient(form,setUp,up,setVisibleButtonAddClient)}} type="button">Cadastrar Cliente</button>}
                </div>
            }
            {selectedClient && !visibleButtonConfirmClient &&
                <div id='select-product'>
                    <label for="products">Product</label>
                    <input id='products' list='product' onChange={onChange2} name='product' value={form2.product} />
                    <datalist id='product'>
                        {isLoadingProducts && <option>Carregando...</option>}
                        {!isLoadingProducts && dataProducts && dataProducts.map((op, index) => {
                            return (
                                <option key={index}>{op.name}</option>
                            )
                        })}
                    </datalist>
                    <label for="qty">Quantidade</label>
                    <input id='qty' type='number' min="0" onChange={onChange2} name='qty' value={form2.qty} />
                    <p>R$: {selectedProduct && parseFloat(selectedProduct.price * form2.qty).toFixed(2)}</p>
                    {selectedProduct && selectedProduct.qty_stock >= form2.qty && <button type="button" onClick={()=>{ServicesProduct.addProduct(selectedProduct,form2,products,setProducts,resetState2)}}>OK</button>}
                    {selectedProduct && selectedProduct.qty_stock < form2.qty && <h3 style={{ color: "red" }}>Qantidade Indisponível!</h3>}
                </div>
            }
            {products.length > 0 &&
                <div id='end-order'>
                    <label for="delivery-date">Data de entrega (dd/mm/aaaa)</label>
                    <input id='delivery-date' name="delivery_date" value={form.delivery_date} onChange={onChange} pattern="(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[012])/(19|20)\d{2}" />
                    <button type="submit" onClick={(e)=>{ServicesOrder.addOrder(e,form,products,selectedClient,navigate)}} >Finalizar Pedido</button>
                </div>
            }
        </MyOrderForm>
    );
}