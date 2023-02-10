import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { movies } from '../../utils/dummyData';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class MoviesService {
  constructor(private prisma: PrismaService) { }
  async create(createMovieDto: CreateMovieDto) {
    const response = await this.prisma.movie.createMany({
      data: [createMovieDto],
    });

    return response;
  }

  async findAll() {
    const movies = await this.prisma.movie.findMany();
    const randomMovies = [];
    const getRandomMovie = (movies) => {
      const randomMovie = movies[Math.floor(Math.random() * movies.length)];
      if (randomMovies.length === 10) {
        return;
      } else if (randomMovies.includes(randomMovie)) {
        getRandomMovie(movies);
      } else {
        randomMovies.push(randomMovie);
        getRandomMovie(movies);
      }
    };

    getRandomMovie(movies);
    return {
      status: 'success',
      movies: randomMovies,
    };
  }
}
