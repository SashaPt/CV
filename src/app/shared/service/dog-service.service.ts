import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogServiceService {
  constructor(private httpClient: HttpClient) { 
  }

  getRandomDog(): Observable<any> {
    return this.httpClient.get('https://dog.ceo/api/breeds/image/random')
  }
  getRandomDogs(count: number = 3): Observable<any> {
    return this.httpClient.get(`https://dog.ceo/api/breeds/image/random/${count}`)
  }
}
