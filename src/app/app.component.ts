import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'casoIntegrador';

  name: string;
  email: string;
  contacto: string;
  direccion: string;
  carrera: string

    constructor() {

      this.name = "CRISTIAN GUTERREZ"
      this.email= "cris123@GMAIL.COM"
      this.contacto= "+971 5845141123"
      this.direccion = "Dubai, Emiratos Árabes Unidos"
      this.carrera = "Senior Frontend Engineer at Banque Saudi Fransi | Life-Career coach"

    }

}
