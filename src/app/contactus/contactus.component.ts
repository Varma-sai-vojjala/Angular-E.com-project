import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  email:string='getsure@gmail.com';
  mobile:number=9999988888;
  address:string='Hyderabad,Telangana';
  
  constructor() { }

  ngOnInit(): void {
  }

}
