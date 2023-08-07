import Navbar from '@/app/components/Navbar';
import PlanosForm from '@/app/components/planos/planosForm'
import PlanoList from '@/app/components/planos/planosList';

export default function AdminPedidos() {
  return (
    <>
     <Navbar/>
     <section class="bg-white">
        <div class="py-8 px-4 mx-auto max-w-screen-xl ">
          <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
            <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900">
              Planos
            </h2>
          </div>
          <hr className="h-px my-4 bg-gray-200 border-0"></hr>
          <div class="grid gap-8 lg:grid-cols-2">
            <div><PlanosForm/></div>
            <div><PlanoList /></div>
          </div>
        </div>
      </section>
     
    </>
  )
}
