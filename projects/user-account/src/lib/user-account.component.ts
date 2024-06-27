import { Component, OnInit } from '@angular/core';
import { UserAccountService } from './user-account.service';
@Component({
  selector: 'lib-user-account',
  standalone: true,
  imports: [],
  template: `
    <p>
      user-account works!
    </p>
    <div>
  <h1>Account List</h1>
  <form (submit)="addAccount()">
    <input type="text"  placeholder="Account Name" name="name" required>
    <input type="number" placeholder="Amount" name="amount" required>
    <button type="submit">Add Account</button>
  </form>
  <ul>
    <li ngFor="let account of accounts">
      {{ accounts }}: {{ accounts }}
    </li>
  </ul>
</div>

  `,
  styles: ``
})
export class UserAccountComponent implements OnInit {
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
