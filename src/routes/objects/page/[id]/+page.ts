import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { mockData } from '$mockData';

export const load: PageLoad = ({ params }) => {
  // Considered using the real API to fetch the up-to-date data.
  // Using mocked data to ensure that this demo works regardless of
  // possible changes in Wikipedia (of course, images are fetched on-the-fly).

  // Display 5 objects per page
  const objectsPerPage = 5;

  // Maximum page number, used to hide "Forward" button
  const lastPage = Math.round(mockData.length / objectsPerPage);

  // Slice the data based on page id number (1, 2, 3, ...)
  const id = Number(params.id);

  if (id > lastPage) {
    throw error(404, 'Page not found');
  }

  return {
    mockData: mockData.slice((id - 1) * objectsPerPage, id * objectsPerPage),
    lastPage,
  };
};
