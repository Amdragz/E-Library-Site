import { Link } from "react-router-dom";

export default function NewsLetter() {
  return (
    <div className="max-w-6xl lg:max-w-none py-6 mx-auto rounded-xl">
      <div className="max-w-xl lg:max-w-none text-center mx-auto lg:flex lg:items-center lg:justify-between">
        <h2 className="text-left sm:text-center text-2xl font-bold md:text-3xl md:leading-tight text-gray-600">
          Sign up to our newsletter
        </h2>

        <form className="max-w-xl w-full">
          <div className="mt-5 lg:mt-0 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
            <div className="w-full">
              <label htmlFor="hero-input" className="sr-only">
                Search
              </label>
              <input
                type="text"
                id="hero-input"
                name="hero-input"
                className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                placeholder="Enter your email"
              />
            </div>
            <Link
              className="w-full sm:w-auto whitespace-nowrap py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:bg-blue-600 disabled:opacity-50 disabled:pointer-events-none"
              to="#"
            >
              Subscribe
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
