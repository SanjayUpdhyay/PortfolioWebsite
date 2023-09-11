import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { interval, timeInterval } from 'rxjs';
import { DataServiceService } from '../Services/data-service.service';
import { LogicService } from '../Services/logic.service';

@Component({
  selector: 'app-photo-area',
  templateUrl: './photo-area.component.html',
  styleUrls: ['./photo-area.component.css']
})

export class PhotoAreaComponent implements OnInit {
@Output() public contactMe = new EventEmitter();
  SocialMedia: any;
  UserName: any;
  Feature:any;
  CenterValue : any;
  Background : any;
  path: any ;
  LargeScreen: any;
  ButtonText : string = "Contact me";
  CssClass: string = "Main-Img";
  ImageAnimation:string ="main-Img";

  constructor(private Data: DataServiceService , private Logic : LogicService) {
    this.SocialMedia = Data.getSociamMediaName();
    this.UserName = Data.getUserName();
    this.Feature = Data.getFeature();
    this.Background = Data.getBackgroundImage();

    if (screen.width <= 1024) this.LargeScreen = false;
    else this.LargeScreen = true;
    
  }
  
  ngOnInit(): void {
    var Photocount:number = 0;
    this.path = this.Background[Photocount];
    const Interval = interval(3000);
    this.CenterValue = this.Feature[1];
    Interval.subscribe(() => {
      Photocount = this.Logic.SlideLogic(this.Background,Photocount);
      this.Logic.SlideText(this.Feature,"left");
      this.path = this.Background[Photocount];
      this.CenterValue = this.Feature[1];
    })
  }

  ButtonClick(){
    this.contactMe.emit(true);
  }
}
