/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="w-full max-w-[1000px] mx-auto px-6 mb-8 relative z-10 select-none"
    >
      <ol className="flex items-center flex-wrap gap-2 text-xs font-body text-brand-text-muted">
        <li className="flex items-center gap-1.5">
          <Link
            to="/"
            className="flex items-center gap-1 hover:text-brand-accent transition-colors text-brand-text-muted"
          >
            <Home className="w-3.5 h-3.5 text-brand-sage" />
            <span>Inicio</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-1.5">
              <ChevronRight className="w-3 h-3 text-brand-sage/60 shrink-0" />
              {isLast || !item.path ? (
                <span className="font-semibold text-brand-bg-dark" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.path}
                  className="hover:text-brand-accent transition-colors text-brand-text-muted"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
