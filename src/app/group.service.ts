import { Injectable } from '@angular/core';
import { Group } from './group.model';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  groups: Group[] = [
    {
      title: 'sessao',
      system: 'D&D 5e',
      theme: 'sim',
      date: new Date('2022-08-12'),
      description: 'sessao maneira'
    },
  ];
  constructor() {
  }
}
