import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule}    from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {CheckboxModule} from 'primeng/checkbox';
import {RadioButtonModule} from 'primeng/radiobutton';
import {ButtonModule} from 'primeng/button';
import {TabViewModule} from 'primeng/tabview';
import {CodeHighlighterModule} from 'primeng/codehighlighter';

import { Form1RoutingModule } from './form1-routing.module';
import { Form1Component } from '../form1/form1.component';
import { DemoControllerService} from '../../service';
import {ToastModule} from 'primeng/toast';
import {DropdownModule} from 'primeng/dropdown';
import {CalendarModule} from 'primeng/calendar';
import {BlockUIModule} from 'primeng/blockui';
import {PanelModule} from 'primeng/panel';
import {DialogModule} from 'primeng/dialog';
import {ScrollPanelModule} from 'primeng/scrollpanel';
@NgModule({
  declarations: [Form1Component],
  imports: [
    CommonModule,
    Form1RoutingModule,
    InputTextModule,
    ButtonModule,
    CheckboxModule,
    RadioButtonModule,
    TabViewModule,
    CodeHighlighterModule,
    ToastModule,
    DropdownModule,
    FormsModule,
    CalendarModule,
    BlockUIModule,
    PanelModule,
    DialogModule,
    ScrollPanelModule
  ],
  providers: [
    DemoControllerService
  ]
})
export class Form1Module { }
