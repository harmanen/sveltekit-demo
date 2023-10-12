import type { PageLoad } from './$types';
import { mockData } from '$mockData';

export const load: PageLoad = ({ params }) => {
  // Considered using the real API to fetch the up-to-date data.
  // Using mocked data to ensure that this demo works regardless of
  // possible changes in Wikipedia (of course, images are fetched on-the-fly).
  return mockData.find((object) => object.titles.canonical === params.id);
};
