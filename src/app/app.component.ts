import { Component,OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Resume';
  MainNavBar: any = true;
  MidNavagation: any;
  document: any;
  public buttonClick:boolean = false;
  isMobile : any

  constructor() {
    this.isMobile = !this.isTouchDevice();
    console.log(this.isMobile);
  }

  isTouchDevice() {
    return (('ontouchstart' in window) || (navigator.maxTouchPoints > 0));
  }

  observer = new IntersectionObserver((entries) => {
    if (entries[0].target.id === "Main-Navgation") {
      if (!entries[0].isIntersecting) {
        this.MainNavBar = true;
      }
      else this.MainNavBar = false;
    }
  }, {
    root: null,
    rootMargin: "-10px",
    threshold: 0
  })

  ngOnInit(): void {
    this.MidNavagation = document.getElementById("Main-Navgation");
    this.observer.observe(this.MidNavagation);
  }
}
