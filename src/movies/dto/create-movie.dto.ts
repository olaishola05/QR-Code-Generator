import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsArray,
  IsBoolean,
  IsOptional,
} from 'class-validator';

export class CreateMovieDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  Title: string;

  @ApiProperty()
  @IsBoolean()
  ComingSoon?: boolean;

  @ApiProperty()
  @IsOptional()
  Year: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  Genre: string;

  @ApiProperty()
  @IsOptional()
  totalSeasons?: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  Director: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  Actors: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  Plot: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  Poster: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  imdbRating: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  imdbVotes: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  imdbID: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  Type: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  Metascore: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  Response: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  Runtime: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  Country: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  Language: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  Awards: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  Rated: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  Released: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  Writer: string;

  @ApiProperty()
  @IsArray()
  Images: string[];
}
