import { Component, OnInit } from '@angular/core';
import { User } from '../../user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  ngOnInit(): void {
    this.users = [
      { id: 1, name: 'Alice', email: 'alice@example.com', role: 'Admin' },
      { id: 2, name: 'Bob', email: 'bob@example.com', role: 'User' },
      { id: 3, name: 'Charlie', email: 'charlie@example.com', role: 'User' },
      { id: 4, name: 'Diana', email: 'diana@example.com', role: 'Admin' }
    ];
  }
}
