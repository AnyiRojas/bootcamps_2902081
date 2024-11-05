import { Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Review } from './entities/review.entity';

@Injectable()
export class ReviewsService {

  constructor(
    @InjectRepository(Review)
    private reviewRepository: Repository<Review>,
  ) {}

  create(createReviewDto: CreateReviewDto) {
    const nuevoBootcamp = this.reviewRepository.create(createReviewDto);

    return this.reviewRepository.save(nuevoBootcamp);
  }

  findAll() {
    return this.reviewRepository.find();
  }

  findOne(id: number) {
    return this.reviewRepository.findOneBy({ id: id });
  }

  async update(id: number, updateReviewDto: UpdateReviewDto) {
    const updReview = await this.reviewRepository.findOneBy({ id });
    await this.reviewRepository.merge(updReview, updateReviewDto);
    await this.reviewRepository.save(updReview);
    return updReview;
  }

  async remove(id: number) {
    const removebootcamp = await this.reviewRepository.findOneBy({ id });
    await this.reviewRepository.remove(removebootcamp);
    return removebootcamp;
  }
}
