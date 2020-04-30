import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ProcuctDetailComponent } from './procuct-detail.component';
import { SharedModule } from '../shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';



@NgModule({
  declarations: [
    ProductListComponent,
		ProcuctDetailComponent
  ],
  imports: [
    SharedModule,
    ProductRoutingModule,
  ]
})
export class ProductModule { }
