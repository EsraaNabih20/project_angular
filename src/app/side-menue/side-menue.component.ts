import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menue',
  templateUrl: './side-menue.component.html',
  styleUrls: ['./side-menue.component.css']
})
export class SideMenueComponent implements OnInit {


userNationalId:string = "29812011217366";
userCreditCardNumber:string = "29812011217366";

  constructor() { }

  ngOnInit(): void {
  }

}
