import { Controller, Get } from '@nestjs/common';

@Controller()
export class HealthController {
  @Get()
  getHealthStatus() {
    return { status: '200', message: 'Service is up and running' };
  }
}
