import { Component, OnInit } from '@angular/core';
import {NoteService} from '../../service/note.service';
import {Note} from '../../note';
import {Router} from'@angular/router';
import { error } from '@angular/compiler/src/util';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

   public notes:Note[];


  constructor(private noteService:NoteService ,private router:Router) { }

 
  ngOnInit():void {
    this.noteService.readNotes().subscribe((data)=>{
    this.notes=JSON.parse(JSON.stringify(data));
    
    }
  );
  }

  update(note){
    this.noteService.setter(note);

    this.router.navigate(['/create']);
  }
  

  delete(note){
    this.noteService.deleteNote(note._id).subscribe(
      data=>{

        this.notes.splice(this.notes.indexOf(note),1);

      },
      error=>{

      }
    )
  }
}
