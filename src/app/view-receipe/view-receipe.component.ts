import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-receipe',
  templateUrl: './view-receipe.component.html',
  styleUrls: ['./view-receipe.component.css']
})
export class ViewReceipeComponent implements OnInit {

  constructor() { }
  reciepData=[
    {"reciepe_name":"Alfam","ingredients":"Chicken","category":"Non-Veg","duration":"2hr"}
  ]


  ngOnInit(): void {
  }

}
