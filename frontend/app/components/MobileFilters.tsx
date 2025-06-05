"use client";
import React, { useState } from 'react';
import FilterControls from './FilterControls';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const MobileFilters = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="sm:hidden">
      <Button variant="outline" size="sm" onClick={() => setOpen(true)}>
        <Menu className="h-4 w-4" />
        <span className="sr-only">Filters</span>
      </Button>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
          <div className="fixed inset-0 right-0 w-3/4 bg-white dark:bg-gray-900 p-4">
            <div className="flex justify-end mb-4">
              <Button variant="ghost" size="sm" onClick={() => setOpen(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
            <FilterControls />
          </div>
        </div>
      )}
    </div>
  );
};