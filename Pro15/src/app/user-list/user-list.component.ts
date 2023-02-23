import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{
  constructor(
    private dataService: DataService
  ) {}
  getComment(){
    this.dataService.getCommentsId1(1).subscribe({
      next:(response)=>{
        console.log(response)
      }
    })
  
  }

  ngOnInit(): void {
   
  }

  
}



