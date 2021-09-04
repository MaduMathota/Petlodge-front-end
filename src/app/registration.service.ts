import { Injectable, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Caretaker } from './models/caretaker';
import { HttpClient } from '@angular/common/http';
import { Admin } from './models/admin';
import { Pet } from './models/pet';
import { Veterinarian } from './models/veterinarian';
import { Petowner } from './models/petowner';
import { Medicine } from './models/medicine';
import { Food } from './models/food';
import { Kennel } from './models/kennel';
import { Job } from './models/job';
import { Appointment } from './models/appointment';
import { AppointmentPet } from './models/appointment-pet';
import { Item } from './models/item';
import { Seller } from './models/seller';
import { Pettype } from './models/pettype';
import { Petbreed } from './models/petbreed';


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  caretaker:Caretaker;
  constructor(private http:HttpClient) { }

  public loginActivated() {
    return !!localStorage.getItem('isloged')
   }

  /////////////////caretaker///////////////////////////////////////////////////////////////////

  public caretakerFromBackEnd(caretaker:Caretaker):Observable<any>{
    return this.http.post <any>("http://localhost:8080/caretakerlogin",caretaker)
  }

  public caretakerSendtoBackEnd(caretaker:Caretaker):Observable<any>{
    return this.http.post <any>("http://localhost:8080/addcaretaker",caretaker)
  }

  public getcaretakers(){
    return this.http.get<any>("http://localhost:8080/getcaretaker")
  }

  public getcaretakerdto(){
    return this.http.get<any>("http://localhost:8080/getcaretakerdtolist")
  }

  public updatecaretaker(caretaker:Caretaker):Observable<any>{
   return this.http.put<any>("http://localhost:8080/updatecaretaker",caretaker)
  }

  public updatecaretakerpsw(caretaker:Caretaker):Observable<any>{
    return this.http.put<any>("http://localhost:8080/updatecaretakerpsw",caretaker)
   }
  
  public deletecaretaker(caretakerid:String):Observable<any>{
    return this.http.delete<any>("http://localhost:8080/deletecaretaker/"+caretakerid)
   }

   

   //////////////admin//////////////////////////////////////////////////////////////////////////

   public adminLogin(admin:Admin):Observable<any>{
    return this.http.post <any>("http://localhost:8080/adminlogin",admin)
  }
  
  public adminCreate(admin:Admin):Observable<any>{
    return this.http.post <any>("http://localhost:8080/addadmin",admin)
  }

  public getadmins(){
    return this.http.get<any>("http://localhost:8080/getadmin")
  }

  public updateadmin(admin:Admin):Observable<any>{
   return this.http.put<any>("http://localhost:8080/updateadmin",admin)
  }

  public deleteadmin(adminid:String):Observable<any>{
    return this.http.delete<any>("http://localhost:8080/deleteadmin/"+adminid)
   }

//////////////pet//////////////////////////////////////////////////////////////////////////

public petCreate(pet:Pet):Observable<any>{
  return this.http.post <any>("http://localhost:8080/addpet",pet)
}

public getpet(){
  return this.http.get<any>("http://localhost:8080/getpet")
}

public getpetbycaretakerid(caretakerId:String):Observable<any>{
  return this.http.get<any>("http://localhost:8080/getpet/"+caretakerId)
 }

 public getpetById(petid:String){
   return this.http.get<any>("http://localhost:8080/getpet/"+petid)
 }

public updatepet(pet:Pet):Observable<any>{
 return this.http.put<any>("http://localhost:8080/updatepet",pet)
}

public deletepet(petid:String):Observable<any>{
  return this.http.delete<any>("http://localhost:8080/deletepet/"+petid)
 }

 
//////////////petownwer//////////////////////////////////////////////////////////////////////////
public petownerCreate(petowner:Petowner):Observable<any>{

return this.http.post<any>("http://localhost:8080/addpetowner/",petowner)

}

public petownerLogin(petowner:Petowner):Observable<any>{
  return this.http.post<any>("http://localhost:8080/petownerlogin/",petowner)
}

public getPetowner(){
  return this.http.get<any>("http://localhost:8080/getpetowner/")
}

public deletePetowner(petownerid:String):Observable<any>{
  return this.http.delete<any>("http://localhost:8080/deletepetowner/"+petownerid)
}

public updatePetowner(petowner:Petowner):Observable<any>{
  return this.http.put<any>("http://localhost:8080/updatepetowner/",petowner)
}

