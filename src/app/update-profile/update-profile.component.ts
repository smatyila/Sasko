import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import * as firebase from 'firebase';
import AuthCredential = firebase.auth.AuthCredential;

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  email: string;
  firstName: string;
  lastName: string;
  errorMessage: string;

  skill_1: string;
  skill_2: string;
  skill_3: string;
  skill_4: string;
  next: string;
  skills: Array<any>;

  constructor(public user: UserService) {
    this.user.getUser().subscribe(u => {
      this.email = u.email;
    });
  }

  ngOnInit() { }

  userProfile() {
    this.user.getUser().subscribe((u) => {
      console.log('User U', u);
      if (this.lastName && this.firstName) {
        u.updateProfile({
          displayName: this.firstName + '  ' + this.lastName,
          photoURL: ''
        });
      } else {
        this.errorMessage = 'Please complete the form';
      }
    });
  }

  addSkills() {
    this.skills = [this.skill_1, this.skill_2, this.skill_3, this.skill_4];
    this.user.addSkills(this.skills);
  }
  // addNext() {
  //   this.skills.push(this.next);
  //   this.user.addNext(this.skills);
  // }
}
