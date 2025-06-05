"use client"
import { useSelector } from "react-redux"
import type { RootState } from "../store/store"
import ChapterCard from "./ChapterCard"
import { getFilteredChapters } from "../lib/utils"

const ChapterList = () => {
  const chaptersState = useSelector((state: RootState) => state.chapters)
  const chapters = getFilteredChapters(chaptersState.activeSubject, chaptersState.filters, chaptersState.sortOrder)

  if (chapters.length === 0) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-8 text-center">
        <p className="text-gray-500 dark:text-gray-400">No chapters found matching your filters</p>
      </div>
    )
  }

  return (
    // want some gap between cards
    
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden gap-4  ">
      {chapters.map((chapter) => (
        <ChapterCard key={`${chapter.subject}-${chapter.chapter}`} chapter={chapter} />
      ))}
    </div>
  )
}

export default ChapterList
