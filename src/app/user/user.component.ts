import { Component,Input, input, Output , EventEmitter} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
const randomIndex = Math.floor(Math.random()*DUMMY_USERS.length);

// type user ={// with this we can define athers types also this can be used in alising 
//   id : string;
//   avatar: string;
//   name: string;
// }

// interface user { /// with this you can only define object type 
//   id : string;
// //   avatar: string;
// //   name: string;
// }
@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  // @Input({required : true}) id!: string;
  // @Input({required: true}) avatar!:string ;
  // @Input( {required: true}) name!:string ;

  
  @Input({required: true}) user!: {
    id : string;
    avatar : string;
    name : string;
  };
  @Input({required:true}) selected!: boolean;
  @Output() select = new EventEmitter<string>(); 

  // use of input and output function instead of Input and Output decorator for custome events 

  // avatar = input.required<string>();
  // name = input.required<string>();
  // id = input.required<string>(); 
  // select = output<string>();



  //' ! 'will tells in ts that some value will be  given to  this property 
  // selectedUser =signal(DUMMY_USERS[randomIndex]) ;

  // imagePath = computed(() =>'assets/users/' + this.selectedUser().avatar);
  // // get imagePath(){ //this is property not a function
  // //   return 'assets/users/' + this.selectedUser.avatar;
  // // }
      get imagePath(){
        return 'assets/users/' + this.user.avatar;
      }

  // onSelectUser(){
  //   const randomIndex = Math.floor(Math.random()*DUMMY_USERS.length);
  //   this.selectedUser.set(DUMMY_USERS[randomIndex]);
  // }
  onSelectUser(){
    this.select.emit(this.user.id);
  }

}
