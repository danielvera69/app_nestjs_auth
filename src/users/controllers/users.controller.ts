import { Controller, Get } from '@nestjs/common';
import { UsersService } from '../services/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly appService: UsersService) {}
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
