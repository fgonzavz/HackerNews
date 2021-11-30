export interface Noticia {

    author?: string;
    story_title?: string;
    story_url?: string;
    created_at?: number;
}

export interface RootObject {
    noticias: Noticia[];
  }