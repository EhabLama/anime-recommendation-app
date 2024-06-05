import { knex, Knex } from 'knex';
import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';

@Injectable()
export class KnexService {
  private readonly db: Knex;

  constructor(private configService: ConfigService) {
    this.db = knex({
      client: 'pg',
      connection: this.configService.get<string>('DATABASE_URL'),
      migrations: {
        directory: './src/database/migrations',
      }
    });
  }

  async onModuleInit() {
    await this.db.migrate.latest();
  }

  getDbConnection(): Knex {
    return this.db;
  }
}
