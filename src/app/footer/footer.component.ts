import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  @Input() isLoggedIn: boolean = false;
  isHighlighted: boolean = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.isHighlighted = false;
    }, 5000);
  }
}