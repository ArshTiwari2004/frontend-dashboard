"use client"
import { useDispatch, useSelector } from "react-redux"
import { setActiveSubject } from "../store/features/chaptersSlice"
import type { RootState } from "../store/store"

const SubjectTabs = () => {
  const dispatch = useDispatch()
  const activeSubject = useSelector((state: RootState) => state.chapters.activeSubject)

  const subjects = [
    {
      name: "Physics",
      label: "Phy",
      bgColor: "bg-orange-500",
    },
    {
      name: "Chemistry",
      label: "Chem",
      bgColor: "bg-green-500",
    },
    {
      name: "Mathematics",
      label: "Math",
      bgColor: "bg-blue-500",
    },
  ]

  return (
    <div className="flex border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-[#222E3F]">
      {subjects.map((subject) => (
        <button
          key={subject.name}
          className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 font-medium text-sm transition-colors ${
            activeSubject === subject.name
              ? "border-b-2 border-blue-500 text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
              : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300"
          }`}
           // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onClick={() => dispatch(setActiveSubject(subject.name as any))}
        >
          <div className={`w-6 h-6 rounded ${subject.bgColor} flex items-center justify-center`}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
              <circle cx="12" cy="12" r="2" />
            </svg>
          </div>
          {subject.label}
        </button>
      ))}
    </div>
  )
}

export default SubjectTabs