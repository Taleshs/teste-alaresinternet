// components/Navbar.js
import Link from "next/link";
import Image from "next/image";

const NavbarPedidos = () => {
  return (
    <header>
      <nav className="bg-primary-900 border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-end items-center mx-auto max-w-screen-xl">
          
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link
                  href="/admin/pedidos/andamento"
                  className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent "
                  aria-current="page"
                >
                  Em andamento
                </Link>
              </li>
              <li>
                <Link
                  href="/admin/pedidos/concluidos"
                  className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent"
                >
                  Concluidos
                </Link>
              </li>
              <li>
                <Link
                  href="/admin/pedidos/arquivados"
                  className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent "
                >
                  Arquivados
                </Link>
              </li>
              <li>
                <Link
                  href="/admin/pedidos/todos"
                  className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent "
                >
                  Ver todos
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavbarPedidos;
