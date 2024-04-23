import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/models/User';
import { ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
toggleEditingProfile() {
throw new Error('Method not implemented.');
}
  user!: User
  selectedFile!: File | undefined;

  constructor(private userService : UserService , private toastrService : ToastrService){}

  ngOnInit(): void {
    this.user = this.userService.currentUser
  }

 editingProfile = false;
 editedUser = { ...this.user };

  

  changePhoneNumber() {
    // Implement change phone number functionality
  }

  cancel() {
    this.editingProfile = false;
    this.editedUser = { ...this.user }; // Reset editedUser to original user object
  }

  updateProfile() {
    // Implement profile update functionality
    // Update user object with editedUser data
    // this.user = {...this.editedUser };
    this.editingProfile = false;
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] as File;
  }
  uploadProfilePicture(): void {
    if (!this.selectedFile) {
      alert('Please select a file.');
      return;
    }
    this.user!.profilePictureUrl = URL.createObjectURL(this.selectedFile);
    // Reset selectedFile to allow for uploading a new file
    this.selectedFile = undefined ;
    this.toastrService.success('Profile picture uploaded successfully');     
  }
}
