import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaOptionsFactory, PrismaServiceOptions } from 'nestjs-prisma';

@Injectable()
export class PrismaConfigService implements PrismaOptionsFactory {
  constructor(configService: ConfigService ) {
    configService.get('DATABASE_URL');
  }

  createPrismaOptions(): PrismaServiceOptions | Promise<PrismaServiceOptions> {
    return {
      prismaOptions: {
        log: ['info', 'query'],
      },
      explicitConnect: true,
    };
  }
}