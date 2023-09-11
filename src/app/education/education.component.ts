import { Component,Input} from '@angular/core';
import { DataServiceService } from '../Services/data-service.service';
import { LogicService } from '../Services/logic.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  EducationDetails: any;
  IsRightScreen  :any;
  Left:any = "Left"
  Right:any = "Right"
  @Input() IsMobile: boolean = false;

  constructor(private Data: DataServiceService, private Logic: LogicService) {
    this.EducationDetails = Data.getEducationDetails();

      if (screen.width <= 1024) this.IsRightScreen = false;
      else this.IsRightScreen = true;
  }

  LeftClick() {
    if (this.EducationDetails.length > 3) {
      this.Logic.SlideText(this.EducationDetails, "Right");
    }
  }
  RightClick() {
    if (this.EducationDetails.length > 3) {
      this.Logic.SlideText(this.EducationDetails, "Left");
    }
  }
}
