import { BiBook, BiSearchAlt } from "react-icons/bi";
import {
  FaArrowRight,
  FaBookReader,
  FaGraduationCap,
  FaLaptop,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-16 py-16 bg-gradient-to-br from-blue-50/30 via-white to-blue-50/20">
      <div className="max-w-screen-xl mx-auto flex lg:gap-x-8 xl:gap-x-16 lg:items-center md:gap-6 lg:justify-between">
        <div className="lg:w-1/2">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6">
            <span className="text-blue-600 text-sm font-medium">
              Discover Knowledge
            </span>
            <FaArrowRight className="text-blue-600 text-sm" />
          </div>

          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Your Gateway to
            <span className="text-blue-600"> Digital Learning</span>
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-xl">
            Access a comprehensive collection of academic resources, research
            papers, and digital content. Empowering education through
            technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <div className="relative flex-grow max-w-xl">
              <input
                type="text"
                className="w-full px-6 py-4 pl-12 text-base rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-200 transition-all duration-200"
                placeholder="Search our vast collection..."
              />
              <BiSearchAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
            </div>
            <Link
              to="#"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors duration-200 shadow-sm hover:shadow-md whitespace-nowrap"
            >
              <BiBook className="mr-2" />
              Explore Library
            </Link>
          </div>

          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900">
              World-Class Features
            </h2>
            <div className="grid grid-cols-3 gap-8">
              <div className="space-y-3">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100">
                  <FaGraduationCap className="text-blue-600 text-xl" />
                </div>
                <h3 className="font-medium text-gray-900">
                  Academic Excellence
                </h3>
                <p className="text-sm text-gray-600">
                  Curated scholarly content
                </p>
              </div>
              <div className="space-y-3">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100">
                  <FaBookReader className="text-blue-600 text-xl" />
                </div>
                <h3 className="font-medium text-gray-900">
                  24/7 Accessibility
                </h3>
                <p className="text-sm text-gray-600">Learn at your pace</p>
              </div>
              <div className="space-y-3">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100">
                  <FaLaptop className="text-blue-600 text-xl" />
                </div>
                <h3 className="font-medium text-gray-900">
                  Digital Innovation
                </h3>
                <p className="text-sm text-gray-600">Modern learning tools</p>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:block lg:w-1/2">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-white rounded-3xl transform rotate-3"></div>
            <div className="relative bg-white rounded-3xl shadow-xl p-8 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="grid grid-cols-2 gap-6">
                {[
                  {
                    icon: <FaBookReader />,
                    title: "Smart Reader",
                    desc: "Interactive reading experience",
                  },
                  {
                    icon: <FaGraduationCap />,
                    title: "Research Hub",
                    desc: "Advanced research tools",
                  },
                  {
                    icon: <BiBook />,
                    title: "Digital Archives",
                    desc: "Extensive collection",
                  },
                  {
                    icon: <FaLaptop />,
                    title: "E-Learning",
                    desc: "Integrated learning platform",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="text-blue-600 text-2xl mb-3">
                      {item.icon}
                    </div>
                    <h3 className="font-medium text-gray-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
