import { Injectable } from '@nestjs/common';
import { KnexService } from '../database/knex';
import { Listings } from '../listings/listing.interface';

@Injectable()
export class ListingsService {
  constructor(private knexService: KnexService) {}

  async getAllListings(): Promise<Listings[]> {
    const db = this.knexService.getDbConnection();
    return await db<Listings>('listings').select('*');
  }
}
