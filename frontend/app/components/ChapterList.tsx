"use client";
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import ChapterCard from './ChapterCard';
import { getFilteredChapters } from '@/lib/utils';

const ChapterList = () => {
  const { activeSubject, filters, sortOrder } = useSelector((state: RootState) => state.chapters);
  const chapters = getFilteredChapters(activeSubject, filters, sortOrder);

  return (
    <div className="border rounded-lg overflow-hidden border-gray-200 dark:border-gray-700">
      {chapters.map((chapter) => (
        <ChapterCard key={chapter.chapter} chapter={chapter} />
      ))}
    </div>
  );
};

export default ChapterList;