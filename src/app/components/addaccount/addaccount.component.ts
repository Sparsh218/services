import { Component, EventEmitter, Output } from '@angular/core';
import { statusDropdown } from '../../util/data';
import { CommonModule } from '@angular/common';
import { AccountService } from '../../services/account.service';
import { Account } from '../../model/account';

@Component({
  selector: 'app-addaccount',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './addaccount.component.html',
  styleUrl: './addaccount.component.css'
})
export class AddaccountComponent {

  @Output() onAccountAdd = new EventEmitter<string>();

  statusArr = statusDropdown;
  accounts = [];
  
  constructor(private accService: AccountService) {
    this.accounts = this.accService.getAccountList();
  }

  addAccount(name: string, status: string) {
    this.accService.addAccount(name, status);
    this.onAccountAdd.emit(name);
  }
}
