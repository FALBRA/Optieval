import { Component } from '@angular/core';
import { NgIf } from "@angular/common";

@Component({
  selector: 'app-sidenav',
  imports: [NgIf],
  templateUrl: './sidenav.html',
  styleUrl: './sidenav.css'
})
export class Sidenav {
  isCollapsed = false;

  toggleMenu() {
    this.isCollapsed = !this.isCollapsed;
  }
}
