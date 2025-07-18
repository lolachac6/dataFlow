import { Component, inject, Input } from '@angular/core';
import { HandleComponent } from "ngx-vflow";
import { Ishared } from '../../../interfaces/ishared.interface';
import { ContractService } from '../../../services/contract.service';
import { Icontract } from '../../../interfaces/icontract.interface';

@Component({
  selector: 'app-error-contract',
  imports: [HandleComponent],
  templateUrl: './error-contract.component.html',
  styleUrl: './error-contract.component.css'
})
export class ErrorContractComponent {
@Input() sharedErrorContract!: Ishared;
contractServices= inject(ContractService);
contract!:Icontract[]

ngOnChanges(){
  if(this.sharedErrorContract){
    this.contract = this.contractServices.findContracts(this.sharedErrorContract.id,this.sharedErrorContract.firstName)
  }
}
}
