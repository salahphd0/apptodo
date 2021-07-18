import { Injectable } from '@angular/core';
import { title } from 'process';
import { Todo } from 'src/app/shared/todo';
const Todos: Todo[] = [
  {
  title: 'title',
  desc: 'description',
  date: new Date()},
  {
  title: 'title',
  desc: 'description',
  date: new Date()},
];
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private navParams: any={};
  constructor() { }
  getParams(){
    return this.navParams;
  }
  setParams(body){
    this.navParams=body;
  }
  getData(){
    return Todos;
  }
  postData(){

  }
  updateData(){

  }
  deleteData(){

  }
}
