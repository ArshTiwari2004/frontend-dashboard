import type React from "react"
import type { ProcessedChapter } from "../lib/types"

interface ChapterCardProps {
  chapter: ProcessedChapter
}

const ChapterCard: React.FC<ChapterCardProps> = ({ chapter }) => {
  const trend2025 = chapter.yearWiseQuestionCount["2025"] || 0
  const trend2024 = chapter.yearWiseQuestionCount["2024"] || 0
  const trendDiff = trend2025 - trend2024

  const getRandomIcon = () => {
    const randomIndex = Math.floor(Math.random() * 6) + 1
    return `/icon${randomIndex}.svg`
  }

  const chapterIcon = getRandomIcon()

  return (
    <div className="flex sm:items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-2xl sm:border sm:border-[#D1D8E0] dark:sm:border-[#3E5574] hover:bg-gray-50 dark:bg-gray-800/50 transition-colors sm:flex-row sm:p-6 sm:rounded-2xl">
      {/* Left Icon - stays on the left in both views */}
      <div className="flex-shrink-0 w-8 h-8 mr-3 sm:mr-4">
        <img
          src={chapterIcon}
          alt={`${chapter.chapter} Icon`}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Middle section (chapter name + trend) */}
      <div className="flex flex-col flex-grow sm:flex-row sm:items-center sm:gap-4">
        <div className="flex flex-col">
          {/* Chapter Name */}
          <h3 className="font-semibold text-gray-900 dark:text-white text-base sm:text-lg">
            {chapter.chapter}
          </h3>

          {/* Trend info only visible in mobile (hidden on sm+) */}
          <div className="flex sm:hidden gap-2 text-sm text-[#505D79] dark:text-gray-400 mt-1">
            <span>
              2025: {trend2025}Qs{" "}
              {trendDiff > 0 && <span className="text-green-500">↑</span>}
              {trendDiff < 0 && <span className="text-red-500">↓</span>}
            </span>
            <span className="text-[#D1D8E0]">|</span>
            <span>2024: {trend2024}Qs</span>
          </div>
        </div>

        {/* Desktop trend info (visible only on sm+) */}
        <div className="hidden sm:flex items-center gap-2 text-sm text-[#505D79] dark:text-gray-400 sm:text-base sm:ml-auto">
          <span>
            2025: {trend2025}Qs{" "}
            {trendDiff > 0 && <span className="text-green-500">↑</span>}
            {trendDiff < 0 && <span className="text-red-500">↓</span>}
          </span>
          <span className="text-[#D1D8E0] dark:text-[#B9BFD0]">|  </span>
          <span>2024: {trend2024}Qs</span>
          <span className="text-[#D1D8E0] pr-6 pl-4 dark:text-[#3E5574]">|   </span>
        </div>
      </div>

      {/* Solved Qs section: always on far right */}
      <div className="text-sm text-[#505D79] dark:text-gray-400 sm:text-base ml-3 mt-2 sm:mt-0 sm:ml-0 whitespace-nowrap self-start sm:self-center">
        {chapter.questionSolved}/{chapter.totalQuestions} Qs
      </div>
    </div>
  )
}

export default ChapterCard