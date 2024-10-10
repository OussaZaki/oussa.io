function ArrowIcon() {
  return (
    <svg
      width="8"
      height="8"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="text-xs mb-16">
      <p className="mt-8 text-neutral-600 dark:text-neutral-300">With love,</p>
      <p className="mt-2 text-neutral-600 dark:text-neutral-300">
        <strong>Oussama Zaki</strong>
      </p>
      <p className="text-neutral-600 dark:text-neutral-300">
        Stockholm, Sweden
      </p>
      <a title="Call me" href="tel:+46738429778">
        +46 73 842 97 78
      </a>
      <a title="Email me" href="mailto:me@oussa.dev">
        me@oussa.dev
      </a>
      <ul className="mt-4 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/OussaZaki"
          >
            <ArrowIcon />
            <p className="ml-2">github</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/zakioussama/"
          >
            <ArrowIcon />
            <p className="ml-2">linkedin</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://medium.com/@thezaki"
          >
            <ArrowIcon />
            <p className="ml-2">medium</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.instagram.com/thezaki"
          >
            <ArrowIcon />
            <p className="ml-2">instagram</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="/rss"
          >
            <ArrowIcon />
            <p className="ml-2">rss</p>
          </a>
        </li>
      </ul>
    </footer>
  );
}
