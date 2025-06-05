import type React from "react"
import type { ProcessedChapter } from "../lib/types"

interface ChapterCardProps {
  chapter: ProcessedChapter
}

const ChapterCard: React.FC<ChapterCardProps> = ({ chapter }) => {
  const trend2025 = chapter.yearWiseQuestionCount["2025"] || 0
  const trend2024 = chapter.yearWiseQuestionCount["2024"] || 0
  const trendDiff = trend2025 - trend2024

  // Returns a random icon from icon1.svg to icon6.svg
  const getRandomIcon = () => {
    const randomIndex = Math.floor(Math.random() * 6) + 1
    return `/icon${randomIndex}.svg`
  }

  const chapterIcon = getRandomIcon()

  return (
    <div className="flex items-center justify-between p-4  dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors sm:border-0 sm:border-b sm:border-gray-100 sm:dark:border-gray-700 sm:rounded-none sm:bg-transparent sm:dark:bg-transparent sm:hover:bg-gray-50 sm:dark:hover:bg-gray-800/50">
      <div className="flex items-center gap-4 flex-1">
        {/* Chapter Icon */}
        <div className="w-6 h-6 flex-shrink-0">
          <img
            src={chapterIcon || "/placeholder.svg"}
            alt={`${chapter.chapter} Icon`}
            className="w-6 h-6 object-contain"
          />
        </div>

        {/* Chapter Info */}
        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-gray-900 dark:text-white text-base mb-1">{chapter.chapter}</h3>
          <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
            <span>2025: {trend2025}Qs</span>
            {trendDiff > 0 && <span className="text-green-500">↑</span>}
            {trendDiff < 0 && <span className="text-red-500">↓</span>}
            <span className="text-gray-400">|</span>
            <span>2024: {trend2024}Qs</span>
          </div>
        </div>
      </div>

      {/* Right Side Info */}
      <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
        <span>
          {chapter.questionSolved}/{chapter.totalQuestions} Qs
        </span>
      </div>
    </div>
  )
}

export default ChapterCard
