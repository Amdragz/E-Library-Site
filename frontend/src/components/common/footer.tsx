import { Link } from "react-router-dom";

interface FooterProps {
  isLoggedIn: boolean;
}

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Articles", href: "#articles" },
  { label: "News", href: "#news" },
];

const loggedInLinks = [
  { label: "Home", href: "/home" },
  { label: "Library", href: "/library" },
  { label: "History", href: "/history" },
];

const socialLinks = [
  {
    href: "#",
    svg: "M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z",
  },
  {
    href: "#",
    svg: "M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z",
  },
];

const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
  e.preventDefault();

  if (link.startsWith("#")) {
    const targetId = link.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  } else {
    window.location.href = link;
  }
};

export default function Footer({ isLoggedIn }: FooterProps) {
  return (
    <footer className="w-full py-4 md:py-10 px-4 sm:px-6 lg:px-8 mt-8 max-w-[82rem] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-5">
        <div>
          <img
            className="w-auto h-6 sm:h-7"
            src="https://merakiui.com/images/full-logo.svg"
            alt="Logo"
          />
        </div>

        {!isLoggedIn && (
          <ul className="md:text-center">
            {footerLinks.map((link, index) => (
              <li
                key={index}
                className="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300 dark:before:text-neutral-600"
              >
                <Link
                  className="inline-flex gap-x-2 text-sm text-gray-500 hover:text-gray-800 focus:outline-none focus:text-gray-800"
                  to={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        )}

        {isLoggedIn && (
          <ul className="md:text-center">
            {loggedInLinks.map((link, index) => (
              <li
                key={index}
                className="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300 dark:before:text-neutral-600"
              >
                <Link
                  className="inline-flex gap-x-2 text-sm text-gray-500 hover:text-gray-800 focus:outline-none focus:text-gray-800"
                  to={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        )}

        <div className="flex items-center md:justify-end gap-4 ">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              className="size-8 text-sm font-semibold rounded-full text-gray-500 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
              href={social.href}
            >
              <svg
                className="shrink-0 size-5"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d={social.svg} />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
