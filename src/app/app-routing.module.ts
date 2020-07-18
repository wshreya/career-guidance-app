import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StagecontainerComponent } from 'src/app/stagecontainer/stagecontainer.component';
import { ExamListComponent } from 'src/app/examlist/examlist.component';


const routes: Routes = [ {
  path: 'examdetails/:examId', component: StagecontainerComponent,
}, {
  path: '', component: ExamListComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
