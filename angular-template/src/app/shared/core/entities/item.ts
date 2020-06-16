import { BaseEntityInterface } from './base-entity';

export interface ItemInterface extends BaseEntityInterface {
    name: string;
    description?: string;
}
export class Item implements ItemInterface {
    id: string;
    name: string;
    description?: string;
}