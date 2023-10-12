import { mockData } from '../data';
import type { PageLoad } from './$types';

// Mock fetching of data
export const load: PageLoad = () => {
  return { mockData };
};
