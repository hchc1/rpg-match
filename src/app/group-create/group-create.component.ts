import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
    date: [null, Validators.required],
    description: ['', Validators.required],
  })

  systems = [
    'D&D 5e',
    'D&D 4e',
    'PathFinder 2e',
  ]

  constructor(
    private fb: FormBuilder,
    private groupService: GroupService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const group: Group = this.groupForm.value;
    this.groupService.groups.push(group);
    console.log(this.groupService.groups);
  }

}
