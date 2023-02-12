import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMovieDto } from './dto/create-movie.dto';

@Injectable()
export class MoviesService {
  constructor(private prismaService: PrismaService) { }

  async create(createMovieDto: CreateMovieDto) {
    try {
      const response = await this.prismaService.films.createMany({
        data: [createMovieDto],
      });
      return response;
    } catch (error) {
      return error;
    }
  }

  async findAll() {
    try {
      const movies = await this.prismaService.films.findMany();
      const randomMovies = [];
      const getRandomMovie = (movies: string | any[]) => {
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
      return randomMovies;
    } catch (error) {
      return error;
    }
  }
}
