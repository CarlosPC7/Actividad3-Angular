import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.css'
})
export class NavMenuComponent implements OnInit {
  isMenuOpen = false;
  userEmail: string | null = '';

  ngOnInit(): void {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      this.userEmail = sessionStorage.getItem('email');
    }
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  logout(): void {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      sessionStorage.clear();
    }
  }
}