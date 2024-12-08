import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { CoworkingsService } from '../../apiservices/coworkings.service';

@Component({
  selector: 'app-coworkings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './coworkings.component.html',
  styleUrl: './coworkings.component.css'
})
export class CoworkingsComponent implements OnInit {
  coworkings: any[] = [];
  filteredCoworkings: any[] = [];
  @Input() searchQuery: string = '';

  constructor(private coworkingService: CoworkingsService) {}

  ngOnInit(): void {
    this.coworkingService.getCoworkings().subscribe(
      (data) => {
        this.coworkings = data;
        this.filteredCoworkings = data;
      },
      (error) => {
        console.error('Error loading coworkings', error);
      }
    );
  }

  ngOnChanges(): void {
    if (this.searchQuery) {
      this.filteredCoworkings = this.coworkings.filter(coworking =>
        coworking.nombre.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        coworking.localizacion.ciudad.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.filteredCoworkings = this.coworkings;
    }
  }
}