//////////////veterinarian///////////////////////////////////////////////////////////////////////
public createVet(vet:Veterinarian):Observable<any>{
  return this.http.post<any>("http://localhost:8080/addveterinarian/",vet)

}

public loginVet(vet:Veterinarian):Observable<any>{
  return this.http.post<any>("http://localhost:8080/veterinarianlogin/",vet)
}

public getVets(){
  return this.http.get<any>("http://localhost:8080/getveterinarian/")
}

public getVet(vetid:string){
  return this.http.get<any>("http://localhost:8080/getveterinarian/"+vetid)
}

public deleteVet(vetid:String):Observable<any>{
  return this.http.delete<any>("http://localhost:8080/deletevaterinarian/"+vetid)
}

public updateVet(vet:Veterinarian):Observable<any>{
  return this.http.put<any>("http://localhost:8080/updateveterinarian/",vet)
}

public updateVetpsw(vet:Veterinarian):Observable<any>{
  return this.http.put<any>("http://localhost:8080/updateveterinarianpsw/",vet)
}

//////////////Medicine//////////////////////////////////////////////////////////////////////////
public createMedicine(medicine:Medicine):Observable<any>{
  return this.http.post<any>("http://localhost:8080/addmedicine/",medicine)

}

public getMedicine(){
  return this.http.get<any>("http://localhost:8080/getmedicine/")
}

public deleteMedicine(medid:String):Observable<any>{
  return this.http.delete<any>("http://localhost:8080/deletemedicine/"+medid)
}

public updateMedicine(medicine:Medicine):Observable<any>{
  return this.http.put<any>("http://localhost:8080/updatemedicine/",medicine)
}

public reportpdfMedicine(){
  return this.http.get<any>("http://localhost:8080/MedicineReport/pdf")
}

public reporthtmlMedicine(){
  return this.http.get<any>("http://localhost:8080/MedicineReport/html")
}



//////////////Food//////////////////////////////////////////////////////////////////////////
public createFood(food:Food):Observable<any>{
  return this.http.post<any>("http://localhost:8080/addfood/",food)

}

public getFood(){
  return this.http.get<any>("http://localhost:8080/getfood/")
}

public deleteFood(foodid:String):Observable<any>{
  return this.http.delete<any>("http://localhost:8080/deletefood/"+foodid)
}

public updateFood(food:Food):Observable<any>{
  return this.http.put<any>("http://localhost:8080/updatefood/",food)
}

public reportpdfFood(){
  return this.http.get<any>("http://localhost:8080/Foodreport/pdf")
}

public reporthtmlFood(){
  return this.http.get<any>("http://localhost:8080/Foodreport/html")
}


//////////////Kennel//////////////////////////////////////////////////////////////////////////
public createKennel(kennel:Kennel):Observable<any>{
  return this.http.post<any>("http://localhost:8080/addkennel/",kennel)

}

public getKennel(){
  return this.http.get<any>("http://localhost:8080/getkennel/")
}

public deleteKennel(kennelid:String):Observable<any>{
  return this.http.delete<any>("http://localhost:8080/deletekennel/"+kennelid)
}

public updateKennel(kennel:Kennel):Observable<any>{
  return this.http.put<any>("http://localhost:8080/updatekennel/",kennel)
}

/////////Job/////////////////////////////////////////////////////////////////////////////////
public createJob(job:Job):Observable<any>{
return this.http.post<any>("http://localhost:8080/addjob",job)

}

public getJob(){
  return this.http.get<any>("http://localhost:8080/getjob/")
}

public getjobByCaretakerId(str:String):Observable<any>{
  return this.http.get<any>("http://localhost:8080/getjobbycaretakerid/"+str)
}

public deleteJob(jobid:Number):Observable<any>{
  return this.http.delete<any>("http://localhost:8080/deletejob/"+jobid)
}

public updateJob(job:Job):Observable<any>{
  return this.http.put<any>("http://localhost:8080/updatejob/",job)
}

////////////Appointment/////////////////////////////////////////

public createAppointment(appoint:Appointment):Observable<Appointment>{
  return this.http.post<Appointment>("http://localhost:8080/addappointment/",appoint)
}

public getAppointment(){
  return this.http.get<any>("http://localhost:8080/getappointment/")
}

public getAppointmentByVetId(vetid:String){
  return this.http.get<Array <Appointment>>("http://localhost:8080/getappointmentbyvetid/"+vetid)
}

