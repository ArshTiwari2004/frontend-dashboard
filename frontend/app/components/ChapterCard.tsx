import type React from "react"
import type { ProcessedChapter } from "../lib/types"

interface ChapterCardProps {
  chapter: ProcessedChapter
}

const ChapterCard: React.FC<ChapterCardProps> = ({ chapter }) => {
  const trend2025 = chapter.yearWiseQuestionCount["2025"] || 0
  const trend2024 = chapter.yearWiseQuestionCount["2024"] || 0
  const trendDiff = trend2025 - trend2024

 
  const getChapterIcon = (chapterName: string) => {
    const iconMap: Record<string, string> = {
      Gravitation: "/icon1.svg",
      "Mathematics in Physics": "/icon2.svg",
      "Math in Physics": "/icon2.svg",
      "Units and Dimensions": "/icon3.svg",
      "Motion In One Dimension": "/icon4.svg",
      "Motion in One Dimension long name": "/icon4.svg",
      "Motion In Two Dimensions": "/icon5.svg",
      "Motion in Two Dimensions": "/icon5.svg",
      "Laws of Motion": "/icon6.svg",
      "Work Power Energy": "/icon7.svg",
      "Center of Mass Momentum and Collision": "/icon8.svg",
      "Centre of Mass Equilibrium and...": "/icon8.svg",
      "Rotational Motion": "/icon9.svg",
      "Mechanical Properties of Solids": "/icon10.svg",
      "Mechanical Properties of Fluids": "/icon11.svg",
      "Thermal Properties of Matter": "/icon12.svg",
      Thermodynamics: "/icon13.svg",
      "Kinetic Theory of Gases": "/icon14.svg",
      Oscillations: "/icon15.svg",
    }

    return iconMap[chapterName] || "/icon1.svg"
  }

  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
      <div className="flex items-center gap-4 flex-1">
        {/* Chapter Icon */}
        <div className="w-6 h-6 flex-shrink-0">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-orange-500">
            <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
            <path d="M12 1V3" stroke="currentColor" strokeWidth="2" />
            <path d="M12 21V23" stroke="currentColor" strokeWidth="2" />
            <path d="M4.22 4.22L5.64 5.64" stroke="currentColor" strokeWidth="2" />
            <path d="M18.36 18.36L19.78 19.78" stroke="currentColor" strokeWidth="2" />
            <path d="M1 12H3" stroke="currentColor" strokeWidth="2" />
            <path d="M21 12H23" stroke="currentColor" strokeWidth="2" />
            <path d="M4.22 19.78L5.64 18.36" stroke="currentColor" strokeWidth="2" />
            <path d="M18.36 5.64L19.78 4.22" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>

        {/* Chapter Info */}
        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-gray-900 dark:text-white text-base mb-1">{chapter.chapter}</h3>
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span>
              2025: {trend2025}Qs {trendDiff > 0 ? "↑" : trendDiff < 0 ? "↓" : ""} | 2024: {trend2024}Qs
            </span>
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