import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router'
import { FisaComponent } from './fisa/fisa.component'
import { ViewFisaComponent } from './view-fisa/view-fisa.component'
import { IndexComponent } from './index/index.component';
import { MeaTemplateComponent } from './template/template.component';

const routes:Routes=[
  {path:'',component:IndexComponent},
  {path:'template',component:MeaTemplateComponent},
  {path:'fisa',component:FisaComponent},
  {path:'fisa/:resource/:id',component:ViewFisaComponent},
  {path:'details/:resource/:id',component:ViewFisaComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
exports:[RouterModule]
})
export class AppRoutingModule { }
