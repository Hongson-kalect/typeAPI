import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  TypeStyle,
  TypeStyleSchema,
} from 'src/database/schemas/typeStyle.schema';
import { TypeStyleController } from './typeStyle.controller';
import { TypeStyleService } from './typeStyle.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TypeStyle.name, schema: TypeStyleSchema },
    ]),
  ],
  controllers: [TypeStyleController],
  providers: [TypeStyleService],
})
export class TypeStyleModule {}
