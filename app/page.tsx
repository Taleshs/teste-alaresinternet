import Navbar from '@/app/components/Navbar'
import Planos from '@/app/components/Planos'

export default function Home() {
  return (
    <>
     <Navbar/>
      <div className="container mx-auto px-4">
        <Planos />
      </div>
    </>
  )
}
