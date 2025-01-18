import { Module } from '@nestjs/common';
import { UsersService } from './core/application/users.service';
import { UsersController } from './infrastructure/controllers/users.controller';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
