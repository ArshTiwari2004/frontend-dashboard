"use client"
import Image from "next/image"
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
      iconPath: "/physics.svg",
    },
    {
      name: "Chemistry",
      label: "Chem",
      iconPath: "/chemistry.svg",
    },
    {
      name: "Mathematics",
      label: "Math",
      iconPath: "/mathematics.svg",
    },
  ]

  return (
    <div className="flex border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-[#222E3F]">
      {subjects.map((subject) => (
        <button
          key={subject.name}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onClick={() => dispatch(setActiveSubject(subject.name as any))}
          className={`flex-1 flex flex-col items-center justify-center px-4 py-3 font-medium text-sm transition-colors ${
            activeSubject === subject.name
              ? "border-b-2 border-[#0065DE] text-blue-600 dark:text-blue-400  "
              : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300"
          }`}
        >
          <Image
            src={subject.iconPath}
            alt={subject.label}
            width={24}
            height={24}
            className="mb-1"
          />
          {subject.label}
        </button>
      ))}
    </div>
  )
}

export default SubjectTabs
