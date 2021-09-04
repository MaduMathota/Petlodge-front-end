import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthenticationGuard } from './authentication.guard';
import{NgxAgoraModule} from 'ngx-agora';
import{environment} from 'src/environments/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CaretakerloginComponent } from './Components/My Components/caretakerlogin/caretakerlogin.component';
import { CaretakersignupComponent } from './Components/My Components/caretakersignup/caretakersignup.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginsuccessComponent } from './Components/My Components/loginsuccess/loginsuccess.component';
import { AdmincaretakerpageComponent } from './Components/My Components/admincaretakerpage/admincaretakerpage.component';
import { PetlodgehomepageComponent } from './Components/Others/petlodgehomepage/petlodgehomepage.component';
import { AdminloginComponent } from './Components/Others/adminlogin/adminlogin.component';
import { AdminsignupComponent } from './Components/Others/adminsignup/adminsignup.component';
import { AdminpageComponent } from './Components/Others/adminpage/adminpage.component';
import { AdminpetpageComponent } from './Components/Others/adminpetpage/adminpetpage.component';
import { AdminveterinarianpageComponent } from './Components/My Components/adminveterinarianpage/adminveterinarianpage.component';
import { AdminpetownerpageComponent } from './Components/Others/adminpetownerpage/adminpetownerpage.component';
import { AdminpetregistrationComponent } from './Components/Others/adminpetregistration/adminpetregistration.component';
import { AdminstoragekennelComponent } from './Components/Others/adminstoragekennel/adminstoragekennel.component';
import { AdminstoragefoodComponent } from './Components/Others/adminstoragefood/adminstoragefood.component';
import { AdminstoragemedicineComponent } from './Components/Others/adminstoragemedicine/adminstoragemedicine.component';
import { AddfoodpageComponent } from './Components/Others/addfoodpage/addfoodpage.component';
import { AddkennelpageComponent } from './Components/Others/addkennelpage/addkennelpage.component';
import { AddmedicinepageComponent } from './Components/Others/addmedicinepage/addmedicinepage.component';
import { CaretakerloginsuccessComponent } from './Components/My Components/caretakerloginsuccess/caretakerloginsuccess.component';
import { AdminjobpageComponent } from './Components/My Components/adminjobpage/adminjobpage.component';
import { JobassignComponent } from './Components/My Components/jobassign/jobassign.component';
import { VetloginComponent } from './Components/My Components/vetlogin/vetlogin.component';
import { VetsignupComponent } from './Components/My Components/vetsignup/vetsignup.component';
import { VetpageComponent } from './Components/My Components/vetpage/vetpage.component';
import { VeterinarianwebpageComponent } from './Components/My Components/veterinarianwebpage/veterinarianwebpage.component';
import { ChannelvetComponent } from './Components/My Components/channelvet/channelvet.component';
import { ChanneldetailpageComponent } from './Components/Others/channeldetailpage/channeldetailpage.component';
import { AppointmentComponent } from './Components/Others/appointment/appointment.component';
import { HomepageComponent } from './Components/Others/homepage/homepage.component';
import { AppoinmentpetdetailsComponent } from './Components/My Components/appoinmentpetdetails/appoinmentpetdetails.component';
import { VideoconferenceComponent } from './Components/My Components/videoconference/videoconference.component';
import { CustomerpageComponent } from './Components/Others/customerpage/customerpage.component';
import { FooterComponent } from './Components/Others/webstore/shared/footer/footer.component';
import { HeaderComponent } from './Components/Others/webstore/shared/header/header.component';
import { NavComponent } from './Components/Others/webstore/shared/nav/nav.component';
import { CartComponent } from './Components/Others/webstore/shopping-cart/cart/cart.component';
import { FiltersComponent } from './Components/Others/webstore/shopping-cart/filters/filters.component';
import { ProductListComponent } from './Components/Others/webstore/shopping-cart/product-list/product-list.component';
import { CartItemComponent } from './Components/Others/webstore/shopping-cart/cart/cart-item/cart-item.component';
import { ProductItemComponent } from './Components/Others/webstore/shopping-cart/product-list/product-item/product-item.component';
import { ItemComponent } from './Components/Others/item/item.component';
import { SelleritemlistComponent } from './Components/Others/selleritemlist/selleritemlist.component';
import { UpdateitemComponent } from './Components/Others/updateitem/updateitem.component';
import { SellerloginComponent } from './Components/Others/sellerlogin/sellerlogin.component';
import { SellerregistraionComponent } from './Components/Others/sellerregistraion/sellerregistraion.component';
import { SelleritemwallComponent } from './Components/Others/selleritemwall/selleritemwall.component';
import { SellerloginsuccesComponent } from './Components/Others/sellerloginsucces/sellerloginsucces.component';
import { ShoppingCartComponent } from './Components/Others/webstore/shopping-cart/shopping-cart.component';
import { AdminsellerspageComponent } from './Components/Others/adminsellerspage/adminsellerspage.component';
import { AdminitemspageComponent } from './Components/Others/adminitemspage/adminitemspage.component';
import { AdminselleritemspageComponent } from './Components/Others/adminselleritemspage/adminselleritemspage.component';
import { ProductDetailComponent } from './Components/Others/webstore/shopping-cart/product-list/product-detail/product-detail.component';
import { SellerchatComponent } from './Components/Others/sellerchat/sellerchat.component';
import { AddtypeComponent } from './Components/Others/addtype/addtype.component';
import { AddbreedComponent } from './Components/Others/addbreed/addbreed.component';
import { PettypesComponent } from './Components/Others/pettypes/pettypes.component';
import { PetbreedsComponent } from './Components/Others/petbreeds/petbreeds.component';
import { BreeddetailsComponent } from './Components/Others/breeddetails/breeddetails.component';
import { AdminpettypesComponent } from './Components/Others/adminpettypes/adminpettypes.component';
import { AdminpetbreedsComponent } from './Components/Others/adminpetbreeds/adminpetbreeds.component';



