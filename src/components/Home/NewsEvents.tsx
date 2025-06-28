import {
  
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import img1 from "../../assets/04_2.png";
import img2 from "../../assets/06_2.png";
import img3 from "../../assets/07_2.png";

const news = [
  {
    id: 1,
    title: "CEB Launches New Online Payment System",
    description:
      "A new online payment system has been launched to make bill payments more convenient for customers.",
    date: "2024-03-15",
    category: "News",
    image: img1,
  },
  {
    id: 2,
    title: "Power Plant Maintenance Schedule",
    description:
      "Scheduled maintenance activities for power plants in the Western Province.",
    date: "2024-03-20",
    category: "Notice",
    image: img2,
  },
  {
    id: 3,
    title: "Energy Conservation Workshop",
    description:
      "Join us for a workshop on energy conservation techniques for residential customers.",
    date: "2024-03-25",
    category: "Event",
    image: img3,
  },
];

export default function NewsEvents() {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block w-10 h-1 bg-blue-500 rounded-full mb-2" />
          <h2 className="text-xl font-semibold tracking-tight text-blue-900">
            News & Events
          </h2>
          <p className="mt-2 text-base leading-7 text-blue-800">
            Stay updated with the latest news and upcoming events from CEB.
          </p>
        </div>
        <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 sm:mt-12 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {news.map((item) => (
            <article
              key={item.id}
              className="flex flex-col items-start justify-between rounded-xl bg-blue-50  p-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-36 object-cover rounded-t-xl"
              />
              <div className="flex flex-col flex-1 p-5">
                <div className="flex items-center gap-x-3 text-xs text-gray-500 mb-2">
                  <time dateTime={item.date} className="">
                    {new Date(item.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </time>
                  <span className="inline-block rounded px-2 py-0.5 text-xs font-medium bg-ceb-primary/10 text-ceb-primary">
                    {item.category}
                  </span>
                </div>
                <div className="group relative w-full flex-1">
                  <h3 className="mt-1 text-base font-semibold leading-6 text-blue-900 group-hover:text-ceb-primary transition-colors">
                    <a href="#">
                      <span className="absolute inset-0" />
                      {item.title}
                    </a>
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-blue-900">
                    {item.description}
                  </p>
                </div>
                <div className="relative mt-4">
                  <a
                    href="#"
                    className="inline-flex items-center gap-1 text-sm font-medium text-ceb-primary hover:underline focus:outline-none"
                  >
                    Read more
                    <ArrowRightIcon className="w-4 h-4 text-ceb-primary group-hover:text-blue-700 transition-colors" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
