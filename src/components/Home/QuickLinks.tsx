import {
  GlobeAltIcon,
  UserGroupIcon,
  CalculatorIcon,
  DocumentTextIcon,
  ClipboardDocumentListIcon,
  CurrencyDollarIcon,
  MagnifyingGlassIcon,
  MusicalNoteIcon,
  BookOpenIcon,
  EnvelopeIcon,
  AcademicCapIcon,
  HomeModernIcon,
  UserIcon,
} from "@heroicons/react/24/outline";



const links = [
  {
    name: "CEB Web",
    description: "Visit the official CEB website",
    href: "https://www.ceb.lk/",
    icon: GlobeAltIcon,
  },
  {
    name: "Human Resource",
    description: "Access HR services and information",
    href: "/human-resources",
    icon: UserGroupIcon,
  },
  {
    name: "Bill Calculator",
    description: "Calculate your electricity bill",
    href: "/bill-calculator",
    icon: CalculatorIcon,
  },
  {
    name: "Standard CEB Stationery",
    description: "Download standard stationery templates",
    href: "/standard-stationary",
    icon: ClipboardDocumentListIcon,
  },
  {
    name: "Provident Fund",
    description: "View provident fund details",
    href: "/provident-fund",
    icon: CurrencyDollarIcon,
  },
  {
    name: "Ordinary Supply Tariff",
    description: "Check the latest supply tariffs",
    href: "/ordinary-supply-tariff",
    icon: DocumentTextIcon,
  },
  {
    name: "Find a Circular",
    description: "Search for CEB circulars",
    href: "http://cmds.ceb/",
    icon: MagnifyingGlassIcon,
  },
  {
    name: "CEB Anthem and Mtune",
    description: "Listen to the CEB anthem and mtune",
    href: "#",
    icon: MusicalNoteIcon,
  },
  {
    name: "Trilingual Dictionary",
    description: "Access the trilingual dictionary",
    href: "#",
    icon: BookOpenIcon,
  },
  {
    name: "CEB Mail",
    description: "Access your CEB email account",
    href: "http://emailguide.ceb/",
    icon: EnvelopeIcon,
  },
  {
    name: "Training Branch",
    description: "Information about the training branch",
    href: "/training-branch",
    icon: AcademicCapIcon,
  },
  {
    name: "Circuit Bungalow Reservation",
    description: "Reserve a circuit bungalow",
    href: "https://cbrs.ceb.lk/CBRS/WelcomeCBRS",
    icon: HomeModernIcon,
  },
  {
    name: "Employee Search",
    description: "Search for CEB employees",
    href: "#employee-search",
    icon: UserIcon,
    isScrollLink: true,
  },
];

export default function QuickLinks() {
  const handleLinkClick = (link: any, e: React.MouseEvent) => {
    if (link.isScrollLink) {
      e.preventDefault();
      const element = document.getElementById("employee-search");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <div className="relative bg-white  py-10 sm:py-6 rounded-2xl shadow-2xl border border-blue-200 overflow-hidden grid col-span-5">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <svg
          width="100%"
          height="100%"
          className="h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="dots"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <circle
                cx="1.5"
                cy="1.5"
                r="1.5"
                fill="#3b82f6"
                fillOpacity="0.12"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto text-center">
          <div className="flex flex-col items-center mb-2">
            <span className="inline-block w-10 h-1 bg-blue-500 rounded-full mb-2" />
            <h2 className="text-xl font-black tracking-tight text-blue-900 drop-shadow-lg ">
              Quick Access Links
            </h2>
          </div>
          <p className=" text-sm text-blue-800 max-w-2xl mx-auto">
            Your gateway to essential CEB services and resources. Instantly
            connect to what matters most.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-4xl">
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {links.map((link) => (
              <div
                key={link.name}
                className="relative flex flex-row items-center min-h-[54px] h-[60px] w-full rounded-full bg-gradient-to-r from-white/70 via-blue-50/40 to-white/60 backdrop-blur-lg px-0 py-0 shadow-lg hover:shadow-2xl  transition-all duration-300 group transform hover:scale-[1.018] hover:-translate-y-0.5 cursor-pointer overflow-hidden"
                style={{ boxShadow: "0 4px 18px 0 rgba(31, 38, 135, 0.08)" }}
              >
                {/* Left accent bar */}
                <div className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-blue-500 via-indigo-400 to-blue-400 rounded-l-full shadow-md group-hover:w-2 group-hover:bg-indigo-500 transition-all duration-300" />
                {/* Glassmorphism highlight */}
                <div className="absolute inset-0 pointer-events-none rounded-full bg-gradient-to-r from-white/60 via-blue-100/10 to-indigo-100/10 opacity-50" />
                <dt className="relative z-10 flex flex-row items-center gap-x-3 w-full px-5 py-1.5">
                  <span className="flex items-center justify-center h-8 w-8 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 group-hover:from-blue-200 group-hover:to-indigo-200 shadow-md flex-shrink-0 transition-all duration-300 ring-1 ring-blue-200 group-hover:ring-indigo-400 group-hover:shadow-indigo-200/60">
                    <link.icon
                      className="h-5 w-5 text-blue-600 group-hover:text-indigo-600 transition-colors drop-shadow-[0_1px_4px_rgba(59,130,246,0.18)]"
                      aria-hidden="true"
                    />
                  </span>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(link, e)}
                    className="flex flex-col sm:flex-row sm:items-center justify-between flex-grow group min-w-0"
                  >
                    <span className="group-hover:text-indigo-700 text-blue-900  transition-colors text-[15px] leading-tight whitespace-normal break-words max-w-[220px] sm:max-w-[180px]">
                      {link.name}
                    </span>
                  </a>
                  <span className="ml-auto flex items-center justify-center h-7 w-7 rounded-full bg-blue-50 group-hover:bg-indigo-100 border border-blue-100 group-hover:border-indigo-400 transition-all duration-300 shadow group-hover:shadow-indigo-200/60">
                    <svg
                      className="h-4 w-4 text-blue-500 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all duration-200 flex-shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 12H19M19 12L12 5M19 12L12 19"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
