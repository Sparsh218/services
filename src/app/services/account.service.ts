import { Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";
import { Account } from "../model/account";

@Injectable({
    providedIn : 'root'
})
export class AccountService {

    accountList: Account[] = [];

    constructor(private logging: LoggingService) {}

    addAccount(name: string, status: string) {
        this.accountList.push(new Account(name, status));
    }

    getAccountList() {
        return this.accountList;
    }

    updateAccountStatus(id: number, status: string) {
        this.accountList.at(id).status = status;
    }
}