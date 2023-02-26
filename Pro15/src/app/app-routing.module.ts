import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserListComponent } from './user-list/user-list.component';
import { AccessRoleGuard } from './access-role.guard';
import { UserPostComponent } from './user-post/user-post.component';

const routes: Routes = [
  {
    path: 'error',
    component: ErrorComponent
  },
  {
    path: 'users',
    component: UserListComponent,
    canActivateChild: [AccessRoleGuard],
    children: [
      {
        path: ':1',
        component: UserProfileComponent
      },
      {
        path: ':2',
        component: UserPostComponent
      },
    ]
  },
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
