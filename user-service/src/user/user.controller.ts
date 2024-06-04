import { Controller, Post, Body, Get, Request, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('signup')
  async signup(@Body() body: { name: string, email: string, password: string }) {
    return this.userService.signup(body.name, body.email, body.password);
  }

  @Post('login')
  async login(@Body() body: { email: string, password: string }) {
    return this.userService.login(body.email, body.password);
  }

  @Get('profile')
  @UseGuards(JwtAuthGuard)
  async getProfile(@Request() req) {
    return this.userService.getUserById(req.user.sub);
  }
}
