import { Module, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { PrismaClient } from 'generated/prisma';

@Module({
    providers: [DatabaseService],
    exports: [DatabaseService]
})
export class DatabaseModule extends PrismaClient implements OnModuleInit, OnModuleDestroy {
    
    async onModuleInit() {
        this.$connect();
    }

    async onModuleDestroy() {
        this.$disconnect();
    }
}
