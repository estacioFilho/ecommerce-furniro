import { useFetch } from "@/hooks/useFetch";
import SectionTitle from "./SectionTitle"
import { Link } from "react-router";

type Category = {
  id: number;
  name: string;
  image: string;
}
const SectionCategory = () => {
  const { data: dataCategory, loading, error } = useFetch<Category[]>('http://localhost:3000/category')


  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error.message}</p>;

  console.log(dataCategory)
  return (
    <section>
      <SectionTitle text='Browse The Range' className='text-3xl text-center my-15 font-bold text-gray-title' />
      <ul className='flex gap-5 justify-center'>
        {dataCategory?.map((item) => {
          return (
            <Link key={item.id} to={`/shop?${item.name}`}>
              <li className='flex flex-col gap-7'>
                <img src={item.image} alt="" />
                <h3 className='text-2xl font-semibold text-center '>{item.name}</h3>
              </li>
            </Link>
          )
        })}
      </ul>
    </section>
  )
}

export default SectionCategory