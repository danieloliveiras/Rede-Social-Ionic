import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Injectable()
export class UsuarioProvider {

  url: string = "http://localhost:3000/api/usuarios";
  urlp: string = "http://localhost:3000/api/posts";

  constructor(public http: Http) {
  }

  getToken(){
    return localStorage.getItem("token");
  }

  setToken(token){
    localStorage.setItem("token", token);
  }

  hasToken(){
    if(localStorage.getItem("token")){
      return true;
    }else{
      return false;
    }
  }

  adicionarUsuario(nome, email, senha){
    return this.http.post(this.url, {
      nome, email, senha
    }).map((response: Response) => (response.json()));
  }

  logar(email, senha){
    return this.http.post(this.url + "/signin", {
      email,
      senha
    }).map((response:Response) => {
      let r = response.json();
      this.setToken(r.token);
      return r;
    });
  }

  criarPost(texto){
    return this.http.post(this.urlp  + "?token=" + this.getToken(), {
      texto
    }).map((response: Response) =>(response.json()));
    
  }

  getPosts(){
    return this.http.get(this.urlp + "?token=" + this.getToken())
      .map((response:Response)=>(response.json()));
  }

  getLogado(){
    return this.http.get(this.url + "/logado" + "?token=" + this.getToken())
      .map((response:Response)=>(response.json()));
  }

  logout(){
    localStorage.setItem("token", null);
  }

}