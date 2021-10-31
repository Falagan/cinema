import { Actor, Company, Movie } from '@cinema/lib-cinema';

export interface MoviesState {
  list: Movie[];
  loading: boolean;
  actors: Actor[];
  companies: Company[];
  genre: string[];
  profile: Movie | null;
}
