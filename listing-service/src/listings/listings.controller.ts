import { Controller, Get } from '@nestjs/common';
import { ListingsService } from './listings.service';

@Controller('listings')
export class ListingsController {
  constructor(private readonly listingsService: ListingsService) {}

  @Get()
  async getAllListings() {
    return await this.listingsService.getAllListings();
  }
}
