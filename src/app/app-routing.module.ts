import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupDetailsComponent } from './group-details/group-details.component';
import { GroupEditComponent } from './group-edit/group-edit.component';
import { GroupListComponent } from './group-list/group-list.component';

const routes: Routes = [
  {
    path: 'groups',
    component: GroupListComponent,
  },
  {
    path: 'groups/create',
    component: GroupEditComponent,
  },
  {
    path: 'groups/edit/:index',
    component: GroupEditComponent
  },
  {
    path: 'groups/details/:index',
    component: GroupDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
