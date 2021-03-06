import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth/auth.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user = {
    email: '',
    password: ''
  };
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.auth.signIn(this.user).subscribe(
      response => {
        this.auth.setTokenLocal(response['token']).then(() => {
          this.auth.getTokenLocal().then((token) => {
              this.auth.token = token.value;
              this.router.navigateByUrl('/home');
          });
        });
        this.auth.setNameLocal(response['user'].name);
      },
      error => console.log(error)
    );

  }
}
