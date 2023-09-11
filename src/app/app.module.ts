import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillComponent } from './skill/skill.component';
import { AchievementComponent } from './achievement/achievement.component';
import { ExtracurricularComponent } from './extracurricular/extracurricular.component';
import { MidNavComponent } from './mid-nav/mid-nav.component';
import { PhotoAreaComponent } from './photo-area/photo-area.component';
import { DataServiceService } from './Services/data-service.service';
import { LogicService } from './Services/logic.service';
import { MatIconModule } from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SplitPipe } from './Pipes/split.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { environment } from '../environments/environment';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    NavigationbarComponent,
    FooterComponent,
    AboutComponent,
    EducationComponent,
    ExperienceComponent,
    SkillComponent,
    AchievementComponent,
    ExtracurricularComponent,
    MidNavComponent,
    PhotoAreaComponent,
    SplitPipe,
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    NgCircleProgressModule.forRoot({
      // set defaults here
      animationDuration: 300,
    }),
  ],
  providers: [DataServiceService,LogicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
