import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import {NoteService} from '../../service/note.service';
import {Note} from '../../note';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private router:Router ,private noteService:NoteService) { }

  ngOnInit() {
  }

  new(event:any){
    event.preventDefault();
    this.noteService.setter(new Note());
    this.router.navigate(['/create']);

  }
}
