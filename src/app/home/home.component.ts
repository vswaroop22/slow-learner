//this is a bydefault
import { Component, OnInit } from '@angular/core';


//decorators(all with @)
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

// a simple class
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
