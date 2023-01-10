import axios from "axios";

   //adiciona cliente 
export const addClient = (form,setUp,up,setVisibleButtonAddClient) => {
    const body = {
        name: form.client
    }
    axios.post("http://localhost:3003/client", body, {
    }).then((response) => {
        console.log({ up });
        console.log("usuario criado com sucesso!!!")
        setUp(!up)

    }).catch((error) => {
        console.log(error.message)
    })
    //desativa butão
    setVisibleButtonAddClient(false)
}

//confirm cliente 
export const confirmClient = (setVisibleButtonConfirmClient) => {
    setVisibleButtonConfirmClient(false);
}
