"use client";
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  toggleClassFilter,
  toggleUnitFilter,
  toggleStatusFilter,
  toggleWeakChapters,
  toggleSortOrder,
} from '../store/features/chaptersSlice';
import { RootState } from '../store/store';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FilterControls = () => {
  const dispatch = useDispatch();
  const { filters, sortOrder } = useSelector((state: RootState) => state.chapters);
  const chapterCount = getChapterCount(activeSubject, filters);
  
  // Mock data for classes and units - in real app these would come from filtered data
  const classes = ["Class 11", "Class 12"];
  const units = ["Mechanics 1", "Mechanics 2", "Thermodynamics"];
  const statuses = ["Not Started", "Completed"];

  return (
<div className="flex flex-col gap-4">
  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
    <div className="flex flex-wrap gap-2">
      {/* Update filter buttons to be smaller on mobile */}
      <div className="relative group">
        <button className="flex items-center gap-1 px-2 py-1 text-xs sm:text-sm rounded-md border border-gray-300 dark:border-gray-600">
          Class
          <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4" />
            </button>
            <div className="absolute z-10 hidden group-hover:block bg-white dark:bg-gray-800 shadow-lg rounded-md p-2 mt-1 min-w-[120px]">
              {classes.map((cls) => (
                <label key={cls} className="flex items-center gap-2 p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                  <input
                    type="checkbox"
                    checked={filters.class.includes(cls)}
                    onChange={() => dispatch(toggleClassFilter(cls))}
                    className="rounded text-blue-500"
                  />
                  {cls}
                </label>
              ))}
            </div>
          </div>

          {/* Unit Filter */}
          <div className="relative group">
            <button className="flex items-center gap-1 px-3 py-1 text-sm rounded-md border border-gray-300 dark:border-gray-600">
              Units
              <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute z-10 hidden group-hover:block bg-white dark:bg-gray-800 shadow-lg rounded-md p-2 mt-1 min-w-[120px]">
              {units.map((unit) => (
                <label key={unit} className="flex items-center gap-2 p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                  <input
                    type="checkbox"
                    checked={filters.unit.includes(unit)}
                    onChange={() => dispatch(toggleUnitFilter(unit))}
                    className="rounded text-blue-500"
                  />
                  {unit}
                </label>
              ))}
            </div>
          </div>

          {/* Not Started Filter */}
          <button
            className={`px-3 py-1 text-sm rounded-md border ${filters.status.includes("Not Started")
              ? "bg-blue-100 dark:bg-blue-900 border-blue-300 dark:border-blue-700"
              : "border-gray-300 dark:border-gray-600"
              }`}
            onClick={() => dispatch(toggleStatusFilter("Not Started"))}
          >
            Not Started
          </button>

          {/* Weak Chapters Filter */}
          <button
            className={`px-3 py-1 text-sm rounded-md border ${filters.weakChapters
              ? "bg-red-100 dark:bg-red-900 border-red-300 dark:border-red-700"
              : "border-gray-300 dark:border-gray-600"
              }`}
            onClick={() => dispatch(toggleWeakChapters())}
          >
            Weak Chapters
          </button>
        </div>

        {/* Sort Toggle */}
<button
  className="flex items-center gap-1 text-xs sm:text-sm text-gray-600 dark:text-gray-400"
  onClick={() => dispatch(toggleSortOrder())}
>
  Showing {chapterCount} chapters
  {sortOrder === 'asc' ? <ChevronUp className="w-3 h-3 sm:w-4 sm:h-4" /> : <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4" />}
</button>
      </div>
    </div>
  );
};

export default FilterControls;