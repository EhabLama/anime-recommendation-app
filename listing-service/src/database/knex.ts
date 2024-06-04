import { knex, Knex } from 'knex';
import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';


dotenv.config();

@Injectable()
export class KnexService {
  private readonly db: Knex;

  constructor(private configService: ConfigService) {
    this.db = knex({
      client: 'pg',
      connection: this.configService.get<string>('DATABASE_URL'),
      migrations: {
        directory: '../../migrations',
      },
      seeds: {
        directory: '../../seeds',
      },
    });
  }

  async onModuleInit() {
    await this.db.migrate.latest();
    await this.db.seed.run();
  }

  getDbConnection(): Knex {
    return this.db;
  }
}