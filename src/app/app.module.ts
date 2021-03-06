import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './component/template/header/header.component';
import { FooterComponent } from './component/template/footer/footer.component';
import { SidenavComponent } from './component/template/sidenav/sidenav.component';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { HotelListComponent } from './component/view/hotel/hotel-list/hotel-list.component';
import { HospedagemListComponent } from './component/view/hospedagem/hospedagem-list/hospedagem-list.component';
import { HospedeListComponent } from './component/view/hospede/hospede-list/hospede-list.component';
import { HomeComponent } from './component/view/home/home.component';
import { QuartoListComponent } from './component/view/quarto/quarto-list/quarto-list.component';
import { QuartoFormComponent } from './component/view/quarto/quarto-form/quarto-form.component';
import { HospedeFormComponent } from './component/view/hospede/hospede-form/hospede-form.component';
import { HospedagemFormComponent } from './component/view/hospedagem/hospedagem-form/hospedagem-form.component';
import { HotelFormComponent } from './component/view/hotel/hotel-form/hotel-form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { HotelUpdateComponent } from './component/view/hotel/hotel-update/hotel-update.component';
import { ConfirmDeleteComponent } from './component/template/confirm-delete/confirm-delete.component';
import { HospedeUpdateComponent } from './component/view/hospede/hospede-update/hospede-update.component';
import { HospedagemUpdateComponent } from './component/view/hospedagem/hospedagem-update/hospedagem-update.component';
import { QuartoUpdateComponent } from './component/view/quarto/quarto-update/quarto-update.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    HotelListComponent,
    HospedagemListComponent,
    HospedeListComponent,
    HomeComponent,
    QuartoListComponent,
    QuartoFormComponent,
    HospedeFormComponent,
    HospedagemFormComponent,
    HotelFormComponent,
    HotelUpdateComponent,
    ConfirmDeleteComponent,
    HospedeUpdateComponent,
    HospedagemUpdateComponent,
    QuartoUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }