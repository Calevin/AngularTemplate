import { Component, OnInit } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/services/auth-service/models/user';
import { AuthService } from 'src/app/services/auth-service/auth.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {
  user: User = new User;

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this
      .authService
      .me()
      .subscribe({
        next: data => {
          console.log(data);
          this.user.username = data.username;
        },
        error: err => {
          console.error(JSON.parse(err.error).message);
        }        
      });
  }

}
