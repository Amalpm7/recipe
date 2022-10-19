import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-receipe',
  templateUrl: './view-receipe.component.html',
  styleUrls: ['./view-receipe.component.css']
})
export class ViewReceipeComponent implements OnInit {

  constructor(private api:ApiService) { this.putViewData()}
  putViewData=()=>{
    this.api.getData().subscribe(
      (data)=>{
        this.reciepData=data
      }
    )
  }

  reciepData:any=[]
  


  ngOnInit(): void {
  }

}
