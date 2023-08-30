import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BannerComponent } from './shared/banner/banner.component';
import { ContainerComponent } from './shared/container/container.component';
import { HomeComponent } from './pages/home/home.component';

import { MatIconModule } from '@angular/material/icon';

import { CardComponent } from './shared/card/card.component';
import { FormConversorComponent } from './shared/form-conversor/form-conversor.component';
import { CurrencyConversionComponent } from './pages/currency-converter/currency-converter.component';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { NgxPaginationModule } from 'ngx-pagination';

import { MessageComponent } from './shared/message/message.component';

import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { CurrencyMaskModule } from "ng2-currency-mask";

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CoinListComponent } from './pages/coin-list/coin-list.component';
import { HistoricComponent } from './pages/historic/historic.component';
import { AlertComponent } from './shared/alert/alert.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    ContainerComponent,
    HomeComponent,
    CardComponent,
    FormConversorComponent,
    CurrencyConversionComponent,
    MessageComponent,
    CoinListComponent,
    HistoricComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NgxPaginationModule,
    MatIconModule,
    MatSelectModule,
    MatInputModule,
    MatDialogModule,
    CurrencyMaskModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
