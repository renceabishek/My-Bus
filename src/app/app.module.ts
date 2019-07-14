import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatAutocompleteModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, MatInputModule, MatCardModule, MAT_DATE_LOCALE, MatSnackBarModule, MatDialogModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { Login } from './login/login';



@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    HomeComponent,
    FooterComponent,
    SearchComponent,
    Login
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatCardModule,
    MatSnackBarModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatMenuModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
  ],
  entryComponents: [
    Login
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
