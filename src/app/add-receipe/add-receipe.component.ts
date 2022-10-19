import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-receipe',
  templateUrl: './add-receipe.component.html',
  styleUrls: ['./add-receipe.component.css']
})
export class AddReceipeComponent implements OnInit {

  constructor() { }
  reciepe_name=""
  ingredients=""
  category=""
  duration=""
  readvalue=()=>{
    let data={
      "reciepe":this.reciepe_name,
      "ingredients":this.ingredients,
      "category":this.category,
      "duration":this.duration
    }
    console.log(data)
  }

  ngOnInit(): void {
  }

}
