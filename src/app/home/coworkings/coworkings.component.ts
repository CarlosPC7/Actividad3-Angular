import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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

  constructor(private coworkingService: CoworkingsService) {}

  ngOnInit(): void {
    this.coworkingService.getCoworkings().subscribe(
      (data) => {
        this.coworkings = data;
      },
      (error) => {
        console.error('Error loading coworkings', error);
      }
    );
  }
}