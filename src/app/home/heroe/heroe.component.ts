import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-heroe',
  standalone: true,
  imports: [],
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css'
})
export class HeroeComponent {
  @Output() searchQuery = new EventEmitter<string>();
  searchText: string = '';

  onSearch() {
    this.searchQuery.emit(this.searchText);
  }
}
