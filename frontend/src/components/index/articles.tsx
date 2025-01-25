import { BiChevronRight, BiTime, BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";

type Post = {
  title: string;
  description: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  imgSrc: string;
};

const posts: Post[] = [
  {
    title: "Understanding Modern Library Systems",
    description:
      "Explore the evolution of library management systems and how they're shaping the future of education.",
    author: "Dr. Sarah Johnson",
    date: "January 15, 2024",
    category: "Digital Libraries",
    readTime: "8 min read",
    imgSrc:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "The Impact of E-Books on Academic Learning",
    description:
      "Research findings on how digital reading materials are transforming educational outcomes.",
    author: "Prof. Michael Chen",
    date: "January 12, 2024",
    category: "E-Learning",
    readTime: "6 min read",
    imgSrc:
      "https://images.unsplash.com/photo-1668863699009-1e3b4118675d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80",
  },
  {
    title: "Digital Archives: Preserving Knowledge",
    description:
      "How modern libraries are ensuring the preservation of valuable information for future generations.",
    author: "Dr. Emily Williams",
    date: "January 10, 2024",
    category: "Digital Preservation",
    readTime: "10 min read",
    imgSrc:
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
  },
];

export default function Articles() {
  return (
    <section id="articles" className="bg-gray-50 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Featured Articles
            </h2>
            <p className="mt-2 text-gray-600">
              Latest insights from library science experts
            </p>
          </div>

          <Link
            to="/login"
            className="hidden sm:flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            View all articles
            <BiChevronRight className="ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden"
            >
              <div className="relative">
                <img
                  className="w-full h-48 object-cover"
                  src={post.imgSrc}
                  alt={post.title}
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 gap-4 mb-3">
                  <span className="flex items-center">
                    <BiTime className="mr-1" />
                    {post.readTime}
                  </span>
                  <span className="flex items-center">
                    <BiUser className="mr-1" />
                    {post.author}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {post.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-2">
                  {post.description}
                </p>

                <Link
                  to={`/article/${index}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  Read more
                  <BiChevronRight className="ml-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link
            to="/articles"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            View all articles
            <BiChevronRight className="ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
