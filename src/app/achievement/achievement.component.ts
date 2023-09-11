import { Component,Input } from '@angular/core';
import { DataServiceService } from '../Services/data-service.service';
import { LogicService } from '../Services/logic.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.component.html',
  styleUrls: ['./achievement.component.css']
})
export class AchievementComponent {
  BoxText: any = "Projects";
  mainImage: any;
  Images: any;
  FullDetails: any;
  ProjectDeatils: any;
  Enable: any = false;
  ProjectEnable: any = false;
  SelectButton: any;
  IsRightScreen: any;
  Left: any = "Left"
  Right: any = "Right"
  IsAnimation:any;
  @Input() IsMobile: boolean = false;

  constructor(private Data: DataServiceService, private Logic: LogicService) {
    this.FullDetails = Data.getProjectDetails();
    if (this.FullDetails.length > 3) this.ProjectEnable = true;
    this.Images = this.FullDetails[0].ProjectImage;
    if (this.Images.length > 3) this.Enable = true;
    this.ProjectDeatils = this.FullDetails[0].ProjecDetails;
    this.SelectButton = this.FullDetails[0];
    this.mainImage = this.Images[0];

    if (screen.width <= 1024) {
      this.IsRightScreen = false;
      this.Enable = false;
    }
    else {
      this.IsRightScreen = true;
    }
  }

  ChangeMainImage(Image: any) {
    if (this.mainImage != Image) {
      this.mainImage = Image;
    }
  }

  ChangeProject(Button: any) {
    if (this.SelectButton != Button) {
      this.Images = Button.ProjectImage;
      this.ProjectDeatils = Button.ProjecDetails;
      this.SelectButton = Button;
      if (Button.ProjectImage.length > 3) this.Enable = true;
      else this.Enable = false;
      this.mainImage = this.Images[0];

      this.IsAnimation = true;

      setTimeout(() => {
        this.IsAnimation = false;
      }, 500);

    }
  }

  ImgLeftClick() {
    this.Logic.SlideText(this.Images, "Right");
    this.mainImage = this.Images[0];
  }

  ImgRightClick() {
    this.Logic.SlideText(this.Images, "Left");
    this.mainImage = this.Images[0];
  }

  ProjectLeftClick() {
    this.Logic.SlideText(this.FullDetails, "Right");
    this.Images = this.FullDetails[0].ProjectImage;

    if (this.IsRightScreen) {
      if (this.Images.length > 3) this.Enable = true;
      else this.Enable = false;
    }

    this.ProjectDeatils = this.FullDetails[0].ProjecDetails;
    this.SelectButton = this.FullDetails[0];
    this.mainImage = this.Images[0];
  }

  ProjectRightClick() {
    this.Logic.SlideText(this.FullDetails, "Left");
    this.Images = this.FullDetails[0].ProjectImage;

    if (this.IsRightScreen) {
      if (this.Images.length > 3) this.Enable = true;
      else this.Enable = false;
    }

    this.ProjectDeatils = this.FullDetails[0].ProjecDetails;
    this.SelectButton = this.FullDetails[0];
    this.mainImage = this.Images[0];
  }
}
