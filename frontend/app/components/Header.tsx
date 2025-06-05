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
        }
      case "Chemistry":
        return {
          title: "Chemistry PYQs",
          icon: "/chemistry.svg",
        }
      case "Mathematics":
        return {
          title: "Mathematics PYQs",
          icon: "/mathematics.svg",
        }
      default:
        return {
          title: "Physics PYQs",
          icon: "/icon1.svg",
        }
    }
  }

  const subjectInfo = getSubjectInfo()

  return (
    <div className="p-6  dark:border-gray-700 bg-white dark:bg-[#222E3F] items-center justify-between flex flex-col ">
      <div className="flex items-center gap-3 mb-2">
        <img
          src={subjectInfo.icon}
          alt={`${subjectInfo.title} Icon`}
          className="w-6 h-6 object-contain flex-shrink-0"
        />
        <h1 className="text-2xl font-bold text-[#101319] dark:text-white">{subjectInfo.title}</h1>
      </div>
      <p className="text-[#505D79] dark:text-gray-400">Chapter-wise Collection of {activeSubject} PYQs</p>
    </div>
  )
}

export default Header
