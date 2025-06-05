"use client"
import { useDispatch, useSelector } from "react-redux"
import { setActiveSubject } from "../store/features/chaptersSlice"
import type { RootState } from "../store/store"
import { ThemeToggle } from "./ThemeToggle"

const Sidebar = () => {
  const dispatch = useDispatch()
  const activeSubject = useSelector((state: RootState) => state.chapters.activeSubject)

  const subjects = [
    {
      name: "Physics",
      label: "Physics PYQs",
      icon: "/physics.svg", 
      bgColor: "bg-orange-500",
      isActive: activeSubject === "Physics",
    },
    {
      name: "Chemistry",
      label: "Chemistry PYQs",
      icon: "/chemistry.svg", 
      bgColor: "bg-green-500",
      isActive: activeSubject === "Chemistry",
    },
    {
      name: "Mathematics",
      label: "Mathematics PYQs",
      icon: "/mathematics.svg", 
      bgColor: "bg-blue-500",
      isActive: activeSubject === "Mathematics",
    },
  ]

  return (
    <div className="w-80 h-screen bg-white dark:bg-[#222E3F] border-r border-gray-200 dark:border-gray-700 flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                <path d="M2 17L12 22L22 17" />
                <path d="M2 12L12 17L22 12" />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">JEE Main</h1>
            </div>
          </div>
          <ThemeToggle />
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400">2025 - 2009 | 173 Papers | 15825 Qs</p>
      </div>

      {/* Subject Navigation */}
      <div className="flex-1 p-4">
        <div className="space-y-2">
          {subjects.map((subject) => (
            <button
              key={subject.name}
              onClick={() => dispatch(setActiveSubject(subject.name as any))}
              className={`w-full flex items-center gap-3 p-4 rounded-xl transition-all duration-200 group ${
                subject.isActive
                  ? "bg-gray-900 dark:bg-gray-800 text-white shadow-lg"
                  : "hover:bg-gray-50 dark:hover:bg-gray-800/50 text-gray-700 dark:text-gray-300"
              }`}
            >
              <div className={`w-8 h-8 rounded-lg ${subject.bgColor} flex items-center justify-center flex-shrink-0`}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 1V3" />
                  <path d="M12 21V23" />
                  <path d="M4.22 4.22L5.64 5.64" />
                  <path d="M18.36 18.36L19.78 19.78" />
                  <path d="M1 12H3" />
                  <path d="M21 12H23" />
                  <path d="M4.22 19.78L5.64 18.36" />
                  <path d="M18.36 5.64L19.78 4.22" />
                </svg>
              </div>
              <div className="flex-1 text-left">
                <div className="font-medium">{subject.label}</div>
              </div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                className={`transition-transform ${subject.isActive ? "text-white" : "text-gray-400"}`}
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sidebar