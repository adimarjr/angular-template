import { Observable } from 'rxjs';

export interface ServiceInterface<BaseEntity> {
    storageName: string;
    
    getAll(): Observable<BaseEntity[]>;
    add(entity: BaseEntity);
    update(entity: BaseEntity);
    delete(deletedItem: BaseEntity);
}