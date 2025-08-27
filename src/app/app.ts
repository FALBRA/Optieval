import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { Body } from "./body/body";
import { Footer } from "./footer/footer";
import { Sidenav } from "./sidenav/sidenav";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Body, Sidenav, CommonModule, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Optieval');
}
