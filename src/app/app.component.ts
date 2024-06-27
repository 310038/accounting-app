import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserAccountService } from '../../projects/user-account/src/lib/user-account.service';
import { UserAccountComponent } from "../../projects/user-account/src/lib/user-account.component";
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, UserAccountComponent]
})
export class AppComponent implements OnInit {
  accounts: any[] = [];
  newAccount = {
    name: '',
    amount: 0
  };

  constructor(private userAccountService: UserAccountService) { }

  ngOnInit(): void {
    this.loadAccounts();
  }

  loadAccounts(): void {
    this.userAccountService.getAccounts().subscribe(data => {
      this.accounts = data;
    });
  }

  addAccount(): void {
    this.userAccountService.addAccount(this.newAccount).subscribe(() => {
      this.loadAccounts();
      this.newAccount = { name: '', amount: 0 };
    });
  }
}
