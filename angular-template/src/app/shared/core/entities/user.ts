import { BaseEntityInterface } from './base-entity';

export interface UserInterface extends BaseEntityInterface {
    fullName: string;
    email: string;
    password: string;
}
export class User implements UserInterface {
    id: string;
    fullName: string;
    email: string;
    password: string;
}