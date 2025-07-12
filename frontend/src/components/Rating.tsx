import { IoMdStarOutline } from "react-icons/io";
import { IoStar, IoStarHalf } from "react-icons/io5";
type RatingProps = {
  numberRating: number;
}

const Rating = ({ numberRating }: RatingProps) => {

  const fullStars = Math.floor(numberRating);
  const hasHalfStar = numberRating - fullStars >= 0.5;
  return (
    <ul className="flex w-[100%/2] items-center text-[18px] gap-1 text-yellow-400">
      {Array.from({ length: fullStars }).map((_, idx) => (
        <li key={`full-${idx}`}>
          <IoStar />
        </li>
      ))}
      {hasHalfStar && (
        <li>
          <IoStarHalf />
        </li>
      )}
      {Array.from({ length: 5 - fullStars - (hasHalfStar ? 1 : 0) }).map((_, idx) => (
        <li key={`empty-${idx}`}>
          <IoMdStarOutline />
        </li>
      ))}
    </ul>
  )
}

export default Rating