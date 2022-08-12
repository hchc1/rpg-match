import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Group } from '../group.model';
import { GroupService } from '../group.service';

@Component({
  selector: 'app-group-create',
  templateUrl: './group-create.component.html',
  styleUrls: ['./group-create.component.sass']
})
export class GroupCreateComponent implements OnInit {

  groupForm = this.fb.group({
    title: ['', Validators.required],
    system: ['', Validators.required],
    theme: ['', Validators.required],
    dateString: ['', Validators.required],
    description: ['', Validators.required],
  })

  groupIndex: number = -1;

  systems = [
    'D&D 5e',
    'D&D 4e',
    'PathFinder 2e',
  ]

  constructor(
    private fb: FormBuilder,
    private groupService: GroupService,
    private route: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['index']) {
        this.groupIndex = params['index'];
        const group = this.groupService.groups[this.groupIndex]
        this.groupForm.controls['title'].patchValue(group.title ?? '')
        this.groupForm.controls['system'].patchValue(group.system ?? '')
        this.groupForm.controls['theme'].patchValue(group.theme ?? '')
        this.groupForm.controls['dateString'].patchValue(this.dateToString(group.date))
        this.groupForm.controls['description'].patchValue(group.description ?? '')
      }
    })
  }

  onSubmit(): void {
    const group: Group = this.groupForm.value;
    if (this.groupIndex >= 0) {
      this.groupService.groups[this.groupIndex] = group;
    } else {
      this.groupService.groups.push(group);
    }
    this.route.navigate(['groups'])
  }

  dateToString(date: Date | null | undefined): string {
    if (!date) {
      return ''
    }
    return `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`
  }

}
