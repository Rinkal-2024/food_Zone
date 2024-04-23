import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/models/User';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  user!: User

  constructor(private userService : UserService){}


  ngOnInit(): void {
    this.user = this.userService.currentUser
    
  }
  changePhoneNumber() {
    // Logic for changing phone number
  }

  cancel() {
    // Logic for canceling edit profile
  }

  updateProfile() {
    // Logic for updating profile
  }

}
