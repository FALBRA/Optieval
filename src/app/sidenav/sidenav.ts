import { Component } from '@angular/core';
import { NgIf } from "@angular/common";
import { ChooseOptionSidenav } from "../shared/choose-option-sidenav";

@Component({
  selector: 'app-sidenav',
  imports: [NgIf],
  templateUrl: './sidenav.html',
  styleUrl: './sidenav.css'
})
export class Sidenav {
  selected: string | null = null;
  isCollapsed = false;

  constructor(private ChooseOptions: ChooseOptionSidenav){}

  toggleMenu() {
    this.isCollapsed = !this.isCollapsed;
  }
  
  select(option: string) {
    this.selected = option;
    this.ChooseOptions.selectOption(option);
  }
}
