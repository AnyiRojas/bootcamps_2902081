import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BootcampsController } from './controllers/bootcamps.controller';
import { CoursesController } from './controllers/courses.controller';
import { ReviewsController } from './controllers/reviews.controller';
import { UsersController } from './controllers/users.controller';

@Module({
  imports: [],
  controllers: [AppController, BootcampsController, CoursesController, ReviewsController, UsersController],
  providers: [AppService],
})
export class AppModule {}
