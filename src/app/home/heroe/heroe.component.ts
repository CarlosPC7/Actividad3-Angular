import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-heroe',
  standalone: true,
  imports: [CommonModule, FormsModule],
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
