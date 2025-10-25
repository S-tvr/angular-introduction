import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DadJoke } from '../interfaces/jokes';
import { JackNorrisJoke } from '../interfaces/jokes';

const DAD_JOKES_API_URL = "https://icanhazdadjoke.com/"
const JACK_NORRIS_JOKES_API_URL = "https://api.chucknorris.io/jokes/random"

@Injectable({
  providedIn: 'root'
})
export class Jokes {
  http: HttpClient = inject(HttpClient)   // κληρονομεί


  getDadJokes() {
    return this.http.get<DadJoke>(DAD_JOKES_API_URL, {
      headers:{
        Accept: "application/json"
      }
    })
  }

  getChuckNorrisJoke() {
    return this.http.get<JackNorrisJoke>(JACK_NORRIS_JOKES_API_URL, {
      headers:{
        Accept: "application/json"
      }
    })
  }
}
