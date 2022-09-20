import { Component, OnInit } from '@angular/core';
import { DogServiceService } from '../../../shared/service/dog-service.service';

@Component({
  selector: 'app-random-dogs',
  templateUrl: './random-dogs.component.html',
  styleUrls: ['./random-dogs.component.scss']
})
export class RandomDogsComponent implements OnInit {
  dogsImages!: string[];
  countDogs!: number;

  constructor(private dogService: DogServiceService) { }

  ngOnInit(): void {
  }
  getRandomDogs() {
    this.dogService.getRandomDogs(this.countDogs).subscribe((response)=> {
      this.dogsImages = response.message;
    })
  }

}
