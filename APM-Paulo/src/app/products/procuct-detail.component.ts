import { Component, OnInit } from '@angular/core';
import { iProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.service';

@Component({
	selector: 'pm-procuct-detail',
	templateUrl: './procuct-detail.component.html',
	styleUrls: ['./procuct-detail.component.css']
})
export class ProcuctDetailComponent implements OnInit {
	pageTitle: string = 'Product Detail';
	product: iProduct;
	imageWidth: number = 300;
	imageMargin: number = 5;

	constructor(private route: ActivatedRoute,
		private router: Router,
		private productService: ProductService) { }

	ngOnInit() {
		let id = +this.route.snapshot.paramMap.get('id');
		this.pageTitle += `: ${id}`;
		this.productService.getProductById(id).subscribe({
			next: product => {
				this.product = product;
			},
			error(err) { this.errorMessage = err }
		});
	}

	onBack(): void {
		this.router.navigate(['/products']);
	}
}

