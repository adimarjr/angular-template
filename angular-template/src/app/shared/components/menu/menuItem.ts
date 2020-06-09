export interface MenuItem {
    name: string;
    route?: string;
    icon?: string;
    children?: MenuItem[];
}