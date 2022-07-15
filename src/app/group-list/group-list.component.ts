import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.sass']
})
export class GroupListComponent implements OnInit {

  sessions = [
    {
    name: 'Sessao top',
    system: 'D&D 5e',
    theme: 'Aventura',
    date: new Date('2022-07-16')
   },
    {
    name: 'Sessao FERAS',
    system: 'D&D 5e',
    theme: 'Aventura',
    date: new Date('2022-07-16')
   },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

