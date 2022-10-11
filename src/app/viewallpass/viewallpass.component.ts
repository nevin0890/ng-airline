import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewallpass',
  templateUrl: './viewallpass.component.html',
  styleUrls: ['./viewallpass.component.css']
})
export class ViewallpassComponent implements OnInit {

  constructor(private api: ApiService) {
    this.fetchPassenger();
   }
  

  fetchPassenger = () => { this.api.viewAllPassenger().subscribe((data) => { this.viewPassenger = data }) }
  
  viewPassenger: any = {}

  ngOnInit(): void {
  }

}
