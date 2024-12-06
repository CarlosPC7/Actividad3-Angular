import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  // Método que se ejecutará al enviar el formulario
  onSubmit(event: Event): void {
    // Prevenimos el comportamiento por defecto del formulario
    event.preventDefault();

    // Obtenemos los valores de los campos
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;

    // Validación del correo
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('Correo electrónico no válido');
      return;
    }

    // Credenciales predeterminadas
    const defaultEmail = 'usuario@ejemplo.com';
    const defaultUsername = 'usuario';
    const defaultPassword = 'contraseña';

    // Validamos las credenciales
    if (email === defaultEmail && username === defaultUsername && password === defaultPassword) {
      // Guardamos los datos en sessionStorage
      sessionStorage.setItem('email', email);
      sessionStorage.setItem('username', username);

      // Redirigimos a la página principal
      window.location.href = '/';
    } else {
      alert('Credenciales incorrectas');
    }
  }
}