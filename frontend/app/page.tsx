import ChapterList from "./components/ChapterList"
import FilterControls from "./components/FilterControls"
import SubjectTabs from "./components/SubjectTabs"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import { MobileFilters } from "./components/MobileFilters"
import { ThemeToggle } from "./components/ThemeToggle"

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
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3">
              <button className="p-1">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-gray-600 dark:text-gray-400"
                >
                  <path
                    d="M15 18L9 12L15 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <h1 className="text-lg font-semibold text-gray-900 dark:text-white">JEE Main</h1>
            </div>
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