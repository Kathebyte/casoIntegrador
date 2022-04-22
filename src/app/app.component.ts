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
  carrera: string;
  skills: string[];
  showskills: boolean
  about: string;
  showAbout: boolean
  showExperiencia: boolean
  servicios:string;


  constructor() {

    this.name = "CRISTIAN GUTERREZ"
    this.email = "cris123@gmail.com"
    this.contacto = "+9715845141123"
    this.direccion = "Dubai, Emiratos Árabes Unidos"
    this.carrera = "Senior Frontend Engineer at Banque Saudi Fransi | Life-Career coach"
    this.skills = ["JavaScript", "Reack.js", "css", "Typescript", "Coaching", "web Developer", "scrum"]
    this.showskills = false
    this.about = "Computer Sciences Bachelor with 8 years of experience in software development. Scrum Developer Certified with good knowledge in Agile Teams and processes.Developer Certified with good knowledge in Agile Teams and processes"
    this.showAbout = false
    this.showExperiencia = false
    this.servicios= " Si deseas mas informacion comunicate con nuestras lineas, el te podra ayudar en tus proyectos./" +
      "Es un experto en JavaScript,Reack.js,css,Typescript,Coaching,web Developer,scrum"
  }

  toggleskills() {
    this.showskills = !this.showskills;
  }

  togglesabout() {
    this.showAbout = !this.showAbout;

  }
  toggleExperiencia() {
    this.showExperiencia = !this.showExperiencia
  }
}
