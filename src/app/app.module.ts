import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { MatInputModule} from "@angular/material/input";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {MatToolbarModule  } from "@angular/material/toolbar";
import {MatButtonModule } from "@angular/material/button";
import { AppRoutingModule } from './app-routing.module';
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import {MatExpansionModule  } from "@angular/material/expansion";
import {  MatRadioModule} from "@angular/material/radio";
import { MatSelectModule} from "@angular/material/select";
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GetallbooksComponent } from './components/getallbooks/getallbooks.component';
import { FlashviewComponent } from './components/flashview/flashview.component';
import { CartComponent } from './components/cart/cart.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { OrderplacedComponent } from './components/orderplaced/orderplaced.component';
import { AuthguardServiceService } from "./services/authguard-service.service";

import { SearchbookPipe } from './searchbook.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    DashboardComponent,
    GetallbooksComponent,
    FlashviewComponent,
    CartComponent,
    WishlistComponent,
    OrderplacedComponent,
   
    SearchbookPipe
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatExpansionModule,
    MatRadioModule,
    MatSelectModule,
   
  ],
  providers: [AuthguardServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
