import { Component, EventEmitter, Input, Output } from '@angular/core';

// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// };

interface User {
  id: string;
  avatar: string;
  name: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // avatar = input.required<string>(); //input needs to import first
  // @Input({ required: true }) name!: string;
  @Output() select = new EventEmitter();
  // select = output<string>(); //output needs to import first

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar();
  // });

  onSelectUser() {
    console.log('clicked');
    this.select.emit(this.user.id);
  }
}
