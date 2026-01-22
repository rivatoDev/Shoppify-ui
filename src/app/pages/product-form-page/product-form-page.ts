import { Component, inject } from '@angular/core';
import { ProductForm } from '../../components/product-form/product-form';
import { BackButtonComponent } from '../../components/back-button/back-button';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-form-page',
  imports: [ProductForm, BackButtonComponent],
  templateUrl: './product-form-page.html',
  styleUrl: './product-form-page.css',
})
export class ProductFormPage {}