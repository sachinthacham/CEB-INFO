import { Link } from "react-router-dom";
import ceblogo from "../../assets/ceblogo.png";

interface NavItem {
  name: string;
  href: string;
}

const navigation: NavItem[] = [
  { name: "Generation", href: "/generation" },
  { name: "Transmission", href: "/transmission" },
  { name: "AM & CS", href: "/am-cs" },
  { name: "Distribution", href: "/distribution" },
  { name: "CS", href: "/cs-division" },
  { name: "Finance", href: "/finance" },
  { name: "Projects", href: "/projects" },
];

export default function Navbar() {
  return (
    <>
      <div className="bg-blue-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-4">
          <div className="flex h-10 items-center justify-between text-sm">
            <div className="flex items-center space-x-6"></div>
            <div className="flex items-center space-x-4">
              <a href="#" className="hover:text-blue-200">
                Emergency: 1987
              </a>
              <a href="#" className="hover:text-blue-200">
                info@ceb.lk
              </a>
            </div>
          </div>
        </div>
      </div>
      <nav className="bg-white sticky top-0 z-50 shadow-sm border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <Link to="/" className="flex-shrink-0 flex items-center gap-2">
                <img className="h-12 w-auto" src={ceblogo} alt="CEB INFO" />
                <span className="text-3xl font-bold text-blue-900 tracking-tight">
                  CEB INFO
                </span>
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-2">
                {navigation.map((item) => (
                  <div key={item.name} className="group relative inline-block">
                    <Link
                      to={item.href}
                      className="relative inline-flex items-center px-4 py-2 text-md text-blue-900 hover:text-blue-700 focus:outline-none transition-all duration-150"
                    >
                      {item.name}
                      <span
                        className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-500 rounded-full transition-all duration-700 group-hover:w-full"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
