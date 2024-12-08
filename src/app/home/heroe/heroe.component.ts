import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  standalone: true,
  imports: [],
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css'
})
export class HeroeComponent {
  searchQuery: string = '';
  searchResults: any[] = [];

  onSearchChange(): void {
    console.log('Búsqueda en proceso...', this.searchQuery);
  }

  performSearch(): void {
    if (this.searchQuery) {
      console.log('Realizando búsqueda para:', this.searchQuery);
    } else {
      console.log('Por favor ingrese una búsqueda');
    }
  }
}
