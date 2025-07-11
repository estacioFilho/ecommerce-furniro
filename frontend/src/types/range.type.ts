import type Category from "./category.type";

export default interface Range {
  id: number;
  name: string;
  image: string | null;       
  isDisabled: boolean;
  categories: Category[];
}
