import { Component,OnInit,Input } from '@angular/core';
import { FormDatas } from '../Model/form-data';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { DataServiceService } from '../Services/data-service.service';

@Component({
  selector: 'app-extracurricular',
  templateUrl: './extracurricular.component.html',
  styleUrls: ['./extracurricular.component.css']
})

export class ExtracurricularComponent implements OnInit {
  ButtonClick: any = false
  @Input() ContactButton: boolean = false;
  IsSubmit: any = false;
  Error: any = false;
  SuccessMessage: any;
  ContactDetails: any;
  Left: any = "Left";
  FormDeatils = new FormDatas();

  constructor(private Data: DataServiceService, private firestore:Firestore) {
    this.ContactDetails = Data.getContactDetails();
  }

  ngOnInit(): void {
    
  }

  SaveForm(Details: any) {
    if (Details.valid) {
      this.ButtonClick = false;
      this.SaveDataInServer(Details.value);
      Details.reset();

      setTimeout(() => {
        this.IsSubmit = false;
      }, 5000);
    }
    else {
      this.ButtonClick = true;

      setTimeout(() => {
        this.ButtonClick = false;
      }, 5000);

    }
  }

  Contact() {
    if (!this.ContactButton) {
      this.ContactButton = true;
    }
  }

  SaveDataInServer(Details: any){
    Details.submitDate = new Date();
    const collectionInstance = collection(this.firestore, Details.YourName.toLowerCase());

    addDoc(collectionInstance,Details).then(() => {
      this.IsSubmit = true;
      this.SuccessMessage = "Thank you " + Details.YourName + " for your message."
    })
    .catch((error) =>{
      this.Error = true;
      this.SuccessMessage = "Unable to Process. Please Try again"
    })

  }
}
