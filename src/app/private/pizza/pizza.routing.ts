import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'list',
    loadChildren: () => import('./pages/list/pizza-list.module').then((m) => m.PizzaListModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list'
  },
  {
    path: ':id',
    loadChildren: () => import('./pages/detail/pizza-detail.module').then((m) => m.PizzaDetailModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PizzaRoutingModule { }
