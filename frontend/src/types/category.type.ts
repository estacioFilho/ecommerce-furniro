import type Range from "./range.type";

export default interface Category {
  id: number;
  name: string;
  image: string | null;   
  isDisabled: boolean;
  range: Range;
}
