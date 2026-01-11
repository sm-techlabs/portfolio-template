import type { LucideIcon } from 'lucide-react';

/**
 * A single action shown on the Home page hero section.
 */
export interface HomeAction {
  /** Button label shown to the user */
  label: string;

  /** Internal route (react-router) */
  route: string;

  /** Icon displayed in the action button */
  icon: LucideIcon;
}

/**
 * Data contract for the Home page.
 * This file defines the shape — user data must conform to it.
 */
export interface HomeData {
  /** Main heading (hero title) */
  heading: string;

  /** Supporting text shown below the heading */
  subheading: string;

  /** Call-to-action buttons */
  actions: HomeAction[];
}
