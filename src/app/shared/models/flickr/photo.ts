import { Tag } from './../tag';
export interface Photo {
  id: string;
  secret: string;
  server: string;
  title: string;
  url?: string;
  tags: Tag[];
}
