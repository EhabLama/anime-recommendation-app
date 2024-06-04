import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { KnexService } from '../database/knex';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    private knexService: KnexService,
    private jwtService: JwtService,
  ) {}

  async signup(name: string, email: string, password: string) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const [user] = await this.knexService.getDbConnection()
      .insert({ name, email, password: hashedPassword })
      .into('users')
      .returning('*');
    return user;
  }

  async login(email: string, password: string) {
    const [user] = await this.knexService.getDbConnection()
      .select('*')
      .from('users')
      .where({ email });

    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { sub: user.id, email: user.email };
    const token = this.jwtService.sign(payload);

    return { user, token };
  }

  async getUserById(id: number) {
    const [user] = await this.knexService.getDbConnection()
      .select('*')
      .from('users')
      .where({ id });
    return user;
  }
}
