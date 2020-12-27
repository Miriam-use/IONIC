import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { AuthService,  } from "../services/auth.service";
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { CallNumber } from '@ionic-native/call-number/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  idSelected:any; //Esta variable se cargará cuando elijamos un alumno, así controlamos si es un alumno nueva o para actualizar
  show:boolean; //Esta variable contralará cuando queremos que se muestren los campos para introducir o actualizar un alumno
  heroes = []; //Array donde cargaremos los alumnos que hay en la base de datos y las mostraremos en nuestra page
  heroe = {id: null, nombre:null, email:null, telefono:null, matricula:null}; //Declaramos un objeto vacio de alumno

  tabs: any;
  tabIndex: number;
  reorder: boolean;

  constructor(private router : Router, public authService : AuthService, private db: AngularFireDatabase) {
    this.show = false; //Inicializamos la variable a false, para que por defecto no se muestren los campos
    this.idSelected = null; // Inicializamos a null idselected, que significará que no tenemos ningun alumno existente selecionada.

    authService.getHeroes()
    .subscribe(heroes => {
      this.heroes = heroes;
    });//Hacemos una llamada a nuestro servicio, al metodo getHeroes y nos devolvera toda los alumnos que hay en nuestra abase de datos
    // y las cargaremos en nuestro array
  }

  ngOnInit() {}

  saveHeroe(){
    if(this.idSelected != null){//si es diferente a null actualizamos, sino creamos uno nuevo
      this.authService.updateHeroe(this.heroe);
    }else{
      this.authService.saveHeroe(this.heroe);
    }

    this.clear();
  }

  selecHeroe(id : string){ //selecionamos el alumno y mostramos los campos
    this.show = true;

    this.idSelected = id; //cogemos su id

    let receivedHeroe : any; //declaramos un objeto vacio que será el que reciba la información de el alumno que seleccionamos

    this.authService.getHeroe(id) //hacemos uso de la funcion getHeroe de nuestro servicio
    .subscribe(heroe => {
      receivedHeroe = this.heroe; //el objeto vacio recibe la variable
      this.heroe = receivedHeroe; //Y se lo asignamos al objeto heroe los valores que se han retornado del servicio
    });
  }

  removeSelectedHeroe(){
    //Llamamos a la funcion removeHeroe de nuestro servicio, le pasamos el idselected y se borra ese alumno
    this.authService.removeHeroe(this.idSelected);
    this.clear();
  }

  clear(){
    //inicializamos los valores de las variables una vez hecha una acción
    this.show = false;
    this.idSelected = null;
    this.heroe.id = null;
    this.heroe.nombre = null;
    this.heroe.email = null;
    this.heroe.telefono = null;
    this.heroe.matricula = null;
  }

  share() {
    let list:string = this.tabs[this.tabIndex].label + ":\n";
    this.tabs[this.tabIndex].list.forEach((task, index) => {
      list += (index+1) + ". " + task.task + " - " + task.date + "\n";
    });
  }

  

}
