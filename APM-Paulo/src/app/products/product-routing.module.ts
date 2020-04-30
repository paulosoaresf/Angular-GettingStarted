import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProcuctDetailComponent } from './procuct-detail.component';
import { ProductListComponent } from './product-list.component';
import { ProductDetailGuard } from './product-detail.guard';



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
			{ path: 'products', component: ProductListComponent },
			{
				path: 'products/:id',
				canActivate: [ProductDetailGuard], component: ProcuctDetailComponent
			}
		]),
  ],
  exports: [
    RouterModule
  ]
    
})
export class ProductRoutingModule { }
