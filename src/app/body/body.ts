import { Component } from '@angular/core';
import { Evaluacion } from "./evaluacion/evaluacion";

@Component({
  selector: 'app-body',
  imports: [Evaluacion],
  templateUrl: './body.html',
  styleUrl: './body.css'
})
export class Body {

}
