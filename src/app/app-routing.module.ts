import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddfoodpageComponent } from './Components/Others/addfoodpage/addfoodpage.component';
import { AddkennelpageComponent } from './Components/Others/addkennelpage/addkennelpage.component';
import { AddmedicinepageComponent } from './Components/Others/addmedicinepage/addmedicinepage.component';
import { AdmincaretakerpageComponent } from './Components/My Components/admincaretakerpage/admincaretakerpage.component';
import { AdminjobpageComponent } from './Components/My Components/adminjobpage/adminjobpage.component';
import { AdminloginComponent } from './Components/Others/adminlogin/adminlogin.component';
import { AdminpageComponent } from './Components/Others/adminpage/adminpage.component';
import { AdminpetownerpageComponent } from './Components/Others/adminpetownerpage/adminpetownerpage.component';
import { AdminpetpageComponent } from './Components/Others/adminpetpage/adminpetpage.component';
import { AdminpetregistrationComponent } from './Components/Others/adminpetregistration/adminpetregistration.component';
import { AdminsignupComponent } from './Components/Others/adminsignup/adminsignup.component';
import { AdminstoragefoodComponent } from './Components/Others/adminstoragefood/adminstoragefood.component';
import { AdminstoragekennelComponent } from './Components/Others/adminstoragekennel/adminstoragekennel.component';
import { AdminstoragemedicineComponent } from './Components/Others/adminstoragemedicine/adminstoragemedicine.component';
import { AdminveterinarianpageComponent } from './Components/My Components/adminveterinarianpage/adminveterinarianpage.component';
import { AppoinmentpetdetailsComponent } from './Components/My Components/appoinmentpetdetails/appoinmentpetdetails.component';
import { Appointment } from './models/appointment';
import { AuthenticationGuard } from './authentication.guard';
import { CaretakerloginComponent } from './Components/My Components/caretakerlogin/caretakerlogin.component';
import { CaretakerloginsuccessComponent } from './Components/My Components/caretakerloginsuccess/caretakerloginsuccess.component';
import { CaretakersignupComponent } from './Components/My Components/caretakersignup/caretakersignup.component';
import { ChanneldetailpageComponent } from './Components/Others/channeldetailpage/channeldetailpage.component';
import { ChannelvetComponent } from './Components/My Components/channelvet/channelvet.component';
import { HomepageComponent } from './Components/Others/homepage/homepage.component';
import { JobassignComponent } from './Components/My Components/jobassign/jobassign.component';
import { LoginsuccessComponent } from './Components/My Components/loginsuccess/loginsuccess.component';
import { PetlodgehomepageComponent } from './Components/Others/petlodgehomepage/petlodgehomepage.component';
import { VeterinarianwebpageComponent } from './Components/My Components/veterinarianwebpage/veterinarianwebpage.component';
import { VetloginComponent } from './Components/My Components/vetlogin/vetlogin.component';
import { VetpageComponent } from './Components/My Components/vetpage/vetpage.component';
import { VetsignupComponent } from './Components/My Components/vetsignup/vetsignup.component';
import { VideoconferenceComponent } from './Components/My Components/videoconference/videoconference.component';
import { CustomerpageComponent } from './Components/Others/customerpage/customerpage.component';
import { SellerregistraionComponent } from './Components/Others/sellerregistraion/sellerregistraion.component';
import { SellerloginComponent } from './Components/Others/sellerlogin/sellerlogin.component';
import { SellerloginsuccesComponent } from './Components/Others/sellerloginsucces/sellerloginsucces.component';
import { SelleritemwallComponent } from './Components/Others/selleritemwall/selleritemwall.component';
import { ShoppingCartComponent } from './Components/Others/webstore/shopping-cart/shopping-cart.component';
import { SelleritemlistComponent } from './Components/Others/selleritemlist/selleritemlist.component';
import { ItemComponent } from './Components/Others/item/item.component';
import { UpdateitemComponent } from './Components/Others/updateitem/updateitem.component';
import { AdminsellerspageComponent } from './Components/Others/adminsellerspage/adminsellerspage.component';
import { AdminitemspageComponent } from './Components/Others/adminitemspage/adminitemspage.component';
import { AdminselleritemspageComponent } from './Components/Others/adminselleritemspage/adminselleritemspage.component';
import { ProductItemComponent } from './Components/Others/webstore/shopping-cart/product-list/product-item/product-item.component';
import { ProductDetailComponent } from './Components/Others/webstore/shopping-cart/product-list/product-detail/product-detail.component';
import { CartComponent } from './Components/Others/webstore/shopping-cart/cart/cart.component';
import { SellerchatComponent } from './Components/Others/sellerchat/sellerchat.component';
import { PetbreedsComponent } from './Components/Others/petbreeds/petbreeds.component';
import { PettypesComponent } from './Components/Others/pettypes/pettypes.component';
import { BreeddetailsComponent } from './Components/Others/breeddetails/breeddetails.component';
import { AddtypeComponent } from './Components/Others/addtype/addtype.component';
import { AddbreedComponent } from './Components/Others/addbreed/addbreed.component';
import { AdminpettypesComponent } from './Components/Others/adminpettypes/adminpettypes.component';
import { AdminpetbreedsComponent } from './Components/Others/adminpetbreeds/adminpetbreeds.component';



