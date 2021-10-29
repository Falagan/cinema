import { Movie } from "@cinema/lib-cinema";

export interface MoviesState {
  list: Movie[];
  loading: boolean;
  profile: Movie | null;
}
