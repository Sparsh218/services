import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AddaccountComponent } from "./components/addaccount/addaccount.component";
import { AccountComponent } from "./components/account/account.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AddaccountComponent, AccountComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'services-injection';

  accountAdded(name: string) {
    console.log(name);
  }
}
