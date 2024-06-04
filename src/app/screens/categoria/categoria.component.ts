import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputSwitchModule } from 'primeng/inputswitch';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css'], standalone: true,
  imports: [FormsModule, InputTextModule, FloatLabelModule, InputSwitchModule]
  
})
export class CategoriaComponent {
  value: string | undefined;
  checked: boolean = false;
}
