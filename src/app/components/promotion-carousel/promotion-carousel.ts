import { Component, inject, Input, OnInit } from '@angular/core';
import { CarouselComponent, CarouselControlComponent, CarouselIndicatorsComponent, CarouselInnerComponent, CarouselItemComponent } from '@coreui/angular';

import { Router } from '@angular/router';
import { Carouselitem } from '../../models/carouselitem';
import { ImageFallbackDirective } from '../../core/directives/image-fallback';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { CarouselService } from '../../services/carousel-service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-promotion-carousel',
  imports: [
    CarouselComponent, 
    CarouselControlComponent,
    CarouselInnerComponent,
    CarouselIndicatorsComponent,
    CarouselItemComponent,
    ImageFallbackDirective,
    NgxSkeletonLoaderModule
  ],
  templateUrl: './promotion-carousel.html',
  styleUrl: './promotion-carousel.css'
})
export class PromotionCarousel implements OnInit{

  constructor(private router:Router){}

  isLoading: boolean = true;

  @Input() carouselItems: Carouselitem [] = [];
  @Input() redirect : boolean = false;

  carouselService = inject(CarouselService);

  ngOnInit(): void {
    if(!this.carouselItems.length) {
      this.renderCarousel()
    }
  }

  onClick(item:Carouselitem){
    if(this.redirect){
      this.router.navigate([item.href]);
    }
  }

  renderCarousel(): void {
  this.carouselService.getCarousel()
    .pipe(
      finalize(() => this.isLoading = false)
    )
    .subscribe({
      next: (carousel) => {
        this.carouselItems = carousel;
      },
      error: (err) => {
        console.error(err)
      }
    });
}
}
