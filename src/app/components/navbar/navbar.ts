import { Component, inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { MatIconModule } from '@angular/material/icon';
import { UserService } from 'src/app/shared/services/user';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, MatIconModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  userService = inject(UserService)
  user = this.userService.user$

  logout() {
    console.log("Logout")
  }

}
