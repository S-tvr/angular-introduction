import { Component, inject, OnInit } from '@angular/core';
import { Jokes } from 'src/app/shared/services/jokes';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-http-client-example',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './http-client-example.html',
  styleUrl: './http-client-example.css'
})
export class HttpClientExample implements OnInit {
 jokesService = inject(Jokes)

 dadJoke : String = ""
 ChuckJoke: String = ""

 ngOnInit():void{
  this.jokesService.getDadJokes()
    .subscribe((data) => {
      console.log("Dad Joke Obj ->", data)
      console.log("Dad Joke ->", data.joke)
      this.refreshDadJoke()
    })

  this.jokesService.getChuckNorrisJoke()
  .subscribe((data) => {
    console.log("Chuck Joke Obj ->", data)
    console.log("Chuck Joke ->", data.value)
    this.refreshChuckJoke()
  })

 }

  refreshDadJoke(){
  this.jokesService.getDadJokes()
    .subscribe((data) => {
      console.log("Dad Joke ->", data)
      this.dadJoke = data.joke
    })
 }

 refreshChuckJoke() {
  this.jokesService.getChuckNorrisJoke()
  .subscribe((data) => {
    console.log("Chuck Joke ->", data)
    this.ChuckJoke = data.value
  })
 }
}
