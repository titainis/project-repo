export interface MediaType {
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
  name: string;
  type: string;
  site: string;
  number_of_seasons: number;
  number_of_episodes: number;
  first_air_date: string;
}

