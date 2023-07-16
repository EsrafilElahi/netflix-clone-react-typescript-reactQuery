export type Result = {
  adul?: boolean;
  backdrop_path?: string | null;
  genre_ids?: number[];
  id?: number;
  media_type?: 'movie' | 'tv' | Omit<string, 'movie' | 'tv'>;
  original_language?: 'en' | Omit<string, 'en'>;
  // original_title??: string | undefined;
  overview?: string;
  popularity?: number;
  poster_path?: string | null;
  // release_date??: string | undefined;
  title?: string;
  video?: false;
  vote_average?: number;
  vote_count?: number;
  key?: number;
};

export type Result1 = Result & {
  original_name?: string | undefined;
  first_air_date?: string | undefined,
}

export type Result2 = Result & {
  original_title?: string | undefined;
  release_date?: string | undefined;
}

export type Value = {
  page: number;
  results: Result1[] | Result2;
  total_pages: number;
  total_results: number;
};