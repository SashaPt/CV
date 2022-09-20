import { Component, OnInit } from '@angular/core';
import { DogServiceService } from '../../../shared/service/dog-service.service';

@Component({
  selector: 'app-random-dog',
  templateUrl: './random-dog.component.html',
  styleUrls: ['./random-dog.component.scss'],
})
export class RandomDogComponent implements OnInit {
  dogImgUrl!: string;

  constructor(private dogService: DogServiceService) {}

  ngOnInit(): void {
    this.getRandomDog();
  }

  getRandomDog() {
    this.dogService.getRandomDog().subscribe((response) => {
      this.dogImgUrl = response.message;
    });
  }
}
