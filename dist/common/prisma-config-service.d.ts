import { ConfigService } from '@nestjs/config';
import { PrismaOptionsFactory, PrismaServiceOptions } from 'nestjs-prisma';
export declare class PrismaConfigService implements PrismaOptionsFactory {
    constructor(configService: ConfigService);
    createPrismaOptions(): PrismaServiceOptions | Promise<PrismaServiceOptions>;
}
