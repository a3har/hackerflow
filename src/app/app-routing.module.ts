import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MapsComponentComponent } from './components/maps-component/maps-component.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full',
  },
  {
    path: 'map',
    component: MapsComponentComponent,
  },
  {
    path: 'folder/:id',
    loadChildren: () =>
      import('./folder/folder.module').then((m) => m.FolderPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
