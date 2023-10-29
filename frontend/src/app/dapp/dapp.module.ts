import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DappMainPageComponent } from './dapp-main-page/dapp-main-page.component';
import { NavDappComponent } from './nav-dapp/nav-dapp.component';
import { RouterModule, Routes } from '@angular/router';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { ModalWalletComponent } from './modal-wallet/modal-wallet.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CreateNewChallengeComponent } from './create-new-challenge/create-new-challenge.component';
import { ChallengeConfirmationComponent } from './challenge-confirmation/challenge-confirmation.component';
import { CongratsOnCheckinComponent } from './congrats-on-checkin/congrats-on-checkin.component';
import { CongratsOnTakingfirststepComponent } from './congrats-on-takingfirststep/congrats-on-takingfirststep.component';

const routes: Routes = [
  {
    path: '',
    component: DappMainPageComponent,
  },
  {
    path: 'wallet',
    component: ModalWalletComponent,
  },

  {
    path: 'welcome',
    component: WelcomeComponent,
  },
  {
    path: 'congrats-on-checkin',
    component: CongratsOnCheckinComponent,
  },
  {
    path: 'congrats-on-takingfirststep',
    component: CongratsOnTakingfirststepComponent,
  },
  {
    path: 'create',
    component: CreateNewChallengeComponent,
  }

];


@NgModule({
  declarations: [
    DappMainPageComponent,
    NavDappComponent,
    LeaderboardComponent,
    ModalWalletComponent,
    WelcomeComponent,
    CreateNewChallengeComponent,
    ChallengeConfirmationComponent,
    CongratsOnCheckinComponent,
    CongratsOnTakingfirststepComponent

  ],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class DappModule { }
