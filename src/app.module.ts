import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './modules/user/user.module';
import { AssetModule } from './modules/asset/asset.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://hongson197201:0WKm66afe7ZNvBWV@clustermain.8pfqv.mongodb.net/TypeSpeedUp?retryWrites=true&w=majority',
    ),
    UserModule,
    AssetModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
