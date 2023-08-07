// components/Navbar.js
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <header>
      <nav className="bg-primary-700 border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <span className="flex items-center">
            <Link href="/">
              <Image
                src="https://alaresinternet.com.br/wp-content/themes/alares/assets/images/template/logo.png"
                width={120}
                height={26}
                className="mr-3 h-6 sm:h-9"
                alt="Alaris Logo"
              />
            </Link>
          </span>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link
                  href="/admin"
                  className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent "
                  aria-current="page"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/admin/planos"
                  className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent"
                >
                  Planos
                </Link>
              </li>
              <li>
                <Link
                  href="/admin/pedidos"
                  className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent "
                >
                  Pedidos
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
