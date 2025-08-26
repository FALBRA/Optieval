import { Component } from '@angular/core';
import { Evaluacion } from "./evaluacion/evaluacion";
import { Footer } from "../footer/footer";

@Component({
  selector: 'app-body',
  imports: [Evaluacion, Footer],
  templateUrl: './body.html',
  styleUrl: './body.css'
})
export class Body {

}
