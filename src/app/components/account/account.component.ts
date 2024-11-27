import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { statusDropdown } from '../../util/data';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {

  statusArr = statusDropdown;
  accounts = [];
  
  constructor(private accService: AccountService) {
    this.accounts = this.accService.getAccountList();
  }

  updateAccountStatus(id: number, status: string) {
    this.accService.updateAccountStatus(id, status);
  }
  
}