@NgModule({
  declarations: [
    AppComponent,
    CaretakerloginComponent,
    CaretakersignupComponent,
    LoginsuccessComponent,
    AdmincaretakerpageComponent,
    PetlodgehomepageComponent,
    AdminloginComponent,
    AdminsignupComponent,
    AdminpageComponent,
    AdminpetpageComponent,
    AdminveterinarianpageComponent,
    AdminpetownerpageComponent,
    AdminpetregistrationComponent,
    AdminstoragekennelComponent,
    AdminstoragefoodComponent,
    AdminstoragemedicineComponent,
    AddfoodpageComponent,
    AddkennelpageComponent,
    AddmedicinepageComponent,
    CaretakerloginsuccessComponent,
    AdminjobpageComponent,
    JobassignComponent,
    VetloginComponent,
    VetsignupComponent,
    VetpageComponent,
    VeterinarianwebpageComponent,
    ChannelvetComponent,
    ChanneldetailpageComponent,
    AppointmentComponent,
    HomepageComponent,
    AppoinmentpetdetailsComponent,
    VideoconferenceComponent,
    CustomerpageComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent,
    CartComponent,
    FiltersComponent,
    ProductListComponent,
    CartItemComponent,
    ProductItemComponent,
    ItemComponent,
    SelleritemlistComponent,
    UpdateitemComponent,
    SellerloginComponent,
    SellerregistraionComponent,
    SelleritemwallComponent,
    SellerloginsuccesComponent,
    ShoppingCartComponent,
    AdminsellerspageComponent,
    AdminitemspageComponent,
    AdminselleritemspageComponent,
    ProductDetailComponent,
    SellerchatComponent,
    AddtypeComponent,
    AddbreedComponent,
    PettypesComponent,
    PetbreedsComponent,
    BreeddetailsComponent,
    AdminpettypesComponent,
    AdminpetbreedsComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxAgoraModule.forRoot({AppID: environment.agora.appId}),
    NgbModule
  ],
  providers: [AuthenticationGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
