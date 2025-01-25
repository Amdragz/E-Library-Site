export type Books = {
  id: number;
  title: string;
  author: string;
  genre: string;
  year: number;
  content: string;
  coverImage: string;
  bookmarks: number;
};

interface BooksProp {
  book: Books;
}

export default function Book({ book }: BooksProp) {
  return (
    <div className="flex flex-col bg-white rounded-md shadow-md">
      <div>
        <img
          src={book.coverImage}
          alt={book.title}
          className="object-cover w-full rounded-tr-md rounded-tl-md h-60 sm:h-80"
        />
      </div>

      <div className="p-3 sm:p-4">
        <h2 className="mb-1 text-xl font-semibold">{book.title}</h2>
        <p className="text-md text-gray-700">By {book.author}</p>
        <p className="text-xs text-gray-500">
          {book.genre} • {book.year}
        </p>
        <p className="mt-2 text-sm text-gray-600 line-clamp-3">
          {book.content}
        </p>

        <div className="flex flex-wrap items-center justify-between py-4">
          <div className="space-x-2">
            <button
              aria-label="Share this book"
              type="button"
              className="p-2 rounded hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-4 h-4 fill-current"
              >
                <path d="M404,344a75.9,75.9,0,0,0-60.208,29.7L179.869,280.664a75.693,75.693,0,0,0,0-49.328L343.792,138.3a75.937,75.937,0,1,0-13.776-28.976L163.3,203.946a76,76,0,1,0,0,104.108l166.717,94.623A75.991,75.991,0,1,0,404,344Zm0-296a44,44,0,1,1-44,44A44.049,44.049,0,0,1,404,48ZM108,300a44,44,0,1,1,44-44A44.049,44.049,0,0,1,108,300ZM404,464a44,44,0,1,1,44-44A44.049,44.049,0,0,1,404,464Z"></path>
              </svg>
            </button>
            <button
              aria-label="Bookmark this book"
              type="button"
              className="p-2 rounded hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-4 h-4 fill-current"
              >
                <path d="M424,496H388.75L256.008,381.19,123.467,496H88V16H424ZM120,48V456.667l135.992-117.8L392,456.5V48Z"></path>
              </svg>
            </button>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              aria-label="Bookmark count"
              className="w-4 h-4 mr-1 fill-current"
            >
              <path d="M424,496H388.75L256.008,381.19,123.467,496H88V16H424ZM120,48V456.667l135.992-117.8L392,456.5V48Z"></path>
            </svg>
            <span>{book.bookmarks}</span>
          </div>
        </div>

        <button className="w-full px-4 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded hover:bg-blue-700">
          View Details
        </button>
      </div>
    </div>
  );
}
