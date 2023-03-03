export class ClientCreateInputDTO{
    private name:string;
    constructor(name:string) { 
        this.name = name; 
    }
    
    public getName(){
        return this.name
    }
}
export class Client{

    private id:string;
    private name:string;
    constructor(name:string,id:string) { 
        this.name = name; 
        this.id=id;
    }
    
    public getName(){
        return this.name
    }
    public getId(){
        return this.id
    }
}
