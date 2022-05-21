import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FifthComponent } from './fifth/fifth.component';
import { FirstComponent } from './first/first.component';
import { FourthComponent } from './fourth/fourth.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';

const routes: Routes = [

  {
    path : '',
    component:FirstComponent
  },
  {
    path : 'first',
    component:FirstComponent
  },
  {
    path : 'second',
    component:SecondComponent
  },
  {
    path : 'third',
    component:ThirdComponent
  },
  {
    path : 'fourth',
    component:FourthComponent
  },
  {
    path : 'fifth',
    component:FifthComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
}
