import { Injectable, signal, WritableSignal } from '@angular/core';
import { Node, Edge } from 'ngx-vflow';

@Injectable({
  providedIn: 'root'
})
export class NodeServicesService {

  nodes:  Node[] = [
    {
      id: '1',
      point: ({ x: 100, y: 200 }),
      type: 'html-template',
      data: {default:'home', value:''}
       
    },
   
    {
      id: '2',
      point: ({ x: 500 ,y: 100 }) ,
      type:'html-template',
      data: {default:'contract', value:''}
      
    },
     {
      id: '3',
      point: ({ x: 750 ,y: 200 }),
      type: 'default',
      text: 'Contratos',
    },

    
  ];

  edges:Edge[] =  [
     {
      id: '1 -> 2',
      source: '1',
      target: '2',
      type:'template',
      data:{
       type: 'animated-edge'
      }
     
    },
    {
      id: '2 -> 3',
      source: '2',
      target: '3',
      type:'template'
      
    }
    
  ];


   
}
