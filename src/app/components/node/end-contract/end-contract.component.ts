import { Component, effect, inject, Input } from '@angular/core';
import { HandleComponent } from "ngx-vflow";
import { SharedInformationService } from '../../../services/shared-information.service';
import { Ishared } from '../../../interfaces/ishared.interface';

@Component({
  selector: 'app-end-contract',
  imports: [HandleComponent],
  templateUrl: './end-contract.component.html',
  styleUrl: './end-contract.component.css'
})
export class EndContractComponent {
  @Input() ctx!: any;
  sharedData= inject(SharedInformationService)
  data!:Ishared

   constructor() {
    effect(() => {

      this.data = this.sharedData.getContract();
     
    })
  }

}
