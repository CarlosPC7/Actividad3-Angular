import { Component } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { IconsComponent } from './icons/icons.component';
import { CoworkingsComponent } from './coworkings/coworkings.component';
import { FormularioComponent } from './formulario/formulario.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroeComponent, IconsComponent, CoworkingsComponent, FormularioComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  searchQuery: string = '';

  onSearch(query: string) {
    this.searchQuery = query;
  }
}
