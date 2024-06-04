import { Injectable } from '@nestjs/common';
import { KnexService } from '../database/knex';
import { Listing } from '../listings/listing.interface';

@Injectable()
export class ListingsService {
  constructor(private knexService: KnexService) {}

  async getAllListings(): Promise<Listing[]> {
    const db = this.knexService.getDbConnection();
    return await db<Listing>('listing').select('*');
  }
}
