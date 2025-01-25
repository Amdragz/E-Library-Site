import { useMemo, useState } from "react";
import Book, { Books } from "../components/library/book";
import Pagination from "../components/common/pagination";
// import api from "../api";

export default function Library() {
  const [books] = useState<Books[]>([
    {
      id: 1,
      title: "The Adventures of Time",
      author: "John Doe",
      genre: "Science Fiction",
      year: 2020,
      content:
        "A thrilling journey through time and space, full of mystery and wonder.",
      coverImage:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      bookmarks: 120,
    },
    {
      id: 2,
      title: "Whispers of the Ocean",
      author: "Jane Smith",
      genre: "Romance",
      year: 2018,
      content:
        "A tale of love, loss, and self-discovery set against the backdrop of the deep sea.",
      coverImage:
        "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      bookmarks: 85,
    },
    {
      id: 3,
      title: "Into the Wilderness",
      author: "Emily Johnson",
      genre: "Adventure",
      year: 2019,
      content:
        "An exploration of the untamed beauty of nature and the courage to face it.",
      coverImage:
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      bookmarks: 95,
    },
    {
      id: 4,
      title: "The Cosmic Mind",
      author: "Robert Brown",
      genre: "Philosophy",
      year: 2021,
      content:
        "Delve into the wonders of the universe and the mind's connection to the cosmos.",
      coverImage:
        "https://images.unsplash.com/photo-1507842217343-583bb7270b66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      bookmarks: 110,
    },
    {
      id: 5,
      title: "Echoes of the Past",
      author: "Laura Wilson",
      genre: "Mystery",
      year: 2017,
      content: "A gripping mystery unravels as ancient secrets come to light.",
      coverImage:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      bookmarks: 70,
    },
    {
      id: 6,
      title: "Beyond the Horizon",
      author: "Michael Scott",
      genre: "Drama",
      year: 2022,
      content:
        "A journey of hope, determination, and the pursuit of a dream beyond the unknown.",
      coverImage:
        "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      bookmarks: 150,
    },
  ]);

  // const [books, setBooks] = useState<Books[]>([]);

  // const getBooks = () => {
  //   api
  //     .get("/api/notes/")
  //     .then((res) => res.data)
  //     .then((data) => {
  //       setBooks(data);
  //     })
  //     .catch((err) => alert(err));
  // };

  const [searchTerm, setSearchTerm] = useState("");
  const filteredBooks = useMemo(() => {
    return books.filter(
      (book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [books, searchTerm]);

  return (
    <div className="max-w-[82rem] px-4 mx-auto mt-6 md:mt-10">
      <div className="flex flex-col md:flex-col items-center gap-4 md:justify-between py-5 sm:py-7 sm:pb-10">
        <h2 className="text-2xl sm:text-4xl font-bold text-left text-gray-600">
          Explore Our Collection of Books
        </h2>
        <div className="relative lg:px-0 w-full md:max-w-xl">
          <input
            type="text"
            placeholder="Search books by title or author.."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
            className="w-full pl-12 py-2 border-2 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-1/2 left-5 -translate-y-1/2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="gray"
            stroke-width="2"
            width="20"
            height="20"
          >
            <circle cx="11" cy="11" r="8" stroke="gray" stroke-width="2" />
            <line
              x1="16.5"
              y1="16.5"
              x2="21"
              y2="21"
              stroke="gray"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </div>

      {filteredBooks.length === 0 ? (
        <div className="grid place-items-center min-h-[50vh] px-4">
          <div className="flex flex-col items-center gap-4 p-6">
            <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
              No Results Found
            </h1>
            <p className="text-center text-gray-600 max-w-md">
              We couldn&apos;t find anything matching your search. Please try
              again.
            </p>
          </div>
        </div>
      ) : (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 pb-3 sm:pb-8 w-full">
          {books.map((book) => (
            <Book key={book.id} book={book} />
          ))}
        </section>
      )}
      {filteredBooks.length === 0 ? <></> : <Pagination />}
    </div>
  );
}
