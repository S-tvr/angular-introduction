import { Injectable,inject, signal, effect } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { User, Credentials, LoggedInUser } from '../interfaces/user';
import { Router } from '@angular/router';
import { jwtDecode } from 'node_modules/jwt-decode/build/cjs';

const API_URL = `${environment.apiURL}/api/users`
const API_URL_AUTH = `${environment.apiURL}/api/auth`

@Injectable({
  providedIn: 'root'
})
export class UserService {
  http: HttpClient = inject(HttpClient)
  router = inject(Router)
  user$ = signal<LoggedInUser | null>(null)

  // A constructor is a special method in a class that runs automatically when you create an instance of that class.
  // thats why I use this snippet of code inside a constructor
  constructor () {
    const access_token = localStorage.getItem('access_token')
    if (access_token) {
      const decodedTokenSubject = jwtDecode(access_token) as unknown as LoggedInUser
      this.user$.set({
        username: decodedTokenSubject.username,
        email: decodedTokenSubject.email,
        roles: decodedTokenSubject.roles
      })
    }

    effect(() => {
      if(this.user$()) {
        console.log("Effect-> User logged in", this.user$()?.username)
      } else {
        console.log("Effect-> No user logged in")
      }
    })
  }

  registerUser(user : User) {
    return this.http.post<{status:boolean, data:User}>(
      `${API_URL}`, user
    )}
  
    check_duplicate_email(email: string) {
      return this.http.get<{status: boolean, data: User}>(`
        ${API_URL}/check_duplicate_email/${email}`
      )
    }

    loginUser(credentials: Credentials) {
      return this.http.post<{status: boolean, data: string}>(`
        ${API_URL_AUTH}/login`, credentials)
    }

    logoutUser(){
      this.user$.set(null)
      localStorage.removeItem("access_token")
      this.router.navigate(["login"])
    }

    isTokenExpired() : boolean {
      const token = localStorage.getItem('access_token')
      if (!token) return true
      
      try {
        const decoded = jwtDecode(token)
        const exp = decoded.exp
        const now = Math.floor(Date.now()/1000)
        if (exp) {
          return exp < now
        } else {
          return true
        }

      } catch (err) {
        return true
      }
    }
}
