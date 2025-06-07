"use client"
import { useDispatch, useSelector } from "react-redux"
import {
  toggleClassFilter,
  toggleUnitFilter,
  toggleStatusFilter,
  toggleWeakChapters,
  toggleSortOrder,
} from "../store/features/chaptersSlice"
import type { RootState } from "../store/store"
import { ChevronDown, ArrowUpDown } from "lucide-react"
import { getChapterCount, getUniqueClasses, getUniqueUnits } from "../lib/utils"

const FilterControls = () => {
  const dispatch = useDispatch()
  const chaptersState = useSelector((state: RootState) => state.chapters)
  const filters = chaptersState.filters

  const classes = getUniqueClasses(chaptersState.activeSubject)
  const units = getUniqueUnits(chaptersState.activeSubject)
  const chapterCount = getChapterCount(chaptersState.activeSubject, chaptersState.filters)

  return (
    <div className="flex flex-col gap-4">
      {/* Mobile Filter Layout */}
      <div className="sm:hidden">
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {/* Class Filter */}
          <div className="relative group flex-shrink-0">
            <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors whitespace-nowrap">
              Class
              <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute z-10 hidden group-hover:block bg-white dark:bg-gray-800 shadow-lg rounded-lg p-2 mt-1 min-w-[140px] border border-gray-200 dark:border-gray-700">
              {classes.map((cls) => (
                <label
                  key={cls}
                  className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={filters.class.includes(cls)}
                    onChange={() => dispatch(toggleClassFilter(cls))}
                    className="rounded text-blue-500"
                  />
                  <span className="text-sm">{cls}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Units Filter */}
          <div className="relative group flex-shrink-0">
            <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors whitespace-nowrap">
              Units
              <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute z-10 hidden group-hover:block bg-white dark:bg-gray-800 shadow-lg rounded-lg p-2 mt-1 min-w-[140px] border border-gray-200 dark:border-gray-700">
              {units.map((unit) => (
                <label
                  key={unit}
                  className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={filters.unit.includes(unit)}
                    onChange={() => dispatch(toggleUnitFilter(unit))}
                    className="rounded text-blue-500"
                  />
                  <span className="text-sm">{unit}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Not Started Filter */}
          <button
            className={`px-4 py-2 text-sm font-medium rounded-full border transition-colors whitespace-nowrap flex-shrink-0 ${
              filters.status.includes("Not Started")
                ? "bg-blue-50 dark:bg-blue-900/20 border-blue-300 dark:border-blue-700 text-blue-700 dark:text-blue-300"
                : "border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
            }`}
            onClick={() => dispatch(toggleStatusFilter("Not Started"))}
          >
            Not Started
          </button>

          {/* Weak Chapters Filter */}
          <button
            className={`px-4 py-2 text-sm font-medium rounded-full transition-colors whitespace-nowrap flex-shrink-0 ${
              filters.weakChapters
                ? "bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 text-orange-700 dark:text-orange-300"
                : "border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border"
            }`}
            style={
              filters.weakChapters
                ? {
                    border: "1px solid",
                    borderImage: "linear-gradient(90deg, #D1D8E0 0%, #D1D8E0 50%, #FF881F 100%) 1",
                  }
                : {}
            }
            onClick={() => dispatch(toggleWeakChapters())}
          >
            Weak 
          </button>
        </div>

        {/* Chapter Count and Sort for Mobile */}
        <div className="flex items-center justify-between mt-4">
          <div className="text-sm text-gray-600 dark:text-gray-400">Showing all chapters ({chapterCount})</div>
          <button
            className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
            onClick={() => dispatch(toggleSortOrder())}
          >
            <ArrowUpDown className="w-4 h-4" />
            Sort
          </button>
        </div>
      </div>

      {/* Desktop Filter Layout */}
      <div className="hidden sm:block">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-wrap gap-3">
            {/* Class Filter */}
            <div className="relative group">
              <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                Class
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute z-10 hidden group-hover:block bg-white dark:bg-gray-800 shadow-lg rounded-lg p-2 mt-1 min-w-[140px] border border-gray-200 dark:border-gray-700">
                {classes.map((cls) => (
                  <label
                    key={cls}
                    className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={filters.class.includes(cls)}
                      onChange={() => dispatch(toggleClassFilter(cls))}
                      className="rounded text-blue-500"
                    />
                    <span className="text-sm">{cls}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Units Filter */}
            <div className="relative group">
              <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                Units
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute z-10 hidden group-hover:block bg-white dark:bg-gray-800 shadow-lg rounded-lg p-2 mt-1 min-w-[140px] border border-gray-200 dark:border-gray-700">
                {units.map((unit) => (
                  <label
                    key={unit}
                    className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={filters.unit.includes(unit)}
                      onChange={() => dispatch(toggleUnitFilter(unit))}
                      className="rounded text-blue-500"
                    />
                    <span className="text-sm">{unit}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Not Started Filter */}
            <button
              className={`px-4 py-2 text-sm font-medium rounded-lg border transition-colors ${
                filters.status.includes("Not Started")
                  ? "bg-blue-50 dark:bg-blue-900/20 border-blue-300 dark:border-blue-700 text-blue-700 dark:text-blue-300 "
                  : "border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 "
              }`}
              onClick={() => dispatch(toggleStatusFilter("Not Started"))}
            >
              Not Started
            </button>

<div
  className="relative rounded-lg p-[1px] bg-transparent"
  style={{
    background: "linear-gradient(90deg, #D1D8E0 0%, #D1D8E0 50%, #FF881F 100%)",
  }}
>
  <button
    className={`w-full px-4 py-2 text-sm font-medium rounded-lg transition-colors bg-white dark:bg-gray-800
      ${filters.weakChapters
        ? "bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 text-orange-700 dark:text-orange-300"
        : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
      }
    `}
    onClick={() => dispatch(toggleWeakChapters())}
  >
    Weak Chapters
  </button>
</div>




          </div>

          {/* Sort Toggle */}
      <button
  className="mt-4 flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
  onClick={() => dispatch(toggleSortOrder())}
>
  <ArrowUpDown className="w-4 h-4" />
  Sort
</button>

        </div>

        {/* Chapter Count */}
        <div className="text-sm text-[#101319] dark:text-gray-400 mt-8 mb-3 fontweight-400 font-normal  ">Showing all chapters ({chapterCount})</div>
      </div>
    </div>
  )
}

export default FilterControls
