import { Component } from '@angular/core';
import { DataServiceService } from '../Services/data-service.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent {
  BoxText :any = "Skill"
  path:string = "assets/Images/Human.jpg";
  SkillType:any;
  SkillName:any;
  SelectButton:any
  animationStart:boolean = false; 
  Stroke:number = 3;
  Diameter:any = 35;
  font:any = 18;

  constructor(private Data:DataServiceService){
    this.SkillType = Data.getSkill();
    this.SelectButton = this.SkillType[0].SkillType;
    this.SkillName = this.SkillType[0].SkillName;

    this.Diameter = Math.max(0.03255*screen.width,this.Diameter);
    this.Stroke = Math.max(0.00325*screen.width,this.Stroke);
  }

  mouseEnter(){
    this.animationStart = true;
  }

  mouseLeave(){
  this.animationStart = false;
  }

  ChangeData(Value:any){
    if(this.SkillName != Value.SkillName){
      this.SelectButton = (Value.SkillType);
      this.SkillName = null;
      this.SkillName = Value.SkillName;
    }
  }
}
