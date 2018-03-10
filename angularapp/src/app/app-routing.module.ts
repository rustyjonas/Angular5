import { NgModule } from '@angular/core';
import { RouterModule, Routes} from "@angular/router";
import { CommonModule } from '@angular/common';

const routes: Routes = [];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ],
})
export class AppRoutingModule { }
