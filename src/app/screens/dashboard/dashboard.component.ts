import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  items: any[] = [
    { label: 'Item 1', icon: 'pi pi-pencil' },
    { label: 'Item 2', icon: 'pi pi-search' },
    { label: 'Item 3', icon: 'pi pi-calendar' }
  ];
}
