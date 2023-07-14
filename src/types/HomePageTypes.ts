export type Result = {
  adul: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  media_type: 'movie' | 'tv' | Omit<string, 'movie' | 'tv'>;
  original_language: 'en' | Omit<string, 'en'>;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: false;
  vote_average: number;
  vote_count: number;
};

export type Value = {
  page: number;
  results: Result[];
  total_pages: number;
  total_results: number;
};