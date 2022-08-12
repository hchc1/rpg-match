import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Group } from '../group.model';
import { GroupService } from '../group.service';

@Component({
  selector: 'app-group-details',
  templateUrl: './group-details.component.html',
  styleUrls: ['./group-details.component.sass']
})
export class GroupDetailsComponent implements OnInit {
  
  group: Group = {};
  groupIndex: number = -1;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private groupService: GroupService,  
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['index']) {
        this.groupIndex = params['index'];
        this.group = this.groupService.groups[this.groupIndex]
      }
    })
  }

  back(): void {
    this.router.navigate(['groups'])
  }

}
