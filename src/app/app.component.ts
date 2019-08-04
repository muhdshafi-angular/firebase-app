import { Component } from '@angular/core';
import { AngularFireDatabase } from '../../node_modules/@angular/fire/database';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private db: AngularFireDatabase, private userService: UsersService) {
    this.db.list('/users').snapshotChanges().subscribe(users => {
      users.forEach(user => console.log('user:', user));
    });

    this.db.list('/tasks').snapshotChanges().subscribe(tasks => {
      tasks.forEach(task => {
        console.log('task:', task);
      });
    });

    this.userService.getUsers().subscribe(users => {
      users.forEach(user => console.log('user firestore:', user));
    });

  }
}
