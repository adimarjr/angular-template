import { NgModule } from "@angular/core";
import { MenuModule } from './components/menu/menu.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MaterialModule } from './modules/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ContainerComponent } from './components/container/container.component';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';

@NgModule({
    declarations: [NotFoundComponent, ContainerComponent, ConfirmationDialogComponent],
    imports: [MenuModule, MaterialModule, FlexLayoutModule],
    exports: [MenuModule, MaterialModule, ContainerComponent, ConfirmationDialogComponent]
})
export class SharedModule {}