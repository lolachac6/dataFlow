import { Injectable, signal, WritableSignal } from '@angular/core';
import { Node, Edge } from 'ngx-vflow';

@Injectable({
  providedIn: 'root'
})
export class NodeServicesService {

  nodes:  Node[] = [
    {
      id: '1',
      point: ({ x: 100, y: 230 }),
      type: 'html-template',
      data: {default:'home', value:''}
       
    },
   
    {
      id: '2',
      point: ({ x: 400 ,y: 238 }) ,
      type:'html-template',
      data: {default:'contract', value:''}
      
    },
     {
      id: '3',
      point: ({ x: 700 ,y: 400 }),
      type: 'html-template',
      data: {default:'endContract', value:''}
    },
     {
      id: '4',
      point: ({ x: 700 ,y: 120 }),
      type: 'html-template',
      data: {default:'errorContract', value:''}
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
      type:'template',
      data:{
       type: 'animated-edge'
      }
      
    },
    {
      id: '2 -> 4',
      source: '2',
      target: '4',
      type:'template',
      data:{
       type: 'animated-edge'
      }
      
    }
    
  ];


   
}