public deleteAppointment(id:String):Observable<any>{
  return this.http.delete<any>("http://localhost:8080/deleteappointment/"+id)
}

public deleteAppointmentByVetid(id:String):Observable<any>{
  return this.http.delete<any>("http://localhost:8080/deleteappointmentbyvetid/"+id)
}

////////////AppointmentPet//////////////////////////////////////////////
public createAppointmentPet(appointpet:AppointmentPet):Observable<AppointmentPet>{
  return this.http.post<AppointmentPet>("http://localhost:8080/addappointmentpet/",appointpet)
}

public getAppointmentPet(){
  return this.http.get<any>("http://localhost:8080/getappointmentpet/")
}

public getAppointmentPetById(id:String){
  return this.http.get<any>("http://localhost:8080/getappointmentpet/"+id)
}

public deleteAppointmentPet(petid:String):Observable<any>{
  return this.http.delete<any>("http://localhost:8080/deleteappointmentpet/"+petid)
}

///////////////Item///////////////////////////////////////////////////

addItem(item: Item):Observable<Item> {
  return this.http.post<Item>('http://localhost:8080/additem',item);   
}

additemfromimage(image:FormData){
  return this.http.post('http://localhost:8080/uploadimage',image); 
}

getItems(){
  return this.http.get<any>('http://localhost:8080/getitem');   
}

getItemByItemCategory(category:String){
  return this.http.get<any>('http://localhost:8080/getitembyctgry/'+category);   
}

getItemBySellerId(sellerid:String){
  return this.http.get<any>('http://localhost:8080/getitembyseller/'+sellerid);   
}

getItemByImage(imagename:String){
  return this.http.get<any>('http://localhost:8080/getitemfromimage/'+imagename);   
}

getItemById(itemid:string){
  return this.http.get<any>('http://localhost:8080/getitem/'+itemid);   
}

deleteItem(id:Number) {
  return this.http.delete<Item>('http://localhost:8080/deleteitem/' + id);
}

updateItem(updatedItem: Item):Observable<Item> {
  return this.http.put<Item>('http://localhost:8080/updateitem', updatedItem);
}

//////////////seller//////////////////////////////////////////
public sellerLoginFromRemote(seller:Seller):Observable<any>{

  return this.http.post<any>("http://localhost:8080/sellerlogin",seller);
}

public sellerRegisterFromRemote(seller:Seller):Observable<any>{

  return this.http.post<any>("http://localhost:8080/addseller",seller);
}

public getSellers(){
  return this.http.get<any>('http://localhost:8080/sellers');   
}

public sellerDetailsDesplayFromRemote(seller:string):Observable<any>{

  return this.http.get<any>("http://localhost:8080/sellerById/"+seller);
}


public sellerUpdateFromRemote(seller:Seller):Observable<any>{

  return this.http.put<any>("http://localhost:8080/updateseller",seller);
}

public sellerPWDUpdateFromRemote(seller:Seller):Observable<any>{

  return this.http.put<any>("http://localhost:8080/updatesellerpsw",seller);
}

deleteSeller(id:string) {
  return this.http.delete<Seller>('http://localhost:8080/deleteseller/' + id);
}

//////////////type//////////////////////////////////////////

public createType(pettype:Pettype):Observable<any>{
  return this.http.post<any>("http://localhost:8080/addtype",pettype)
  
  }
  
  public getType(){
    return this.http.get<any>("http://localhost:8080/gettype/")
  }
  
  public getTypeById(str:String):Observable<any>{
    return this.http.get<any>("http://localhost:8080/getpettype/"+str)
  }
  
  public deleteType(typeid:String):Observable<any>{
    return this.http.delete<any>("http://localhost:8080/deletetype/"+typeid)
  }
  
  
  //////////////breed//////////////////////////////////////////

  public createBreed(petbreed:Petbreed):Observable<any>{
    return this.http.post<any>("http://localhost:8080/addbreed",petbreed)
    
    }
    
    public getBreed(){
      return this.http.get<any>("http://localhost:8080/getbreed/")
    }
    
    public getBreedById(str:String):Observable<any>{
      return this.http.get<any>("http://localhost:8080/getpetbreedbyid/"+str)
    }

    public getBreedByPetType(type:String):Observable<any>{
      return this.http.get<any>("http://localhost:8080/getpetbreed/"+type)
    }
    
    public deleteBreed(breedid:String):Observable<any>{
      return this.http.delete<any>("http://localhost:8080/deletepetbreed/"+breedid)
    }

}