import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { BaseServiceLocalService } from '../shared/services/base-service-local.service';
import { BaseEntity } from '../shared/core/entities/base-entity';

export class BaseStoreService<T extends BaseEntity, IService extends BaseServiceLocalService<T>> {
  private itemsListSubject: BehaviorSubject<T[]> = new BehaviorSubject<T[]>([]);
  private itemSubject: BehaviorSubject<T> = new BehaviorSubject<T>(null);

  public readonly items$: Observable<T[]> = this.itemsListSubject.asObservable();
  public readonly item$: Observable<T> = this.itemSubject.asObservable();
  
  constructor(private service: IService) 
  { 
    service.getAll().subscribe(items =>
      {
        console.log(items);
        this.itemsListSubject.next(items);
      }
    );
  }
  
  getItem(id: string): T | Observable<T> | Promise<T> {
    let selected = this.itemsListSubject.value.filter(item => item.id === id);
    if (selected && selected.length > 0)
      this.itemSubject.next(selected[0]);
    else
      this.itemSubject.next(null);
    return of(this.itemSubject.value);
  }

  add(item: T){
    this.service.add(item);
    this.itemsListSubject.next([
      ...this.itemsListSubject.value,
      item
    ]);
  }

  update(item: T){
    this.service.update(item);
    let current = this.itemsListSubject.value;
    let index = current.findIndex(x => x.id === item.id);
    current[index] = {
      ...item
    };
    this.itemsListSubject.next(current);
  }

  delete(item: T){
    this.service.delete(item);
    this.itemsListSubject.next(this.itemsListSubject.value.filter(x => x.id !== item.id));
  }

}
