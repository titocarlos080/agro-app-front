import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { AppComponent } from './app.component';

export const routes: Routes = [

    { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirección a la ruta 'home'
    { path: 'products', component: ProductsComponent }, // Ruta para productos
    { path: 'home', component: HomeComponent }, // Ruta para home

];

