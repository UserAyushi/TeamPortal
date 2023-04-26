import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DomainComponent } from './domain/domain.component';

import { AuthGuard } from './domain/auth.guard';
import { NgxSpinnerModule } from 'ngx-spinner';
const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('src/app/account/account.module').then((m) => m.AccountModule),
  },
  {
    path: 'account',
    loadChildren: () =>
      import('src/app/account/account.module').then((m) => m.AccountModule),
  },
  {
    path: 'domain',canActivate:[AuthGuard],

    loadChildren: () =>
      import('src/app/domain/domain.module').then((m) => m.DomainModule),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
   
      NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' })],
      
  exports: [RouterModule],
})
export class AppRoutingModule {}
