import { Component } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { IconsComponent } from './icons/icons.component';
import { CoworkingsComponent } from './coworkings/coworkings.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroeComponent, IconsComponent, CoworkingsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
