import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import * as uuid from 'uuid';

import { ServiceInterface } from '../core/interfaces/service-interface';
import { BaseEntityInterface, BaseEntity } from '../core/entities/base-entity';

@Injectable({
  providedIn: 'root'
})
export class BaseServiceLocalService<T extends BaseEntity> implements ServiceInterface<T> {
  storageName: string;

  constructor() { }

  private getList() {
    return (JSON.parse(localStorage.getItem(this.storageName)) || []);    
  }

  private save(list: T[]){
    console.log(list);
    localStorage.setItem(this.storageName, JSON.stringify(list));
  }

  getAll(): Observable<T[]> {
    return of(this.getList());
  }

  add(entity: T) {
    let list: T[] = this.getList();
    entity.id = uuid.v1();
    list = [
      ...list,
      entity
    ];

    this.save(list);
  }

  update(edited: T) {
    let list: T[] = this.getList();

    let index = list.findIndex(item => item.id === edited.id);
    list[index] = {
      ...edited
    };

    this.save(list);
  }

  delete(deletedItem: T) {
    let list: T[] = this.getList();

    this.save(list.filter(x => x.id !== deletedItem.id));
  }
}
