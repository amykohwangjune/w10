import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-list-sender',
  templateUrl: './list-sender.component.html',
  styleUrls: ['./list-sender.component.css']
})
export class ListSenderComponent implements OnInit {

  senders: any = [];

  constructor(private dbService: DatabaseService) { }

  ngOnInit(): void {
    this.getSenders();
  }

  getSenders(){
    this.dbService.getAllSenders().subscribe((results:any)=>{
      this.senders = results;
    })
  }

}
