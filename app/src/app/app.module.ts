import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';
import { MatMomentDateModule, MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxUiLoaderModule, NgxUiLoaderHttpModule } from 'ngx-ui-loader';
import { AngularFireModule } from '@angular/fire';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { PropertiesComponent } from './components/properties/properties.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { CarouselItemComponent } from './components/home/carousel-item/carousel-item.component';
import { PropertyItemComponent } from './components/properties/property-item/property-item.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PropertyDetailsComponent } from './components/property-details/property-details.component';
import { BookViewingModalComponent } from './components/property-details/book-viewing-modal/book-viewing-modal.component';
import { MakeEnquiryModalComponent } from './components/property-details/make-enquiry-modal/make-enquiry-modal.component';
import { GoogleMapsComponent } from './components/property-details/google-maps/google-maps.component';
import { FiltersComponent } from './components/properties/filters/filters.component';
import { NewOnMarketComponent } from './components/home/new-on-market/new-on-market.component';

import { PropertyService } from './services/property.service';
import { AuthHeaderInterceptor } from './http-interceptors/auth-header.interceptor';

import { environment } from '../environments/environment';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'properties', component: PropertiesComponent },
  { path: 'properties/:propertyId', component: PropertyDetailsComponent },
  { path: 'about-us', component: AboutComponent },
  { path: 'contact-us', component: ContactComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    FooterComponent,
    ContactComponent,
    PropertiesComponent,
    HomeComponent,
    CarouselItemComponent,
    PropertyItemComponent,
    PageNotFoundComponent,
    PropertyDetailsComponent,
    BookViewingModalComponent,
    MakeEnquiryModalComponent,
    GoogleMapsComponent,
    FiltersComponent,
    NewOnMarketComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatSidenavModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDialogModule,
    MatDividerModule,
    MatSnackBarModule,
    MatTabsModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatMomentDateModule,
    NgbModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({ minTime: 300, showForeground: true }),
    AngularFireModule.initializeApp(environment.firebase)
  ],
  entryComponents: [
    BookViewingModalComponent,
    MakeEnquiryModalComponent
  ],
  providers: [
    PropertyService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthHeaderInterceptor, multi: true},
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}},
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 5000}},
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
