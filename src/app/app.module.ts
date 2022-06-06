import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProductsComponent } from './products/products.component';
import { SettingsComponent } from './settings/settings.component';
import { SuccessComponent } from './success/success.component';
import { OrderComponent } from './order/order.component';
import { CartComponent } from './cart/cart.component';
import { LogOutComponent } from './log-out/log-out.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ErrorComponent } from './error/error.component';
import { TransactionComponent } from './transaction/transaction.component';
import { Router, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { FooterComponent } from './footer/footer.component'
import { SharedService } from './Services/shared.service';
import { HttpClientModule } from '@angular/common/http';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { ShowProductsComponent } from './admin-products/show-products/show-products.component';
import { AddEditProductsComponent } from './admin-products/add-products/add-edit-products.component';
import { EditProductsComponent } from './admin-products/edit-products/edit-products.component';
import { AdminLandingPageComponent } from './admin-landing-page/admin-landing-page.component';
import { UserLandingPageComponent } from './user-landing-page/user-landing-page.component';
import { AdminNavbarComponent } from './admin-landing-page/admin-navbar/admin-navbar.component';
import { UserNavbarComponent } from './user-landing-page/user-navbar/user-navbar.component';
import { TeamComponent } from './team/team.component';
import { AllfeedbacksComponent } from './allfeedbacks/allfeedbacks.component';
import { TermsComponent } from './terms/terms.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    ProductsComponent,
    SettingsComponent,
    SuccessComponent,
    OrderComponent,
    CartComponent,
    LogOutComponent,
    FeedbackComponent,
    ErrorComponent,
    TransactionComponent,
    NavbarComponent,
    FooterComponent,
    AdminProductsComponent,
    AddEditProductsComponent,
    ShowProductsComponent,
    EditProductsComponent,
    AdminLandingPageComponent,
    UserLandingPageComponent,
    AdminNavbarComponent,
    UserNavbarComponent,
    TeamComponent,
    AllfeedbacksComponent,
    TermsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    [ FormsModule, ReactiveFormsModule ],
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'login', component: LoginComponent},
      {path: 'sign-up', component: SignUpComponent},
      {path: 'products', component: ProductsComponent},
      {path: 'settings', component: SettingsComponent},
      {path: 'success', component: SuccessComponent},
      {path: 'order', component: OrderComponent},
      {path: 'cart', component: CartComponent},
      {path: 'log-out', component: LogOutComponent},
      {path: 'feedback', component: FeedbackComponent},
      {path: 'transaction', component: TransactionComponent},
      {path:'admin-products', component:AdminProductsComponent},
      {path:'edit-products',component:EditProductsComponent},
      {path: 'login/user', component:UserLandingPageComponent},
      {path: 'login/admin', component:AdminLandingPageComponent},
      {path:'team',component:TeamComponent},
      {path:'terms', component: TermsComponent},
      {path:'allfeedbacks',component:AllfeedbacksComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: '**', component:ErrorComponent,pathMatch:'full'},
    ]),
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
