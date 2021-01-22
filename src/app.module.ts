import { Module } from '@nestjs/common';
import { ColegiosModule } from './colegios/colegios.module';
import { UniversidadesModule } from './universidades/universidades.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ColegiosModule, UniversidadesModule, AuthModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
