import { Pet } from "./pet";



export class Caretaker {
    caretakerId:string;
    caretakerName:string;
    address:string;
    contactNo:string;
    carePassword:string;
    salary:number;
    pets:Array<Pet>;

    constructor(){

    }
    /*constructor(caretakerId:string,caretakerName:string,address:string,contactNo:string,carePassword:string){
        
        this.caretakerId=caretakerId;
        this.caretakerName=caretakerName;
        this.address=address;
        this.contactNo=contactNo;
        this.carePassword=carePassword;

    }*/
}
