import { Injectable } from '@angular/core';
import { Group } from './group.model';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  groups: Group[] = [

  ]
  constructor() { }
}
