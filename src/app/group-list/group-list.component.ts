import { Component, OnInit } from '@angular/core';
import { Group } from '../group.model';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.sass']
})
export class GroupListComponent implements OnInit {

  sessions: Group[] = [
    new Group(
    'Sessao top',
    'D&D 5e',
    'Aventura',
    new Date('2022-07-16'),
    ''
    ),
    {
    title: 'Sessao FERAS',
    system: 'D&D 5e',
    theme: 'Aventura',
    date: new Date('2022-07-16'),
    description: ''
   },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

