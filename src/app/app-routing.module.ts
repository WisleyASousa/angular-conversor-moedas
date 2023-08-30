import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CurrencyConversionComponent } from './pages/currency-converter/currency-converter.component';
import { CoinListComponent } from './pages/coin-list/coin-list.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: 'coin-list',
    component: CoinListComponent
  },
  {
    path: "currency-converter",
    component: CurrencyConversionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
