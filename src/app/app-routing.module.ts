import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./components/login/login.component";
import { RegistrationComponent } from "./components/registration/registration.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { GetallbooksComponent } from "./components/getallbooks/getallbooks.component";
import { FlashviewComponent } from "./components/flashview/flashview.component";
import { CartComponent} from "./components/cart/cart.component";
import { WishlistComponent } from "./components/wishlist/wishlist.component";
import { OrderplacedComponent } from "./components/orderplaced/orderplaced.component";
import { AuthenticationGuard } from "./authentication.guard";
const routes: Routes = [
  { path: '', redirectTo: "/login", pathMatch: 'full'},
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  

  
  {path: 'dashboard', component: DashboardComponent,canActivate:[AuthenticationGuard],

    children: [

      { path: '', redirectTo: "/dashboard/getallbooks", pathMatch: 'full' },
      { path: 'getallbooks', component: GetallbooksComponent },
      { path: 'flashview/:bookId', component: FlashviewComponent},
      {path: 'cart', component: CartComponent},
      {path: 'wishlist', component: WishlistComponent},
  {path:'orderplaced' ,component:OrderplacedComponent}
    ]

  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
