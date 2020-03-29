import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FullCalendarModule} from 'primeng/fullcalendar';
import {CalendarModule} from 'primeng/calendar';
import {TabViewModule} from 'primeng/tabview';
import {ButtonModule} from 'primeng/button';
import { PersonalCalanderRoutingModule } from './personal-calander-routing.module';
import { PersonalCalanderComponent } from './personal-calander.component';


@NgModule({
  declarations: [PersonalCalanderComponent],
  imports: [
    CommonModule,
    PersonalCalanderRoutingModule,
    FullCalendarModule,
    CalendarModule,
    TabViewModule,
    ButtonModule
  ]
})
export class PersonalCalanderModule { }
