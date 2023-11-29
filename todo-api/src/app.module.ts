import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PrismaModule } from 'nestjs-prisma';
import { PrismaConfigService } from './common/prisma-config-service';

@Module({
  imports: [TodoModule, ConfigModule.forRoot({isGlobal: true}),
    PrismaModule.forRootAsync({
      isGlobal: true,
      useClass: PrismaConfigService,
    }), 

],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
