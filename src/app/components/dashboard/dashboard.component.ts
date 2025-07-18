import { Component, inject} from '@angular/core';
import {  Node, Edge, Vflow} from 'ngx-vflow';
import { FormsModule } from '@angular/forms';
import { NodeServicesService } from '../../services/node-services.service';
import { HomeComponentComponent } from "../node/home-component/home-component.component";
import {ContractListComponentComponent} from '../node/contract-list-component/contract-list-component.component';
import { Icontract } from '../../interfaces/icontract.interface';
import { EndContractComponent } from "../node/end-contract/end-contract.component";





@Component({
  selector: 'app-dashboard',
  imports: [Vflow, FormsModule, HomeComponentComponent, ContractListComponentComponent, EndContractComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

store = inject(NodeServicesService)
node: Node[] = this.store.nodes;
edges: Edge[] = this.store.edges;
childInformation!:string;
enable:boolean=false;



checkStart(){
  this.enable=true ;
  this.edges = [...this.edges];
}

recoger(childData: any) {
  this.childInformation = childData;  
  }

  
}
