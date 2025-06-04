import ChapterList from "./components/ChapterList";
import FilterControls from "./components/FilterControls";
import SubjectTabs from "./components/SubjectTabs";
import Header from "./components/Header";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <Header />
      
      <div className="flex flex-col gap-6">
    
        <SubjectTabs />
        
       
        <FilterControls />
        
      
        <ChapterList />
      </div>
    </main>
  );
}