import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-receipe',
  templateUrl: './add-receipe.component.html',
  styleUrls: ['./add-receipe.component.css']
})
export class AddReceipeComponent implements OnInit {

  constructor(private myapi:ApiService) { }
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
    this.myapi.getData().subscribe(
      (response)=>{}
    )
    alert("Successfully Added")
    this.category=""
    this.duration=""
    this.ingredients=""
    this.reciepe_name=""
  }

  ngOnInit(): void {
  }

}
