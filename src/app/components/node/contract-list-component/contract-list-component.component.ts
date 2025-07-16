import { Component, Input } from '@angular/core';
import { HandleComponent } from "ngx-vflow";

@Component({
  selector: 'app-contract-list-component',
  imports: [HandleComponent],
  templateUrl: './contract-list-component.component.html',
  styleUrl: './contract-list-component.component.css'
})
export class ContractListComponentComponent {
   @Input() ctx!: any;
   @Input() button!: any;

}
