import { Component } from '@angular/core';
import { Card1Component } from "../card1/card1.component";
import { Card2Component } from "../card2/card2.component";
import { Card3Component } from "../card3/card3.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Card1Component, Card2Component, Card3Component],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
