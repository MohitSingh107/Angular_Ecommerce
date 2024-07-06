import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { Route, RouterLink, RouterModule, RouterOutlet } from "@angular/router";
import { NgFor, NgForOf } from "@angular/common";
import { HomeComponent } from "./home/home.component";
import { CartComponent } from "./cart/cart.component";
import { ProductPageComponent } from "./product-page/product-page.component";
import { provideHttpClient } from "@angular/common/http";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";

const routes: Route[] = [
    { path: 'home', component: HomeComponent },
    { path: 'cart', component: CartComponent },
    { path: 'product-page', component: ProductPageComponent },
    { path: '', redirectTo: 'home', pathMatch: "full" }

];

@NgModule({
    declarations: [AppComponent, HomeComponent,FooterComponent,HeaderComponent,
        CartComponent,ProductPageComponent],
    imports: [BrowserModule, RouterOutlet, RouterLink, RouterModule.forRoot(routes), NgForOf, NgFor],
    providers: [provideHttpClient()],
    bootstrap: [AppComponent]
})

export class AppModule {

}