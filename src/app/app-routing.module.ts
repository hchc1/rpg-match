import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupCreateComponent } from './group-create/group-create.component';
import { GroupListComponent } from './group-list/group-list.component';

const routes: Routes = [
  {
    path: 'groups',
    component: GroupListComponent,
  },
  {
    path: 'groups/create',
    component: GroupCreateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
