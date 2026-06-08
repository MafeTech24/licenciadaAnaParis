/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Specialty {
  id: string;
  title: string;
  description: string;
  iconName: 'heart' | 'baby' | 'sprout';
}

export interface GalleryItem {
  id: string;
  label: string;
  aspectClass: string;
  organicClass: string;
}
