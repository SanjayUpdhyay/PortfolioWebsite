import { Component } from '@angular/core';
import { DataServiceService } from '../Services/data-service.service';

@Component({
  selector: 'app-mid-nav',
  templateUrl: './mid-nav.component.html',
  styleUrls: ['./mid-nav.component.css'],
  providers: [DataServiceService]
})
export class MidNavComponent {
public navItem : any;
public Container:string = "Nav-Container";
public Name:string = "name";
public MainList:string = "Nav-MainList";
public List:string = "Nav-list";
  constructor(private Data: DataServiceService){
    this.navItem = Data.getNavigationbarData();
  }

}
