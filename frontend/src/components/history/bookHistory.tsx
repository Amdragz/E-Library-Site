import { useState } from "react";

const books = [
  {
    id: 1,
    title: "The Adventures of Time",
    author: "John Doe",
    genre: "Science Fiction",
    coverImage:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    status: "Read",
    statusColor: "text-emerald-500 bg-emerald-100/60",
    purchaseDate: "Jan 6, 2022",
  },
  {
    id: 2,
    title: "Quantum Horizons",
    author: "Jane Smith",
    genre: "Science Fiction",
    coverImage:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    status: "Seen",
    statusColor: "text-blue-500 bg-blue-100/60",
    purchaseDate: "Jan 5, 2022",
  },
  {
    id: 3,
    title: "Echoes of Eternity",
    author: "Mike Johnson",
    genre: "Fantasy",
    coverImage:
      "https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    status: "Read",
    statusColor: "text-emerald-500 bg-emerald-100/60",
    purchaseDate: "Dec 15, 2021",
  },
  {
    id: 4,
    title: "Whispers of the Wind",
    author: "Emily Brown",
    genre: "Mystery",
    coverImage:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    status: "Pending",
    statusColor: "text-red-500 bg-red-100/60",
    purchaseDate: "Feb 10, 2022",
  },
  {
    id: 5,
    title: "Cyber Legends",
    author: "Alex Rodriguez",
    genre: "Cyberpunk",
    coverImage:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    status: "Read",
    statusColor: "text-emerald-500 bg-emerald-100/60",
    purchaseDate: "Mar 20, 2022",
  },
];

export default function BookHistory() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(books.length / itemsPerPage);

  const paginatedBooks = books.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="mt-10 md:mt-16">
      <h1 className="text-2xl sm:text-4xl font-bold text-left text-gray-600">
        Download, view and track books
      </h1>
      <div className="pt-3 pb-8 md:py-8">
        <section className="container mx-auto">
          <div className="bg-white border overflow-x-auto">
            <table className="w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th
                    scope="col"
                    className="py-5 px-4 text-sm font-semibold text-left text-gray-600"
                  >
                    <div className="flex items-center gap-x-3">
                      <input
                        type="checkbox"
                        className="text-blue-500 border-gray-300 rounded"
                      />
                      <button className="flex items-center gap-x-2">
                        <span>Book</span>
                        <svg
                          className="h-3"
                          viewBox="0 0 10 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.13347 3.99778L2.13347 4.99226C2.13347 5.21817 2.31164 5.40001 2.53759 5.40001H4.13338V6.99581C4.13338 7.22172 4.31155 7.40356 4.53759 7.40356H5.53276C5.75871 7.40356 5.93688 7.22539 5.93688 6.99581V5.40001H7.56246C7.7884 5.40001 7.96657 5.21817 7.96657 4.99226V4.00001C7.96657 3.77409 7.7884 3.59226 7.56246 3.59226H5.93688V1.99646C5.93688 1.77054 5.7587 1.59237 5.53276 1.59237H4.53759C4.31164 1.59237 4.13347 1.77054 4.13347 1.99646V3.59226H2.53759C2.31164 3.59226 2.13347 3.77409 2.13347 3.99778Z"
                            fill="currentColor"
                          />
                        </svg>
                      </button>
                    </div>
                  </th>

                  <th
                    scope="col"
                    className="px-4 py-3.5 text-sm font-semibold text-left text-gray-600"
                  >
                    Title
                  </th>

                  <th
                    scope="col"
                    className="px-4 py-3.5 text-sm font-semibold text-left text-gray-600"
                  >
                    Author
                  </th>

                  <th
                    scope="col"
                    className="px-4 py-3.5 text-sm font-semibold text-left text-gray-600"
                  >
                    Genre
                  </th>

                  <th
                    scope="col"
                    className="px-4 py-3.5 text-sm font-semibold text-left text-gray-600"
                  >
                    Status
                  </th>

                  <th
                    scope="col"
                    className="px-4 py-3.5 text-sm font-semibold text-left text-gray-600"
                  >
                    Purchase Date
                  </th>

                  <th scope="col" className="relative py-3.5 px-4">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {paginatedBooks.map((book) => (
                  <tr key={book.id}>
                    <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                      <div className="inline-flex items-center gap-x-3">
                        <input
                          type="checkbox"
                          className="text-blue-500 border-gray-300 rounded"
                        />
                        <span>{book.id}</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                      <div className="flex items-center gap-x-2">
                        <img
                          className="object-cover w-10 h-10 rounded"
                          src={book.coverImage}
                          alt={book.title}
                        />
                        <span>{book.title}</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                      {book.author}
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                      {book.genre}
                    </td>
                    <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                      <div
                        className={`inline-flex items-center px-3 py-1 rounded-full gap-x-2 ${book.statusColor}`}
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 3L4.5 8.5L2 6"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <h2 className="text-sm font-normal">{book.status}</h2>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                      {book.purchaseDate}
                    </td>
                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                      <div className="flex items-center gap-x-6">
                        <button className="text-gray-500 hover:text-blue-500 transition-colors">
                          View
                        </button>
                        <button className="text-blue-500 hover:text-blue-600 transition-colors">
                          Download
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-between mt-6">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="flex items-center px-5 py-2 text-sm text-gray-900 bg-white border border-gray-500 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>
              <span>Previous</span>
            </button>

            <div className="flex items-center overflow-x-auto max-w-full space-x-2">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`px-2 py-1 text-sm rounded-md ${
                    currentPage === index + 1
                      ? "bg-blue-100/60 text-blue-500"
                      : "text-gray-500 hover:bg-gray-100"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="flex items-center px-5 py-2 text-sm text-gray-900 bg-white border border-gray-500 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span>Next</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
