import { Component } from '@angular/core';

@Component({
  selector: 'app-arrays',
  templateUrl: './arrays.component.html',
  styleUrls: ['./arrays.component.css']
})
export class ArraysComponent {
  
  //cursos!:string[];

  cursos=['JavaScript'];

  addDatos(nomcapture:String){
    
    this.cursos.push(String(nomcapture));
  }
}
