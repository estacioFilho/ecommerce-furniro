import ProductList from "./ProductList"
import SectionTitle from "./SectionTitle"

const SectionOurProducts = () => {
  return (
    <section className="container mx-auto my-auto">
      <SectionTitle text='Our Products' />
      <ProductList />
    </section>
  )
}

export default SectionOurProducts