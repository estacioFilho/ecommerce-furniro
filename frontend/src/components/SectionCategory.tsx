import { useFetch } from "@/hooks/useFetch";
import SectionTitle from "./SectionTitle"
import { Link } from "react-router";

type Category = {
  id: number;
  name: string;
  image: string;
}

const apiUrl = import.meta.env.VITE_API_URL;

const SectionCategory = () => {
  const { data: dataCategory, loading, error } = useFetch<Category[]>(`${apiUrl}/ranges`)


  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error.message}</p>;

  console.log(dataCategory)
  return (
    <section className="container my-auto mx-auto ">
      <SectionTitle text='Browse The Range' className='text-3xl text-center my-15 font-bold text-gray-title' />
      <ul className='flex flex-col lg:flex-row lg:px-0 gap-5 px-4 justify-center'>
        {dataCategory?.map((item) => {
          return (
            <Link key={item.id} to={`/shop?${item.name}`}>
              <li className='flex flex-col gap-7'>
                <img className="w-full h-[40vh] object-cover" src={item.image} alt={`Image this category ${item.name}`} />
                <h3 className='text-2xl font-semibold text-center capitalize '>{item.name}</h3>
              </li>
            </Link>
          )
        })}
      </ul>
    </section>
  )
}

export default SectionCategory