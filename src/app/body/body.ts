import { Component, OnInit } from '@angular/core';
import { Evaluacion } from "./evaluacion/evaluacion";
import { Postulantes } from "./postulantes/postulantes";
import { ChooseOptionSidenav } from "../shared/choose-option-sidenav";
import { NgIf } from "@angular/common";

@Component({
  selector: 'app-body',
  imports: [Evaluacion, Postulantes, NgIf],
  templateUrl: './body.html',
  styleUrl: './body.css'
})
export class Body implements OnInit{
  selected: string | null = null;

  constructor(private ChooseOptions: ChooseOptionSidenav){}
  ngOnInit(){
    this.ChooseOptions.selectedOption$.subscribe(option =>{
      this.selected = option;
    });
  }
}
