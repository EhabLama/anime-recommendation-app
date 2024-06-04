import { Module } from '@nestjs/common';
import { ListingsController } from './listings.controller';
import { ListingsService } from './listings.service';
import { KnexService } from '../database/knex';

@Module({
  controllers: [ListingsController],
  providers: [ListingsService, KnexService],
})
export class ListingsModule {}
