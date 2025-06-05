import ChapterList from "./components/ChapterList";
import FilterControls from "./components/FilterControls";
import SubjectTabs from "./components/SubjectTabs";
import Header from "./components/Header";
import { MobileFilters } from "./components/MobileFilters";
import { ThemeToggle } from "./components/ThemeToggle";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-6 sm:py-8">
      <div className="flex justify-between items-start mb-6">
        <Header />
        <ThemeToggle />
      </div>
      
      <div className="flex flex-col gap-6">
        {/* Subject Tabs */}
        <SubjectTabs />
        
        {/* Filter Controls - Mobile */}
        <div className="block sm:hidden">
          <MobileFilters />
        </div>
        
        {/* Filter Controls - Desktop */}
        <div className="hidden sm:block">
          <FilterControls />
        </div>
        
        {/* Chapter List */}
        <ChapterList />
      </div>
    </main>
  );
}