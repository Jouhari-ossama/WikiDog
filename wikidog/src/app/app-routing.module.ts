import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RazzaPiccolaComponent } from './razza-piccola/razza-piccola.component';

const routes: Routes = [
      { path: 'razza-piccola', component: RazzaPiccolaComponent },
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
