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
  isMenuOpen = false; // Controla el estado del menú lateral
  userEmail: string | null = ''; // Almacena el email del usuario

  ngOnInit(): void {
    // Verificamos si sessionStorage está disponible
    if (typeof window !== 'undefined' && window.sessionStorage) {
      // Obtiene el email del sessionStorage y lo asigna
      this.userEmail = sessionStorage.getItem('email');
    }
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  logout(): void {
    // Verificamos si sessionStorage está disponible antes de limpiar
    if (typeof window !== 'undefined' && window.sessionStorage) {
      sessionStorage.clear();
    }
  }
}