import { Component } from '@angular/core';
import {UsersdataService} from './services/usersdata.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Create-APIs';
  users:any;
  constructor(private userdata:UsersdataService)
  {
    userdata.users().subscribe((data)=>{
    
      console.warn("data",data);
      this.users=data});
    
    //console.warn(this.users)
  }
}
