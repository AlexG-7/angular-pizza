import { Component } from '@angular/core';



interface Pizza {
  id: number;
  nom: string;
  prix: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Pizzaparty';

  pizza: Pizza = {
    id:1,
    nom:"Reine",
    prix:12
  }
}
