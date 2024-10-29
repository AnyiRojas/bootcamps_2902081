import { Module } from '@nestjs/common';
import { BootcampsModule } from './bootcamps/bootcamps.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3311,
      username: 'root',
      password: 'admin',
      database: 'bootcamps-ptech',
      entities: [],
      synchronize: true,
      autoLoadEntities: true,
      dropSchema: true
      
    }),
    
    BootcampsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
