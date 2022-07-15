import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-group-create',
  templateUrl: './group-create.component.html',
  styleUrls: ['./group-create.component.sass']
})
export class GroupCreateComponent implements OnInit {

  groupForm = this.fb.group({
    title: [''],
    system: [''],
    theme: [''],
    date: [''],
    description: [''],
  })
  systems = [
    'D&D 5e',
    'D&D 4e',
    'PathFinder 2e',
  ]
  constructor(private fb: FormBuilder ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.groupForm.value);
  }

}
