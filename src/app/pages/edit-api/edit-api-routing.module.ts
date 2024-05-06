import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditApiComponent } from './edit-api.component';

const routes: Routes = [{ path: '', component: EditApiComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditApiRoutingModule {}
