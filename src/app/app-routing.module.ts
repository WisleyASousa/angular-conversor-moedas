import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CurrencyConverterComponent } from './pages/currency-converter/currency-converter.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "currency-converter",
    component: CurrencyConverterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
