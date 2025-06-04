import React from 'react';
import { Chapter } from '@/lib/types';
import { ArrowUp, ArrowDown, Minus } from 'lucide-react';

const ChapterCard = ({ chapter }: { chapter: Chapter }) => {
  // Calculate trend for 2025 vs 2024
  const trend2025 = chapter.yearWiseQuestionCount["2025"];
  const trend2024 = chapter.yearWiseQuestionCount["2024"];
  const trendDiff = trend2025 - trend2024;
  
  // Get random icon - in real app we'd use phosphor icons
  const randomIcon = () => {
    const icons = ["📚", "🧪", "🔭", "🧮", "⚛️", "🔢"];
    return icons[Math.floor(Math.random() * icons.length)];
  };

  return (
    <div className="chapter-card">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-xl">{randomIcon()}</span>
          <div>
            <h3 className="font-medium line-clamp-1">
              {chapter.chapter.length > 25 
                ? `${chapter.chapter.substring(0, 25)}...` 
                : chapter.chapter}
            </h3>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <span>{chapter.questionSolved}/{chapter.yearWiseQuestionCount["2025"] + 190} Qs</span>
              <span className="flex items-center">
                {trendDiff > 0 ? (
                  <>
                    <ArrowUp className="w-3 h-3 text-green-500" />
                    <span className="text-green-500">↑</span>
                  </>
                ) : trendDiff < 0 ? (
                  <>
                    <ArrowDown className="w-3 h-3 text-red-500" />
                    <span className="text-red-500">↓</span>
                  </>
                ) : (
                  <Minus className="w-3 h-3 text-gray-500" />
                )}
                <span>2025: {trend2025}s</span>
                <span> | 2024: {trend2024}s</span>
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          {chapter.status === "Completed" && (
            <span className="px-2 py-1 text-xs rounded-full bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
              ✔
            </span>
          )}
          {chapter.isWeakChapter && (
            <span className="px-2 py-1 text-xs rounded-full bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200">
              Weak
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChapterCard;