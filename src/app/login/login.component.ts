import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  username: string = '';
  password: string = '';
  rememberMe: boolean = false;

  onSubmit(): void {
    // Validación del correo
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(this.email)) {
      alert('Correo electrónico no válido');
      return;
    }

    // Credenciales predeterminadas
    const defaultEmail = 'usuario@ejemplo.com';
    const defaultUsername = 'usuario';
    const defaultPassword = 'contraseña';

    // Validamos las credenciales
    if (this.email === defaultEmail && this.username === defaultUsername && this.password === defaultPassword) {
      // Guardamos los datos en sessionStorage
      sessionStorage.setItem('email', this.email);
      sessionStorage.setItem('username', this.username);

      // Redirigimos a la página principal
      window.location.href = '/';
    } else {
      alert('Credenciales incorrectas');
    }
  }
}
