import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import {NoteService} from '../../service/note.service';
import {Note} from '../../note';



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  private note:Note;
  

  constructor( private noteService: NoteService,private router: Router) { }

  ngOnInit() {
    this.note=this.noteService.getter();

  }
  create(){
  
    if(this.note._id==undefined){

    
  
    this.noteService.createNote(this.note).subscribe(
      data=> {

        console.log(data);
        this.router.navigate(['/']);

      },error=>{
        console.log(error);

      }
    )
  }else{

    this.noteService.updateNote(this.note).subscribe(
      data=> {

        console.log(data);
        this.router.navigate(['/']);

      },error=>{
        console.log(error);

      }
    )
  }
  }
}



