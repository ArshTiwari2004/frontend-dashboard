import React from 'react';
import { Chapter } from '../lib/types';
import { ArrowUp, ArrowDown, Minus } from 'lucide-react';
import * as PhosphorIcons from 'phosphor-react';

// Type for Phosphor icons
type PhosphorIcon = keyof typeof PhosphorIcons;

const ChapterCard = ({ chapter }: { chapter: Chapter }) => {
  const trend2025 = chapter.yearWiseQuestionCount["2025"] || 0;
  const trend2024 = chapter.yearWiseQuestionCount["2024"] || 0;
  const trendDiff = trend2025 - trend2024;
  
  // Map chapter names to icons
  const getChapterIcon = (chapterName: string): PhosphorIcon => {
    const iconMap: Record<string, PhosphorIcon> = {
      "Gravitation": "Planet",
      "Mathematics in Physics": "MathOperations",
      "Units and Dimensions": "Ruler",
      "Motion In One Dimension": "ArrowLineRight",
      "Motion In Two Dimensions": "ArrowsOut",
      "Laws of Motion": "Balloon",
      "Work Power Energy": "BatteryHigh",
      "Center of Mass Momentum and Collision": "CircleDashed",
      "Rotational Motion": "CircleNotch",
      "Mechanical Properties of Solids": "Cube",
      "Mechanical Properties of Fluids": "Drop",
      "Thermal Properties of Matter": "Thermometer",
      "Thermodynamics": "Fire",
      "Kinetic Theory of Gases": "Wind",
      "Oscillations": "WaveSine",
    };

    const defaultIcon = "Book";
    return iconMap[chapterName] || defaultIcon;
  };

  const IconComponent = PhosphorIcons[getChapterIcon(chapter.chapter)] as React.ElementType;

  return (
<div className="chapter-card px-3 py-3 sm:px-4 sm:py-4">
  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0">
    <div className="flex items-center gap-2 sm:gap-3">
      <span className="text-lg sm:text-xl">
        <IconComponent size={20} className="sm:w-6 sm:h-6" weight="duotone" />
      </span>
          <div>
            <h3 className="font-medium line-clamp-1">
              {chapter.chapter.length > 25 
                ? `${chapter.chapter.substring(0, 25)}...` 
                : chapter.chapter}
            </h3>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <span>{chapter.questionSolved}/{chapter.totalQuestions} Qs</span>
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