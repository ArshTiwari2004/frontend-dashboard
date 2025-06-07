import ChapterList from "./components/ChapterList"
import FilterControls from "./components/FilterControls"
import SubjectTabs from "./components/SubjectTabs"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import { MobileFilters } from "./components/MobileFilters"
import { ThemeToggle } from "./components/ThemeToggle"
// import { ArrowLeft } from "@phosphor-icons/react";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-white dark:bg-[#222E3F]">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 lg:ml-0">
        {/* Mobile Header */}
        <div className="lg:hidden">
          <div className="relative flex items-center justify-between p-4  dark:border-gray-700">
            {/* Back Button */}
      {/* <button className="p-1 z-10" title="Back" aria-label="Back">
  <img
    src="/arrowleft.svg"
    alt="Back"
    className="w-6 h-6 text-gray-600 dark:text-gray-400 "
  />
</button> */}
{/* the above one is not changing to white when dark mode is enabled */}

<button className="p-1 z-10 text-gray-600 dark:text-white" title="Back" aria-label="Back">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
</button>



            {/* Centered Title */}
            <h1 className="absolute left-1/2 transform -translate-x-1/2 text-lg font-semibold text-[#101319] dark:text-white">
              JEE Main
            </h1>

            {/* Theme Toggle */}
            <ThemeToggle />
          </div>

          <SubjectTabs />
        </div>

        {/* Desktop Header */}
        <div className="hidden lg:block">
          <Header />
        </div>

        <div className="p-4 lg:p-6">
          {/* Filter Controls - Mobile */}
          <div className="block lg:hidden mb-4">
            <MobileFilters />
          </div>

          {/* Filter Controls - Desktop */}
          <div className="hidden lg:block mb-6">
            <FilterControls />
          </div>

          {/* Chapter List */}
          <ChapterList />
        </div>
      </div>
    </div>
  )
}
