import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './components/static/header/header.component';
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { ModalComponent } from "./components/static/modal/modal.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, DashboardComponent, ModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dataFlow';
}
