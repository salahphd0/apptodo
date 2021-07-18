import { Todo } from './../../shared/todo';
import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { DataService } from 'src/app/services/data/data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  todos: Todo[];

  constructor(
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.getData();
  }
  createTodo(){
    this.navCtrl.navigateForward('/order-config');
  }
  getData(){
    this.todos=this.dataService.getData();
  }
  detail(todo: Todo){
    this.dataService.setParams({
      todo
    });
    this.navCtrl.navigateForward('/order-detail');
  }
  async delete(index: number){
    let alert = await this.alertCtrl.create({
      header :'confirm Deleting',
      message : 'Are you sure for deleting?',
      mode :'ios',
      buttons :[
        {
          text:'No',
          role:'cancel'
        },
        {
          text :'yes',
          handler :()=>{
            this.todos.splice(index,1);
          }
        }
      ]
    });
    await alert.present();
  }
  edit(todo: Todo){
    this.dataService.setParams({
      todo
    });
    this.navCtrl.navigateForward('/order-config');
  }
}