const routes: Routes = [
  { path: '', component: PetlodgehomepageComponent },
  { path: 'caretakerlogin', component: CaretakerloginComponent },
  { path: 'loginsuccess/:id', component: LoginsuccessComponent, canActivate: [AuthenticationGuard] },
  { path: 'caretakersignup', component: CaretakersignupComponent },
  { path: 'admincaretakerpage', component: AdmincaretakerpageComponent, canActivate: [AuthenticationGuard] },
  { path: 'adminlogin', component: AdminloginComponent },
 // { path: 'adminsignup', component: (()=>{return !!localStorage.getItem('adloged')? AdminsignupComponent:AdminloginComponent;})()},
  { path: 'adminpage', component: AdminpageComponent, canActivate: [AuthenticationGuard] },
  { path: 'adminsignup', component: AdminsignupComponent},
  { path: 'adminpetpage', component: AdminpetpageComponent, canActivate: [AuthenticationGuard] },
  { path: 'adminaddtype', component: AddtypeComponent, canActivate: [AuthenticationGuard] },
  { path: 'adminaddbreed', component: AddbreedComponent, canActivate: [AuthenticationGuard] },
  { path: 'adminpettypes', component: AdminpettypesComponent, canActivate: [AuthenticationGuard] },
  { path: 'adminpetbreeds/:id', component: AdminpetbreedsComponent, canActivate: [AuthenticationGuard] },
  { path: 'adminpetownerpage', component: AdminpetownerpageComponent, canActivate: [AuthenticationGuard] },
  { path: 'adminpetregisterpage', component: AdminpetregistrationComponent, canActivate: [AuthenticationGuard] },
  { path: 'adminstoragekennel', component: AdminstoragekennelComponent, canActivate: [AuthenticationGuard] },
  { path: 'adminstoragemedicine', component: AdminstoragemedicineComponent, canActivate: [AuthenticationGuard] },
  { path: 'adminstoragefood', component: AdminstoragefoodComponent, canActivate: [AuthenticationGuard] },
  { path: 'addfoodpage', component: AddfoodpageComponent, canActivate: [AuthenticationGuard] },
  { path: 'addmedicinepage', component: AddmedicinepageComponent, canActivate: [AuthenticationGuard] },
  { path: 'addkennelpage', component: AddkennelpageComponent, canActivate: [AuthenticationGuard] },
  { path: 'adminjobpage', component: AdminjobpageComponent, canActivate: [AuthenticationGuard] },
  { path: 'adminsellerpage', component: AdminsellerspageComponent, canActivate: [AuthenticationGuard] },
  { path: 'adminitempage', component: AdminitemspageComponent, canActivate: [AuthenticationGuard] },
  { path: 'adminselleritempage/:id', component: AdminselleritemspageComponent, canActivate: [AuthenticationGuard] },
  { path: 'caretakerloginsuccess/:id', component: CaretakerloginsuccessComponent, canActivate: [AuthenticationGuard] },
  { path: 'vetlogin', component: VetloginComponent },
  { path: 'vetpage/:id', component: VetpageComponent, canActivate: [AuthenticationGuard] },
  { path: 'vetsignup', component: VetsignupComponent },
  { path: 'veterinarianwebpage/:id', component: VeterinarianwebpageComponent },
  { path: 'channelveterinarian', component: ChannelvetComponent },
  { path: 'channelingdetailspage/:id', component: ChanneldetailpageComponent },
  { path: 'appointment/:id', component: Appointment },
  { path: 'adminveterinarianpage', component: AdminveterinarianpageComponent, canActivate: [AuthenticationGuard] },
  { path: 'appointmentpetdetails/:id', component: AppoinmentpetdetailsComponent,canActivate: [AuthenticationGuard] },
  { path: 'videocalling/:id', component: VideoconferenceComponent },
  { path: 'petlodge', component: HomepageComponent },
  { path: 'petlodgehome', component: CustomerpageComponent },
  { path: 'jobassign', component: JobassignComponent, canActivate: [AuthenticationGuard] },
  { path: 'additem/:id', component: ItemComponent},
  { path: 'sellerlogin', component: SellerloginComponent },
  { path: 'sellerregistration', component: SellerregistraionComponent },
  { path: 'sellerloginsucces/:id', component: SellerloginsuccesComponent},
  { path: 'selleriteamwall/:id', component: SelleritemwallComponent},
  { path: 'selleritemlist/:id', component: SelleritemlistComponent},
  { path: 'sellerchat', component: SellerchatComponent },
  { path: 'pettypes', component: PettypesComponent },
  { path: 'petbreeds/:id', component: PetbreedsComponent },
  { path: 'petbreedsdetails/:id', component: BreeddetailsComponent },
  { path: 'updateitem/:id', component: UpdateitemComponent},
  { path: 'itemcategory/:id', component: ProductItemComponent},
  { path: 'itemdetails/:id', component: ProductDetailComponent},
  { path: 'taskplan', component: CartComponent},
  { path: 'shop', redirectTo: '/shop', pathMatch: 'full' },
  { path: 'shop', component: ShoppingCartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
