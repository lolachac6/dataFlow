import { Component, inject, Input } from '@angular/core';
import { HandleComponent } from "ngx-vflow";
import { Icontract } from '../../../interfaces/icontract.interface';
import { ContractService } from '../../../services/contract.service';
import { ModalComponent } from '../../static/modal/modal.component';



@Component({
  selector: 'app-contract-list-component',
  imports: [HandleComponent ,ModalComponent],
  templateUrl: './contract-list-component.component.html',
  styleUrl: './contract-list-component.component.css'
})
export class ContractListComponentComponent {
   @Input() ctx!: any;
   @Input() button!: any;
    arrContracts: Icontract[] =[]; 
    contractService = inject (ContractService)
    activated:boolean = false;
    


   ngOnInit(){

    this.arrContracts = this.contractService.contracts
    

   }

   




}
