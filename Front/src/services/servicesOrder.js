import axios from "axios"
import * as C from "../routers/Coordenator"

//Finalizar o pedido 
export const addOrder = (e,form,products,selectedClient,navigate) => {
    console.log("Entou aqui!!!!");
    e.preventDefault()
    //formatando a data para o banco de dados
    if(!products || !form.delivery_date || !selectedClient){
        alert("dados inconpletos!")
    }else{
    const deliveryDateDb = `${form.delivery_date.split("/")[2]}-${form.delivery_date.split("/")[1]}-${form.delivery_date.split("/")[0]}`
    //formatando produtos para banco de dados
    const productDb = products.map((p) => {
        return { "id": p.id, "qty": Number(p.qty) }
    })
    // console.log(dataClient);
    console.log(deliveryDateDb);
    const body = {
        "fk_client": selectedClient.id,
        "delivery_date": deliveryDateDb,
        "products": productDb
    }
    console.log({body})
        axios.post("http://localhost:3003/order", body, {
        }).then((response) => {
        console.log("foi");
        console.log(response)
        C.goToEndOrder(navigate);
    }).catch((error) => {
        console.log("não foi");
        console.log(error)
    })
    }
}
