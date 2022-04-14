import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgreementPageComponent } from './pages/agreement-page/agreement-page.component';
import { BonusPageComponent } from './pages/bonus-page/bonus-page.component';
import { ClassicPageComponent } from './pages/classic-page/classic-page.component';
import { DicePageComponent } from './pages/dice-page/dice-page.component';
import { KingPageComponent } from './pages/king-page/king-page.component';
import { LitePageComponent } from './pages/lite-page/lite-page.component';
import { LivePageComponent } from './pages/live-page/live-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { RefSystemPageComponent } from './pages/ref-system-page/ref-system-page.component';
import { SlotsPageComponent } from './pages/slots-page/slots-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'lite',
    pathMatch: 'full'
  },

  {
    path: 'bonuses',
    component: BonusPageComponent
  },
  {
    path: 'ref-system',
    component: RefSystemPageComponent
  },
  {
    path: 'agreement',
    component: AgreementPageComponent
  },
  {
    path: 'profile',
    component: ProfilePageComponent
  },
  {
    path: 'lite',
    component: LitePageComponent
  },
  {
    path: 'classic',
    component: ClassicPageComponent
  },
  {
    path: 'king',
    component: KingPageComponent
  },
  {
    path: 'dice',
    component: DicePageComponent
  },
  {
    path: 'live',
    component: LivePageComponent
  },
  {
    path: 'slots',
    component: SlotsPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
