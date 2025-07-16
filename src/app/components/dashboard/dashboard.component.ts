import { Component, inject} from '@angular/core';
import { Connection, Node, Edge, Vflow} from 'ngx-vflow';
import { FormsModule } from '@angular/forms';
import { NodeServicesService } from '../../services/node-services.service';
import { HomeComponentComponent } from "../node/home-component/home-component.component";







@Component({
  selector: 'app-dashboard',
  imports: [Vflow, FormsModule, HomeComponentComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
 
store = inject(NodeServicesService)
node: Node[] = this.store.nodes;
edges: Edge[] = [];
childInformation!:string;
enable:boolean=false;
msg!:string;


  
 

  public createEdge({ source, target }: Connection) {
    this.edges = [
      ...this.edges,
      {
        id: `${source} -> ${target}`,
        source,
        target,
        markers: {
        end: {
          type: 'arrow-closed',
          width: 30,
          height: 30,
          color:'black',
        },
      },
      },
    ];
   
    
  }
  handleEdgesAddChange(event:any){
    if(event[0].id === '1 -> 2'){
      
    }
  }



checkStart(){
  this.enable=true ;
}

recoger(childData:any){
this.childInformation = childData;
}


}
