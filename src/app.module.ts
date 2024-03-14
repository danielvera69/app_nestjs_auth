import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
// el modulo es el que conecta, declara las clases del crud

@Module({
  imports: [UsersModule],
 
})
export class AppModule {}
