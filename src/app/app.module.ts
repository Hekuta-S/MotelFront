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
import { ToastModule } from 'primeng/toast';
import { SpeedDialModule } from 'primeng/speeddial';
import { PrimeNGConfig } from 'primeng/api';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { AppComponent } from './app.component';
import { HabitacionesComponent } from './screens/habitaciones/habitaciones.component';
import { DashboardComponent } from './screens/dashboard/dashboard.component';
import { InventarioComponent } from './screens/inventario/inventario.component';
import { FacturaComponent } from './screens/factura/factura.component'; 
import { MatChipsModule } from '@angular/material/chips';
import { CategoriaComponent } from './screens/categoria/categoria.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'habitaciones', component: HabitacionesComponent },
  { path: 'inventario', component: InventarioComponent },
  { path: 'factura', component: FacturaComponent },

  
  { path: 'categoria', component: CategoriaComponent },
  // otras rutas
];

@NgModule({
  declarations: [
    AppComponent,
    HabitacionesComponent,
    DashboardComponent,
    InventarioComponent,
    FacturaComponent, 
   CategoriaComponent
  ],

  imports: [
    MatChipsModule,
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
    ButtonModule,
    InputTextModule,
    ToastModule,
    SpeedDialModule,
    
    RouterModule.forRoot(routes)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Agrega CUSTOM_ELEMENTS_SCHEMA
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
