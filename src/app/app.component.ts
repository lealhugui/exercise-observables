import { Component, OnInit } from '@angular/core';
import {ApiService} from "./api.service";
import {IPosts} from "./posts";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //injetando serviço a nível de componente, ao invés de injetar no AppModule(o que tornaria visível a todos os componentes)
  providers: [ApiService] 
})


export class AppComponent implements OnInit {

  //arry de posts do tipo IPost (interface)
  _postsArray: IPosts[]; 
  
  title = 'ApiService com Observables';

  //instanciando api.servive.ApiService() no construtor para tornar disponiveis seus metodos à classe AppComponent
  constructor(private apiService: ApiService) 
  {}

  //o método getPosts retorna nada por isso é do tipo "void"
  getPosts(): void {
    // utilizando o subscribe para retornar um http.get da Observable em api.service.(getPosts())  
    // sem o subscribe a Observable nao sera executada
    this.apiService.getPosts().subscribe(
      resultArray =>this._postsArray = resultArray,
      error => console.log("Error :: " + error )
    )
  }

  ngOnInit(): void {
    this.getPosts();
  }

}
