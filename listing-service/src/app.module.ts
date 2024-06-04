import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ListingsModule } from './listings/listings.module';
import { KnexService } from './database/knex';
import { HealthModule } from './health/health.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ListingsModule,
    HealthModule,
  ],
  providers: [KnexService],
})
export class AppModule {}
