import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SideMenueComponent } from './side-menue/side-menue.component';
import { ProductCardDirective } from './Directives/product-card.directive';
import { NationalIDPipe } from './pipes/national-id.pipe';
import { FormsModule } from '@angular/forms';
import { CreditCardPipe } from './pipes/credit-card.pipe';
import { MasterComponent } from './master/master.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    NavbarComponent,
    SideMenueComponent,
    ProductCardDirective,
    NationalIDPipe,
    CreditCardPipe,
    MasterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
