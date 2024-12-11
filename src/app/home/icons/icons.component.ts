import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-icons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icons.component.html',
  styleUrl: './icons.component.css'
})
export class IconsComponent {
  categories = [
    { name: 'Con vistas', iconClass: 'bi-eye' },
    { name: 'Céntrico', iconClass: 'bi-building' },
    { name: 'Espacioso', iconClass: 'bi-arrows-fullscreen' },
    { name: '24 horas', iconClass: 'bi-clock' },
  ];

  onCategoryClick(category: any) {
    console.log('Clicked category:', category);
  }
}
