import Link from "next/link";
import Navbar from "@/app/components/Navbar";

export default function Admin() {
  return (
    <>
      <Navbar />
      <section class="bg-white">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
            <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900">
              Alares Internet
            </h2>
            <p class="font-light text-gray-500 sm:text-x">
              Projeto Crud de Pedidos e Planos - Tales Henrique
            </p>
          </div>
          <div class="grid gap-8 lg:grid-cols-2">
            <div class="p-6 bg-white rounded-lg border border-gray-200 shadow-md">
              <Link
                href="/admin/planos"
                class="px-6 py-3.5 text-base font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center"
              >
                Planos
              </Link>
            </div>
            <div class="p-6 bg-white rounded-lg border border-gray-200 shadow-md">
              <Link
                href="/admin/pedidos"
                class="px-6 py-3.5 text-base font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center"
              >
                Pedidos
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
