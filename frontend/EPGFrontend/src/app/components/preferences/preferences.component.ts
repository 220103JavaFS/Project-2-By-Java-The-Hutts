import { Component, OnInit } from '@angular/core';
import { preference } from 'src/app/models/preference';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.css']
})
export class PreferencesComponent implements OnInit {

  preferenceList!:preference[];


  getPreference(){
    this.preferenceList=[
    {id:1,name:"recreational",selected:false},
    {id:2,name:"social",selected:false},
    {id:3,name:"diy",selected:false},
    {id:4,name:"charity",selected:false},
    {id:5,name:"cooking",selected:false},
    {id:6,name:"relaxation",selected:false},
    {id:7,name:"music",selected:false},
    {id:8,name:"busywork",selected:false},
    ]}

    onChange(){
      console.log(this.preferenceList)
    }
  constructor() { }

  ngOnInit(): void {
    this.getPreference
  }



}
