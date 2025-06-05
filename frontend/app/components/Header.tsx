"use client"
import { useSelector } from "react-redux"
import type { RootState } from "../store/store"

const Header = () => {
  const activeSubject = useSelector((state: RootState) => state.chapters.activeSubject)

  const getSubjectInfo = () => {
    switch (activeSubject) {
      case "Physics":
        return {
          title: "Physics PYQs",
          icon: "/physics.svg",
          bgColor: "bg-orange-500",
        }
      case "Chemistry":
        return {
          title: "Chemistry PYQs",
          icon: "/chemistry.svg",
          bgColor: "bg-green-500",
        }
      case "Mathematics":
        return {
          title: "Mathematics PYQs",
          icon: "/mathematics.svg",
          bgColor: "bg-blue-500",
        }
      default:
        return {
          title: "Physics PYQs",
          icon: "/icon1.svg",
          bgColor: "bg-orange-500",
        }
    }
  }

  const subjectInfo = getSubjectInfo()

  return (
    <div className="p-6 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-[#222E3F]">
      <div className="flex items-center gap-3 mb-2">
        <div className={`w-8 h-8 rounded-lg ${subjectInfo.bgColor} flex items-center justify-center`}>
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
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{subjectInfo.title}</h1>
      </div>
      <p className="text-gray-600 dark:text-gray-400">Chapter-wise Collection of {activeSubject} PYQs</p>
    </div>
  )
}

export default Header