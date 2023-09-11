import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  isMobile : any
  optimizedImage :any

  constructor() {
    this.isMobile = window.matchMedia('only screen and (max-width: 768px)').matches;
    this.optimizedImage = this.imageOptimized();
  }

  imageOptimized(){

    if(!this.isMobile){
      return [{ profilePhoto: ["assets/Images/MainPhoto1.jpg", "assets/Images/MainPhoto2.jpg", "assets/Images/MainPhoto3.jpg"] },
        { projectPhoto: {
          Infosys1 : ["assets/Images/Project/1.png", "assets/Images/Project/2.png"],
          Infosys2 : ["assets/Images/Project1/1.png", "assets/Images/Project1/2.png"],
          Infosys3 : ["assets/Images/Project2/1.png", "assets/Images/Project2/2.png"],
          Event : ["assets/Images/Project3/1.png", "assets/Images/Project3/2.png"],
        } },

        ]

    }
    else{
      return [{ profilePhoto: ["assets/Images/MainPhoto1.jpg", "assets/Images/MainPhoto2.jpg", "assets/Images/MainPhoto3.jpg"] },
      { projectPhoto: {
        Infosys1 : ["assets/Images/Project/MobilePhoto/1.png", "assets/Images/Project/MobilePhoto/2.png"],
        Infosys2 : ["assets/Images/Project1/MobilePhoto/1.png", "assets/Images/Project1/MobilePhoto/2.png"],
        Infosys3 :["assets/Images/Project2/MobilePhoto/1.png", "assets/Images/Project2/MobilePhoto/2.png"],
        Event : ["assets/Images/Project3/MobilePhoto/1.png", "assets/Images/Project3/MobilePhoto/2.png"],
      } },

      ]

    }
  }

  getNavigationbarData() {
    return [
      { id: "#About", Name: "About" },
      { id: "#Education", Name: "Education" },
      { id: "#Experience", Name: "Experience" },
      { id: "#Skills", Name: "Skill" },
      { id: "#Projects", Name: "Project" },
    ]
  }

  getSociamMediaName() {
    return [{ Name: "linkedin", link: "https://linkedin.com/" },
    { Name: "leetcode", link: "https://leetcode.com/" },
    { Name: "Github", link: "https://github.com/" }
    ]
  }

  getBackgroundImage() {
    return this.optimizedImage[0].profilePhoto
  }

  getUserName() {
    return "Your Name"
  }

  getQuotes() {
    return [{ Quote: "Do What You Love" },
    { About: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." }
    ]
  }

  getFeature() {
    return [
      { Name: "backend ", Count: "02" },
      { Name: "development", Count: "01" },
      { Name: "frontend", Count: "03" }
    ]
  }

  getEducationDetails() {
    return [
      { Year: "DD-MM-YYYY", Name: "College Name", CourseName: "CourseName", Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
      { Year: "DD-MM-YYYY", Name: "College Name", CourseName: "CourseName", Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
      { Year: "DD-MM-YYYY", Name: "College Name", CourseName: "CourseName", Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
      { Year: "DD-MM-YYYY", Name: "College Name", CourseName: "CourseName", Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." }
    ]
  }

  getExperienceDetails() {
    return [
      { Year: "DD-MM-YYYY", Name: "organization Name", CourseName: "Position", Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
      { Year: "DD-MM-YYYY", Name: "organization Name", CourseName: "Position ", Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
      { Year: "DD-MM-YYYY", Name: "organization Name", CourseName: "Position ", Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
    ]
  }

  getSkill() {
    return [
      { SkillType: "FrontEnd", SkillName: [{ Skill: "Html", Progress: "70" , Icon:"assets/Images/Skills/html.png" }, { Skill: "Css", Progress: "60" , Icon:"assets/Images/Skills/css.png" }, { Skill: "JavaScript", Progress: "65" , Icon:"assets/Images/Skills/js.png" }, { Skill: "TypeScript", Progress: "55" , Icon:"assets/Images/Skills/typescript.png" }, { Skill: "Angular", Progress: "60" , Icon:"assets/Images/Skills/angular.png" }] },
      { SkillType: "BackEnd", SkillName: [{ Skill: "C#", Progress: "70", Icon:"assets/Images/Skills/CShrap.png" }, { Skill: ".Net", Progress: "65", Icon:"assets/Images/Skills/Dotnet.png" }, { Skill: ".Net Core", Progress: "60", Icon:"assets/Images/Skills/DotNetCore.png" }, { Skill: "ADO", Progress: "50", Icon:"assets/Images/Skills/adoNet.png" }, { Skill: "Entity Framework", Progress: "50", Icon:"assets/Images/Skills/EntityFramework.png" }, { Skill: "Sql Server", Progress: "50", Icon:"assets/Images/Skills/sqlserver.png" }] },
      { SkillType: "Others", SkillName: [{ Skill: "Azure Devops", Progress: "40", Icon:"assets/Images/Skills/devops.png" }, { Skill: "RabbitMQ", Progress: "40", Icon:"assets/Images/Skills/rabbitmq.png" }] },
    ]
  }

  getProjectDetails() {
    return [
      { ProjectType: "ProjectType", ProjecDetails: { Year: "DD-MM-YYYY", For: "organizationName", ProjectName: "ProjectName", ProjectSkills:["C#",".NET Core","RabbitMQ","Entity FrameWork","SQL Server"], Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." }, ProjectImage: this.optimizedImage[1].projectPhoto.Infosys1 },
      { ProjectType: "ProjectType", ProjecDetails: { Year: "DD-MM-YYYY", For: "organizationName", ProjectName: "ProjectName", ProjectSkills:[".Net","HTML","CSS","JavaScript","ADO.Net","SQL Server"], Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." }, ProjectImage: this.optimizedImage[1].projectPhoto.Infosys2 },
      { ProjectType: "ProjectType", ProjecDetails: { Year: "DD-MM-YYYY", For: "organizationName", ProjectName: "ProjectName", ProjectSkills:[".Net","HTML","CSS","JavaScript","ADO.Net","SQL Server"], Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." }, ProjectImage: this.optimizedImage[1].projectPhoto.Infosys3 },
      { ProjectType: "ProjectType", ProjecDetails: { Year: "DD-MM-YYYY", For: "organizationName", ProjectName: "ProjectName", ProjectSkills:["designing","planning","Cost analysis","Manufacturing"], Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." }, ProjectImage: this.optimizedImage[1].projectPhoto.Event },
    ]
  }

  getContactDetails() {
    return [
      { ContactName: "E-mail ID", ContactDetails: "XXXXXXXX@gmail.com" },
      { ContactName: "Current Location", ContactDetails: "Earth" },
    ]
  }
}