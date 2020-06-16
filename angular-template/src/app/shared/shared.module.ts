import { NgModule } from "@angular/core";
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu/menu.component';
import { MenuModule } from './components/menu/menu.module';

@NgModule({
    declarations: [HomeComponent],
    imports: [MenuModule],
    exports: [MenuModule]
})
export class SharedModule {}