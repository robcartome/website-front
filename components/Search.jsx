export default function Search() {
  return (
    <div className="flex items-center w-full space-x-2 rounded-lg border border-gray-300 bg-gray-50 dark:bg-gray-900 px-2 py-1">
      <SearchIcon className="h-4 w-4" />
      <input className="w-full border-none bg-gray-50 focus:outline-none" placeholder="Buscar" ></input>
    </div>
  )
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}