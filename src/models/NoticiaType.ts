export interface NoticiaType {
  id: number;
  date: Date;
  title: string;
  content: string;
  author: string;
  categories: string[];
  url: string;
}
