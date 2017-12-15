import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  headMessage : string;
  selectedRow : Number;
  setClickedRow : Function;
  
  games = [
    {
      "id":"1",
      "name": "DOTA NAGOI 2",
      "genre": "Strategy"
    },
    {
      "id":"2",
      "name": "AOE SERINEE 3",
      "genre": "Strategy"
    },
    {
      "id":"3",
      "name": "GTA David 5",
      "genre": "RPG"
    },
    {
      "id":"4",
      "name": "Farous Cry 3",
      "genre": "Action"
    },
    {
      "id":"5",
      "name": "GTA San Andreas",
      "genre": "RPG"
    },
    {
      "id":"6",
      "name": "Hitman Golchi",
      "genre": "Action"
    },
    {
      "id":"7",
      "name": "NFS MW Miyami",
      "genre": "Sport"
    },{
      "id":"8",
      "name": "Fifa Foot 16",
      "genre": "Sport"
    },{
      "id":"9",
      "name": "NFS Sengreo 2",
      "genre": "Sport"
    },{
      "id":"10",
      "name": "Witcher Assasins",
      "genre": "Adventure"
    }
  ];

constructor()
{
  this.setClickedRow = function(index){
    this.selectedRow = index;
}
}
  
  //sorting
  key: string = 'name'; //set default
  reverse: boolean = false;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }

  //initializing p to one
  p: number = 1;
  

}
