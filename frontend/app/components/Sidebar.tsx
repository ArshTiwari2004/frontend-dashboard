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
      isActive: activeSubject === "Physics",
    },
    {
      name: "Chemistry",
      label: "Chemistry PYQs",
      icon: "/chemistry.svg", 
      isActive: activeSubject === "Chemistry",
    },
    {
      name: "Mathematics",
      label: "Mathematics PYQs",
      icon: "/mathematics.svg", 
      isActive: activeSubject === "Mathematics",
    },
  ]

  return (
    <div className="w-80 h-screen bg-white dark:bg-[#222E3F] border-r border-gray-200 dark:border-gray-700 flex flex-col">
      {/* Header */}
      <div className="p-6  border-gray-200 dark:border-gray-700 items-center justify-between flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center  gap-3 ">
  <img
    src="/jeemain.svg"
    alt="JEE Main Logo"
    className="w-6 h-6 object-contain"
  />
  <h1 className="text-xl font-bold text-gray-900 dark:text-white ">JEE Main</h1>
</div>

          <ThemeToggle />
        </div>
        <p className="text-sm text-[#505D79] dark:text-[#B9BFD0]">2025 - 2009 | 173 Papers | 15825 Qs</p>
      </div>

      {/* Subject Navigation */}
      <div className="flex-1 p-4">
        <div className="space-y-2">
          {subjects.map((subject) => (
            <button
              key={subject.name}
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
onClick={() => dispatch(setActiveSubject(subject.name as any))}

              className={`w-full flex items-center gap-3 p-4 rounded-xl transition-all duration-200 group ${
                subject.isActive
                  ? "bg-[color:var(--Q3-neutral-default,#1D2933)] dark:bg-[#1D2933] text-white shadow-lg"
                  : "hover:bg-gray-50 dark:hover:bg-gray-800/50 text-gray-700 dark:text-gray-300"
              }`}
            >
              <img
                src={subject.icon}
                alt={`${subject.name} Icon`}
                className="w-6 h-6 object-contain flex-shrink-0"
              />
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
