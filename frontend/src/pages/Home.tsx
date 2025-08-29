import Button from "@/components/Button"
import Hero from "../components/Hero"
import OurDifferential from "../components/OurDifferential"
import SectionCategory from "../components/SectionCategory"
import SectionOurProducts from "../components/SectionOurProducts"

function Home () {

  return (
    <main>
      <Hero />
      <SectionCategory />
      <SectionOurProducts />
      <Button text="Show More" variant="primary" toPath="/shop" />
      <OurDifferential />
    </main>
  )
}

export default Home
