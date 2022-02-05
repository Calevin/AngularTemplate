import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/core/authorization/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;
  userName: String | undefined;

  constructor(private tokenStorage: TokenStorageService) {  }

  ngOnInit(): void {
    this.tokenStorage.getLoggedInName.subscribe(name => {
      if(name){
        this.userName = name;
        this.isLoggedIn = true;
      } 
    });
    
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }
  }

  public signOut(){
    this.tokenStorage.signOut();
    this.isLoggedIn = false;
    window.location.reload();
  }
}
