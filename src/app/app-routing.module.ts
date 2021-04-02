import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundPageComponent } from './shared/components/not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./main/search-page/search-page.module').then(
        (m) => m.SearchPageModule
      ),
  },
  {
    path: 'bookmarks',
    loadChildren: () =>
      import('./main/bookmarks/bookmarks.module').then(
        (m) => m.BookmarksModule
      ),
  },
  {
    path: 'search-page',
    loadChildren: () =>
      import('./main/search-page/search-page.module').then(
        (m) => m.SearchPageModule
      ),
  },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
