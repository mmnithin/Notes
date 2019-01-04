import { Injectable } from '@angular/core';
import {  HttpClient,HttpHeaders} from '@angular/common/http';
import { Note } from '../note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private note:Note;
  private baseUri:string="http://localhost:8080";
  private headers= new HttpHeaders().set('Content-Type','application/json');



  constructor(private http:HttpClient) { }

  createNote(note:Note){
    return (this.http.post(this.baseUri+'/create' ,note,{headers:this.headers}));

  }

  readNotes(){
    return this.http.get(this.baseUri+'/read' ,{headers:this.headers});

  }

  updateNote(note:Note){
    return (this.http.put(this.baseUri+'/update' ,note,{headers:this.headers}));

  }

  deleteNote(id:string){
    return this.http.delete(this.baseUri+'/delete/'+id ,{headers:this.headers});

  }

    setter(note:Note){
      this.note=note;

    }
  getter(){
    return this.note;
    
  }
}
