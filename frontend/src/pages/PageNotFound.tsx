import { Link } from "react-router"

const NotFoundPage = () => {
  return (
    <div className='max-w-[80vw] mx-auto text-center pt-[1rem]'>
      <h2 className="font-bold text-4xl text-secondary">Ops! Página não encontrada(404)
      </h2>
      <p className='text-[0.8rem] text-gray-text py-[2rem]'>Parece que o link que você tentou acessar não existe ou foi removido.</p>
      <Link className='text-secondary text-[1rem] font-medium underline' to='/'>Home</Link>
    </div>
  )
}

export default NotFoundPage