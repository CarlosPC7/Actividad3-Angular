import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  isLoggedIn: boolean = false;
  isHighlighted: boolean = true;

  ngOnInit(): void {
    const email = sessionStorage.getItem('email');
    this.isLoggedIn = email ? true : false;
  }
}
