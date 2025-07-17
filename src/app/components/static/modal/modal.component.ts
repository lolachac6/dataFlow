import { Component, Input } from '@angular/core';
import { Icontract } from '../../../interfaces/icontract.interface';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {

  @Input() contracts!:Icontract;

  ngOnInit(){
    
  }

}
