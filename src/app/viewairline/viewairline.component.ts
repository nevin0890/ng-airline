import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewairline',
  templateUrl: './viewairline.component.html',
  styleUrls: ['./viewairline.component.css']
})
export class ViewairlineComponent implements OnInit {

  constructor(private api: ApiService) { 
    this.fetchAirline();
  }

  fetchAirline=()=>{this.api.viewAllAirline().subscribe((data)=>{this.viewAirline=data})}

  viewAirline:any=[];
  

  ngOnInit(): void {
  }

}
