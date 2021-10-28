import ToggleTheme from "./ToggleTheme";
import { useRouter } from "next/router";
const Navigation = () => {
  const router = useRouter();
  return (
    <div className="sticky top-0 z-50 flex items-center justify-between w-full max-w-4xl p-8 mx-auto my-0 text-gray-900 bg-white dark:bg-black md:my-8 dark:text-gray-100">
      <ToggleTheme />
      <div>
        <a
          onClick={() => router.push("/")}
          className="p-1 font-normal  text-gray-900 transition cursor-pointer sm:p-4 sm:pb-1.5 sm:pt-1.5 rounded-full dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:bg-opacity-25"
        >
          Home
        </a>
      </div>
    </div>
  );
};

export default Navigation;
