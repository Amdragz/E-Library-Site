import { Link } from "react-router-dom";

type NewsItem = {
  id: number;
  category: string;
  title: string;
  imageUrl: string;
  link: string;
};

const news: NewsItem[] = [
  {
    id: 1,
    category: "Product",
    title: "Better is when everything works together",
    imageUrl:
      "https://images.unsplash.com/photo-1668869713519-9bcbb0da7171?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80",
    link: "#",
  },
  {
    id: 2,
    category: "Business",
    title: "What CFR really is about",
    imageUrl:
      "https://images.unsplash.com/photo-1668584054035-f5ba7d426401?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80",
    link: "#",
  },
  {
    id: 3,
    category: "Business",
    title: "Should Product Owners think like entrepreneurs?",
    imageUrl:
      "https://images.unsplash.com/photo-1668863699009-1e3b4118675d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80",
    link: "#",
  },
  {
    id: 4,
    category: "Facilitate",
    title: "Announcing Front Strategies: Ready-to-use rules",
    imageUrl:
      "https://images.unsplash.com/photo-1668584054131-d5721c515211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80",
    link: "#",
  },
];

export default function News() {
  return (
    <div  id="news" className="w-full px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
      <div className="max-w-2xl text-center mx-auto mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">
          Read our latest news
        </h2>
        <p className="mt-1 text-gray-600">
          We've helped some great companies brand, design and get to market.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 lg:mb-14">
        {news.map((item) => (
          <Link
            key={item.id}
            to={item.link}
            className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md focus:outline-none focus:shadow-md transition"
          >
            <div className="aspect-w-16 aspect-h-9">
              <img
                className="w-full object-cover rounded-t-xl"
                src={item.imageUrl}
                alt={`${item.title} Image`}
              />
            </div>
            <div className="p-4 md:p-5">
              <p className="mt-2 text-xs uppercase text-gray-600">
                {item.category}
              </p>
              <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600">
                {item.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center">
        <div className="inline-block bg-white border shadow-sm rounded-full">
          <div className="py-3 px-4 flex items-center gap-x-2">
            <p className="text-gray-600">Want to read more?</p>
            <Link
              to="/register"
              className="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium"
            >
              Go here
              <svg
                className="shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
