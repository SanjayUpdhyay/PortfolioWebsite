import { Component } from '@angular/core';
import { DataServiceService } from '../Services/data-service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  UserName: any;
  SocialMedia: any;

  constructor(private Data: DataServiceService) {
    this.UserName = Data.getUserName();
    this.SocialMedia = Data.getSociamMediaName();
  }
}
