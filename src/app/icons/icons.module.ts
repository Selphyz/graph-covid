import { NgModule } from '@angular/core';
import { FeatherModule } from 'angular-feather';
import { File, FileText, ShoppingCart, BarChart2, Layers, 
    Users, PlusCircle, Calendar, Zap } from 'angular-feather/icons';

const icons = {
    File,
    FileText,
    ShoppingCart,
    BarChart2,
    Layers,
    Users,
    PlusCircle,
    Calendar,
    Zap
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