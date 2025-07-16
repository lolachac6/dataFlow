import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HandleComponent } from "ngx-vflow";

@Component({
  selector: 'app-home-component',
  imports: [FormsModule, HandleComponent],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css'
})
export class HomeComponentComponent {
 @Input() ctx!: any;
   @Input() button!:any;
   @Output() messageEvent = new EventEmitter<string>()
   msg!:string;
   


   onNodeValueChange(data:string) {
   this.messageEvent.emit(data)
   data = " ";
   
}
}
