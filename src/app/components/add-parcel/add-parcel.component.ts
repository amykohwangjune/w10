import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/database.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-parcel',
  templateUrl: './add-parcel.component.html',
  styleUrls: ['./add-parcel.component.css']
})
export class AddParcelComponent implements OnInit {

  senderID = '';
  address = '';
  weight = 0;
  fragile = false;

  constructor(private dbService: DatabaseService, private router: Router) { }

  ngOnInit(): void {
  }

  addParcels() {
    let parcel = {
      "senderID": this.senderID,
      "parcel": {
        "address": this.address,
        "weight": this.weight,
        "fragile": this.fragile
      }
    }
    this.dbService.addParcel(parcel).subscribe((results: any) => {
      this.router.navigate(["/listParcel"]);
    });
  }

}
