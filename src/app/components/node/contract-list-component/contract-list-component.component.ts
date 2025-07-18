import { Component, effect, inject, Input } from '@angular/core';
import { HandleComponent } from "ngx-vflow";
import { Icontract } from '../../../interfaces/icontract.interface';
import { ContractService } from '../../../services/contract.service';
import { ModalComponent } from '../../static/modal/modal.component';
import { SharedInformationService } from '../../../services/shared-information.service';
import { Ishared } from '../../../interfaces/ishared.interface';



@Component({
  selector: 'app-contract-list-component',
  imports: [HandleComponent],
  templateUrl: './contract-list-component.component.html',
  styleUrl: './contract-list-component.component.css'
})
export class ContractListComponentComponent {
  @Input() ctx!: any;
  @Input() button!: any;

  contractService = inject(ContractService)
  sharedData = inject(SharedInformationService);

  arrContracts: Icontract[] = [];
  contracts!: Icontract[]
  data!: Ishared;
  
  constructor() {
    effect(() => {

      this.data = this.sharedData.getContract();
      if (this.data) {
        const id = Object.values(this.data)[0]
        const firstName = Object.values(this.data)[1];
        this.contracts = this.arrContracts.filter(x => x.id === id && x.firstName === firstName)
      }
    })
  }

  ngOnInit() {
    this.arrContracts = this.contractService.contracts
  }








}
