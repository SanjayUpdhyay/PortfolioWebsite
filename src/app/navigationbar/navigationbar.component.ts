import { Component } from '@angular/core';
import { DataServiceService } from '../Services/data-service.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.css']
})
export class NavigationbarComponent {

  public Container: string = "Nav-Container";
  public Name: string = "name";
  public MainList: string = "Nav-MainList";
  public List: string = "Nav-list";
  navItem: any;
  UserName: any;
  IsLargeScreen: any = false;


  constructor(private Data: DataServiceService) {
    this.navItem = Data.getNavigationbarData();
    this.UserName = Data.getUserName();

    const Interval = interval(100);
    Interval.subscribe(() => {
      if (screen.width <= 500) this.IsLargeScreen = false;
      else this.IsLargeScreen = true;
    })
  }
}
