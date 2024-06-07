import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule, Routes } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
library.add(faUser);
import { StyleClassModule } from 'primeng/styleclass';
import { Sidebar } from 'primeng/sidebar';
import { ToastModule } from 'primeng/toast';
import { SpeedDialModule } from 'primeng/speeddial';
import { InputSwitchModule } from 'primeng/inputswitch';
import { CardModule } from 'primeng/card';
import { SidebarModule } from 'primeng/sidebar';
import { MenubarModule } from 'primeng/menubar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { AppComponent } from './app.component';
import { HabitacionesComponent } from './screens/habitaciones/habitaciones.component';
import { InventarioComponent } from './screens/inventario/inventario.component';
import { FacturaComponent } from './screens/factura/factura.component'; 
import { MatChipsModule } from '@angular/material/chips';
import { CategoriaComponent } from './screens/categoria/categoria.component';
import { LoginComponent } from './screens/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'habitaciones', component: HabitacionesComponent },
  { path: 'inventario', component: InventarioComponent },
  { path: 'facturas', component: FacturaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'categorias', component: CategoriaComponent },
  // otras rutas
];

@NgModule({
  declarations: [
    AppComponent,
    HabitacionesComponent,
    InventarioComponent,
    FacturaComponent, 
    LoginComponent,
  
  ],

  imports: [
 RippleModule,
 AvatarModule,
 StyleClassModule,
    SidebarModule,
    MenubarModule,
    MatChipsModule,
    InputSwitchModule,
    MatInputModule,
    FormsModule,
   MatFormFieldModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    FontAwesomeModule,
    ButtonModule,
    InputTextModule,
    ToastModule,
    SpeedDialModule,
  CardModule,
    
    RouterModule.forRoot(routes)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Agrega CUSTOM_ELEMENTS_SCHEMA
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
