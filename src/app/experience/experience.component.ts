import { Component, Input} from '@angular/core';
import { DataServiceService } from '../Services/data-service.service';
import { LogicService } from '../Services/logic.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  BoxText :any = "experience"
  ExperienceDetails: any;
  IsRightScreen  :any;
  Left:any = "Left"
  Right:any = "Right"
  @Input() IsMobile: boolean = false;

  constructor(private Data: DataServiceService, private Logic: LogicService) {
    this.ExperienceDetails = Data.getExperienceDetails();

      if (screen.width <= 1024) this.IsRightScreen = false;
      else this.IsRightScreen = true;
  }

  LeftClick() {
    if(this.ExperienceDetails.length >3){
      this.Logic.SlideText(this.ExperienceDetails, "Right");
    }
  }
  RightClick() {
    if(this.ExperienceDetails.length >3){
      this.Logic.SlideText(this.ExperienceDetails, "left");
    }
  }
}
