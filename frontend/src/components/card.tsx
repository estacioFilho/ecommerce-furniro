type Product = {
  image: string;
  name: string;
  subtitle: string;
  price: number;
  discount: number;
}

const card = ({ image, name, subtitle, price, discount }: Product) => {
  return (
    <li>
      <div>
        <span>
          <p>-{discount}%</p>
        </span>
        <img src={image} alt={name} />
      </div>
      <div>
        <h3>{name}</h3>
        <p>{subtitle}</p>
        <div>
          <h3>Rp {price}</h3>
          <p>Rp {price * discount / 100 + price}</p>
        </div>
      </div>
    </li>
  )
}

export default card