import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Makes the ConfigModule available globally
      envFilePath: '.env', // Path to your .env file
    }),
    // other modules can be imported here
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}