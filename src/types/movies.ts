export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  video: string;
  vote_average: number;
  key: string;
  runtime: number;
  release_date: string;
  genres: {
    name: string
  }[];
  }

export interface Video {
  key: string;
  name: string;
  type: string;
  id: string;
  site: string;
}