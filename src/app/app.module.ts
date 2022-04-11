import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './template/navbar/navbar.component';
import { MenuComponent } from './template/menu/menu.component';
import { ContentComponent } from './template/content/content.component';
import { ChatComponent } from './template/chat/chat.component';
import { BalanceComponent } from './template/balance/balance.component';
import { ContestBannerComponent } from './banners/contest-banner/contest-banner.component';
import { UserMsgComponent } from './template/chat/user-msg/user-msg.component';
import { RefSystemPageComponent } from './pages/ref-system-page/ref-system-page.component';
import { BonusPageComponent } from './pages/bonus-page/bonus-page.component';
import { ChestsPageComponent } from './pages/chests-page/chests-page.component';
import { TournamentPageComponent } from './pages/tournament-page/tournament-page.component';
import { RefLinkBlockComponent } from './pages/ref-system-page/ref-link-block/ref-link-block.component';
import { RefTableComponent } from './pages/ref-system-page/ref-table/ref-table.component';
import { AgreementPageComponent } from './pages/agreement-page/agreement-page.component';
import { RepostBonusComponent } from './pages/bonus-page/bonus-blocks/repost-bonus/repost-bonus.component';
import { GroupBonusComponent } from './pages/bonus-page/bonus-blocks/group-bonus/group-bonus.component';
import { ChatBonusComponent } from './pages/bonus-page/bonus-blocks/chat-bonus/chat-bonus.component';
import { KingPageComponent } from './pages/king-page/king-page.component';
import { LitePageComponent } from './pages/lite-page/lite-page.component';
import { ClassicPageComponent } from './pages/classic-page/classic-page.component';
import { DicePageComponent } from './pages/dice-page/dice-page.component';
import { LivePageComponent } from './pages/live-page/live-page.component';
import { SlotsPageComponent } from './pages/slots-page/slots-page.component';
import { TotalBetBlockComponent } from './template/total-bet-block/total-bet-block.component';
import { SlidePlayersBlockComponent } from './template/slide-players-block/slide-players-block.component';
import { PlayersTableBlockComponent } from './template/players-table-block/players-table-block.component';
import { BetColumnComponent } from './template/players-table-block/bet-column/bet-column.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MenuComponent,
    ContentComponent,
    ChatComponent,
    BalanceComponent,
    ContestBannerComponent,
    UserMsgComponent,
    RefSystemPageComponent,
    BonusPageComponent,
    ChestsPageComponent,
    TournamentPageComponent,
    RefLinkBlockComponent,
    RefTableComponent,
    AgreementPageComponent,
    RepostBonusComponent,
    GroupBonusComponent,
    ChatBonusComponent,
    KingPageComponent,
    LitePageComponent,
    ClassicPageComponent,
    DicePageComponent,
    LivePageComponent,
    SlotsPageComponent,
    TotalBetBlockComponent,
    SlidePlayersBlockComponent,
    PlayersTableBlockComponent,
    BetColumnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
