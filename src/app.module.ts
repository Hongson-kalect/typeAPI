import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './modules/user/user.module';
import { AssetModule } from './modules/asset/asset.module';
import { BanModule } from './modules/ban/ban.module';
import { DeviceModule } from './modules/device/device.module';
import { FavoriteModule } from './modules/favorite/favorite.module';
import { GameModule } from './modules/game/game.module';
import { GameInfoModule } from './modules/gameInfo/gameInfo.module';
import { LanguageModule } from './modules/language/language.module';
import { NovelModule } from './modules/novel/novel.module';
import { ParagraphModule } from './modules/paragraphs/paragraph.module';
import { ProfileModule } from './modules/profile/profile.module';
import { RankModule } from './modules/rank/rank.module';
import { RateModule } from './modules/rate/rate.module';
import { ReportModule } from './modules/report/report.module';
import { ScoreModule } from './modules/score/score.module';
import { SettingModule } from './modules/setting/setting.module';
import { SpecialRuleModule } from './modules/specialRule/specialRule.module';
import { StoreModule } from './modules/store/store.module';
import { ThemeModule } from './modules/theme/theme.module';
import { TypeStyleModule } from './modules/tyleStyle/typeStyle.module';
import { WordModule } from './modules/word/word.module';
import { WordRateModule } from './modules/wordRate/wordRate.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://hongson197201:0WKm66afe7ZNvBWV@clustermain.8pfqv.mongodb.net/TypeSpeedUp?retryWrites=true&w=majority',
    ),
    AssetModule,
    BanModule,
    DeviceModule,
    FavoriteModule,
    GameModule,
    GameInfoModule,
    LanguageModule,
    NovelModule,
    ParagraphModule,
    ProfileModule,
    RankModule,
    RateModule,
    ReportModule,
    ScoreModule,
    SettingModule,
    SpecialRuleModule,
    StoreModule,
    ThemeModule,
    TypeStyleModule,
    UserModule,
    WordModule,
    WordRateModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
