import { NgModule } from '@angular/core';
import { FeatherModule } from 'angular-feather';
import {
    File, FileText, ShoppingCart, BarChart2, Layers,
    Users, PlusCircle, Calendar, Zap, Globe
} from 'angular-feather/icons';

const icons = {
    File,
    FileText,
    ShoppingCart,
    BarChart2,
    Layers,
    Users,
    PlusCircle,
    Calendar,
    Zap,
    Globe
};

@NgModule({
    imports: [
        FeatherModule.pick(icons)
    ],
    exports: [
        FeatherModule
    ]
})
export class IconsModule { }