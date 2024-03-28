import Sedans from "./Components/Sedans"
import Suvs from "./Components/Suvs"
import Luxo from "./Components/Luxo"


export default function App() {
  return (
    <main className="min-h-svh bg-offwhitebg py-20 px-6 antialiased lg:flex justify-center items-center">
      <section className="lg:flex max-w-[920px]">
        <Sedans/>
        <Suvs/>
        <Luxo/>
      </section>
    </main>
  )
}
