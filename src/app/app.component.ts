import { Component } from '@angular/core';
import{ NgFor} from '@angular/common'
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],//NgFor
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
 title(title: any) {
   throw new Error('Method not implemented.');
 }
 users = DUMMY_USERS;
selectedUserId ?: string;
get selectedUser(){
  return this.users.find((user) => user.id === this.selectedUserId)!;
}

 onSelectUser(id : string) {
  this.selectedUserId = id;
  
 }
}










// export class HeaderComponent {}

// this is how we can use Ngfor without explicitlt importing NgFor.......


// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { CommonModule } from '@angular/common';
// import { AppComponent } from './app.component';
// import { HeaderComponent } from './header/header.component';
// import { UserComponent } from './user/user.component';
// import { TasksComponent } from './tasks/tasks.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     HeaderComponent,
//     UserComponent,
//     TasksComponent
//   ],
//   imports: [
//     BrowserModule,
//     CommonModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export not use `standalone: true`:**

// ```typescript
// import { Component } from '@angular/core';
// import { DUMMY_USERS } from './dummy-users';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class AppComponent {
//   users = DUMMY_USERS;
//   selectedUser: any;

//   onSelectUser(user: any) {
//     this.selectedUser = user;
//   }
// }