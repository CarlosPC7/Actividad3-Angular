import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoworkingsComponent } from './coworkings/coworkings.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HeroeComponent } from './heroe/heroe.component';
import { IconsComponent } from './icons/icons.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavMenuComponent, HeroeComponent, IconsComponent, CoworkingsComponent, FormularioComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'act3-angular';
}
