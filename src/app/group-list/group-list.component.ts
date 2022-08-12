import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Group } from '../group.model';
import { GroupService } from '../group.service';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.sass']
})
export class GroupListComponent implements OnInit {

  groups: Group[] = [];

  constructor(private groupService: GroupService, private route: Router) {

  }

  ngOnInit(): void {
    this.groups = this.groupService.groups
    console.log(this.groupService.groups);
  }

  createGroup(): void {
    this.route.navigate(['groups/create'])
  }

  editGroup(group: Group) {
    const index = this.groupService.groups.indexOf(group)
    this.route.navigate([`groups/edit/${index}`])
  }

  showDetails(group: Group) {
    const index = this.groupService.groups.indexOf(group)
    this.route.navigate([`groups/details/${index}`])
  }
}

