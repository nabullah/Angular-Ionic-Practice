import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () =>import('./trial/testing/testing.module').then((m) => m.TestingPageModule)},
  { path: 'home', loadChildren: () => import('./home/home.module').then((m) => m.HomePageModule)},
  { path: 'edit-task/:id', loadChildren: () =>import('./pages/edit-task/edit-task.module').then((m) => m.EditTaskPageModule)},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
