import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-add-sender',
  templateUrl: './add-sender.component.html',
  styleUrls: ['./add-sender.component.css']
})
export class AddSenderComponent implements OnInit {

  senderName = "";

  constructor(private dbService: DatabaseService, private router: Router) { }

  ngOnInit(): void {
  }

  saveNewSender(){
    let sender = {
      "name": this.senderName
    }
    this.dbService.createSender(sender).subscribe((results: any) => {
      this.router.navigate(["/listSender"]);
    });
  }

}
