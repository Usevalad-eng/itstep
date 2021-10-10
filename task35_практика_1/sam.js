import {Phone} from "./phone.js";

class Sam extends Phone{
    constructor(weight, model, number, name){
        super(weight, model, number, name);
    }

    getWeight(){
        console.log(`${this.weight}`);
    }

    getModel(){
        console.log(`${this.model}`);
    }

    getNumber(){
        console.log(`${this.number}`);
    }
}
export {Sam};