import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/database.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-del-sender',
  templateUrl: './del-sender.component.html',
  styleUrls: ['./del-sender.component.css']
})
export class DelSenderComponent implements OnInit {

  senderID = '';

  constructor(private dbService: DatabaseService, private router: Router) { }

  ngOnInit(): void {
  }

  delSender(){
    let sender = this.senderID;
    this.dbService.deleteSender(sender).subscribe((results: any) => {
      this.router.navigate(["/listSender"]);
    });
  }

}
