import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-list-parcel',
  templateUrl: './list-parcel.component.html',
  styleUrls: ['./list-parcel.component.css']
})
export class ListParcelComponent implements OnInit {

  parcels:any = [];

  constructor(private dbService: DatabaseService) { }

  ngOnInit(): void {
    this.getParcels();
  }

  getParcels(){
    this.dbService.getAllParcels().subscribe((results: any) => {
      this.parcels = results;
    })
  }

}
