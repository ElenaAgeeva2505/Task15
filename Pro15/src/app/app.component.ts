import { Component } from '@angular/core';
import { DataService } from './data.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    public dataService: DataService
  ) {}
  title = '2.7-Guards';


  getComment(){
    this.dataService.getCommentsId1(1).subscribe({
      next:(response)=>{
        console.log(response)
      }
    })
  }
}



