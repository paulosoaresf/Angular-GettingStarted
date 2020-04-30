import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ProcuctDetailComponent } from './procuct-detail.component';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ProductListComponent,
		ProcuctDetailComponent
  ],
  imports: [
    RouterModule.forChild([
			{ path: 'products', component: ProductListComponent },
			{
				path: 'products/:id',
				canActivate: [ProductDetailGuard], component: ProcuctDetailComponent
			}
		]),
    SharedModule,
  ]
})
export class ProductModule { }
