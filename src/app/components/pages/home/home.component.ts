import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StarRatingModule, StarRatingConfigService } from 'angular-star-rating'; // Correct import statement
import { FoodService } from '../../../services/food.service';
import { Food } from '../../../shared/models/Food';

@Component({
  selector: 'app-home',
  standalone: true, // Ensure this is marked as standalone
  imports: [CommonModule, RouterModule, StarRatingModule], // Corrected import
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'], // Corrected from styleUrl to styleUrls
  providers: [StarRatingConfigService] // Provide the StarRatingConfigService here
})
export class HomeComponent {
  foods: Food[] = [];

  constructor(private foodService: FoodService) {
    this.foods = foodService.getAll();
  }
}
