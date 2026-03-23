import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SkeletonFactoryService {
  createSkeletonItems<T>(count: number, factory: (index: number) => T): T[] {
    return Array.from({ length: count }).map((_, i) => factory(i));
  }
}