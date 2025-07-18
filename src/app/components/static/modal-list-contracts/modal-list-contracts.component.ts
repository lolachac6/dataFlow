import { Component, effect, inject } from '@angular/core';
import { ContractService } from '../../../services/contract.service';
import { Icontract } from '../../../interfaces/icontract.interface';
import { SharedInformationService } from '../../../services/shared-information.service';
import { Ishared } from '../../../interfaces/ishared.interface';

@Component({
  selector: 'app-modal-list-contracts',
  imports: [],
  templateUrl: './modal-list-contracts.component.html',
  styleUrl: './modal-list-contracts.component.css'
})
export class ModalListContractsComponent {

  contractListService = inject(ContractService);
  sharedInformationService = inject(SharedInformationService)
  arrContract!:Icontract[]
  dataContract!:Icontract[]
  dataId!:any;
  data!:Ishared


  ngOnInit(){
    this.arrContract = this.contractListService.contracts 
  }

  constructor() {
  effect(() => {
    this.data = this.sharedInformationService.getContract();
    if (this.data) {
      const id = Object.values(this.data)[0];
      const firstName = Object.values(this.data)[1];

      this.dataContract = this.arrContract.filter(x => x.id === id && x.firstName === firstName);
      if (this.dataContract.length > 0) {
        
        this.dataId= this.dataContract[0].id;
      } else {
        
        this.dataId= undefined; 
      }
    } else {
      this.dataContract = [];
      
      this.dataId= undefined;
    }
  });
}



}
