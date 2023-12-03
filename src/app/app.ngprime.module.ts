import { NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenubarModule } from 'primeng/menubar';
import { CheckboxModule } from 'primeng/checkbox';
import { TabViewModule } from 'primeng/tabview';
import { AccordionModule } from 'primeng/accordion';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import { DialogModule } from 'primeng/dialog';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CalendarModule } from 'primeng/calendar';
import { SidebarModule } from 'primeng/sidebar';
import { MultiSelectModule } from 'primeng/multiselect';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@NgModule({
    exports: [
        ConfirmDialogModule,
        DropdownModule,
        InputTextModule,
        TabViewModule,
        CheckboxModule,
        AccordionModule,
        TableModule,
        CardModule,
        ButtonModule,
        OverlayPanelModule,
        PanelMenuModule,
        MenubarModule,
        PasswordModule,
        DividerModule,
        DialogModule,
        ProgressSpinnerModule,
        CalendarModule,
        TabViewModule,
        SidebarModule,
        MultiSelectModule
    ]
})
export class NgPrimeModule { }
