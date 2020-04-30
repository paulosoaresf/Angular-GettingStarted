import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { ProcuctDetailComponent } from './procuct-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { StarComponent } from '../shared/star.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';



@NgModule({
  declarations: [
    ProductListComponent,
		ProcuctDetailComponent,
		ConvertToSpacesPipe,
		StarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
			{ path: 'products', component: ProductListComponent },
			{
				path: 'products/:id',
				canActivate: [ProductDetailGuard], component: ProcuctDetailComponent
			}
		]),
  ]
})
export class ProductModule { }
