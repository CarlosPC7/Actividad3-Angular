import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoworkingsComponent } from './home/coworkings/coworkings.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HeroeComponent } from './home/heroe/heroe.component';
import { IconsComponent } from './home/icons/icons.component';
import { FormularioComponent } from './home/formulario/formulario.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavMenuComponent, HomeComponent, FooterComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'act3-angular';
}
