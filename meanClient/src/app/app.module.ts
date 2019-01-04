import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './components/create/create.component';
import { ListComponent } from './components/list/list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule ,Routes } from '@angular/router';
import { NoteService} from './service/note.service';
import {  HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';


const AppRoutes:Routes=[
  {path:'',component:ListComponent},
  {path:'create',component:CreateComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ListComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,  
    FormsModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
