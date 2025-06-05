"use client";
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveSubject } from '../store/features/chaptersSlice';
import { RootState } from '../store/store';

const SubjectTabs = () => {
  const dispatch = useDispatch();
  const activeSubject = useSelector((state: RootState) => state.chapters.activeSubject);

  const subjects = ["Physics", "Chemistry", "Mathematics"] as const;

  return (
    <div className="flex border-b border-gray-200 dark:border-gray-700">
      {subjects.map((subject) => (
        <button
          key={subject}
          className={`px-4 py-2 font-medium text-sm ${activeSubject === subject
            ? "border-b-2 border-blue-500 text-blue-600 dark:text-blue-400"
            : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300"
            }`}
          onClick={() => dispatch(setActiveSubject(subject))}
        >
          {subject === "Physics" ? "Phy" : subject === "Chemistry" ? "Chem" : "Math"}
        </button>
      ))}
    </div>
  );
};

export default SubjectTabs;