import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalCalanderComponent} from './personal-calander.component';

const routes: Routes = [{path:'' , component: PersonalCalanderComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalCalanderRoutingModule { }
