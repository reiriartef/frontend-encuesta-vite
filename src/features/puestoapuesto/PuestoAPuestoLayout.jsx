import { Outlet, useLocation } from 'react-router';

function PuestoAPuestoLayout() {
  const location = useLocation();

  const isPuestoAPuestoRoute =
    location.pathname === '/puestoapuesto/' ||
    location.pathname === '/puestoapuesto';
  return (
    <div className="min-h-full w-full" style={{ width: '100%' }}>
      <nav className="bg-blue-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-center">
            <div className="flex items-center">
              <div className="shrink-0">
                <img className="size-12" src="/darzulia.png" alt="DAR logo" />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a
                    href="/puestoapuesto/registro"
                    className="rounded-md px-3 py-2 text-sm font-medium text-blue-300 hover:bg-blue-700 hover:text-white"
                    aria-current="page"
                  >
                    Registro Puesto a Puesto
                  </a>
                  <a
                    href="/puestoapuesto/resultados"
                    className="rounded-md px-3 py-2 text-sm font-medium text-blue-300 hover:bg-blue-700 hover:text-white"
                    aria-current="page"
                  >
                    Resultados
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            <a
              href="/puestoapuesto/registro"
              className="block rounded-md px-3 py-2 text-base text-center font-medium text-blue-300 hover:bg-blue-700 hover:text-white"
              aria-current="page"
            >
              Registro Puesto a Puesto
            </a>
            <a
              href="/puestoapuesto/resultados"
              className="block rounded-md px-3 py-2 text-base text-center font-medium text-blue-300 hover:bg-blue-700 hover:text-white"
            >
              Resultados
            </a>
          </div>
        </div>
      </nav>

      <main>
        <div className="flex flex-col min-h-screen min-w-full mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          {isPuestoAPuestoRoute ? (
            <div className="flex items-center justify-center h-full">
              <img
                src="/darzulia.png"
                alt="Imagen Placeholder"
                className="h-64"
              />
            </div>
          ) : (
            <Outlet />
          )}
        </div>
        <footer className="bg-gray-800 text-white text-center py-4 sticky bottom-0">
          © {new Date().getFullYear()} Oficina de Apoyo Técnico Informático.
          Palacio de Justicia de Maracaibo. Todos los derechos reservados.
        </footer>
      </main>
    </div>
  );
}

export default PuestoAPuestoLayout;
