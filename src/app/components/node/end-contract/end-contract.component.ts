import { Component, effect, inject, Input, SimpleChanges } from '@angular/core';
import { HandleComponent } from "ngx-vflow";
import { SharedInformationService } from '../../../services/shared-information.service';
import { Ishared } from '../../../interfaces/ishared.interface';
import { Icontract } from '../../../interfaces/icontract.interface';
import { ContractService } from '../../../services/contract.service';

@Component({
  selector: 'app-end-contract',
  imports: [HandleComponent],
  templateUrl: './end-contract.component.html',
  styleUrl: './end-contract.component.css'
})
export class EndContractComponent {
  @Input() ctx!: any;
  @Input() sharedContract!: Ishared;
  contractListService = inject(ContractService);
    arrContract!:Icontract[]
    dataContract!:Icontract[]
    dataId!:any;
    data!:Ishared

 ngOnChanges(changes: SimpleChanges): void {
    if (!this.arrContract || this.arrContract.length === 0) {
      this.arrContract = this.contractListService.contracts;
    }
    if (changes['sharedContract'] && this.sharedContract) {
      const id = this.sharedContract.id;
      const firstName = this.sharedContract.firstName;

      this.dataContract = this.arrContract.filter(
        x => x.id === id && x.firstName === firstName
      );
      this.dataId = this.dataContract.length > 0 ? this.dataContract[0].id : undefined;
    }
  }
}


