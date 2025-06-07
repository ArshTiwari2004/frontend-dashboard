"use client";
import React from 'react';
import FilterControls from './FilterControls';

export const MobileFilters = () => {
  return (
    <div className="sm:hidden">
      <FilterControls />
    </div>
  );
};