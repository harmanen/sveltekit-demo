import type { PageLoad } from './$types';
import { mockData } from '$mockData';

export const load: PageLoad = ({ params }) => {
  // Considered using the real API to fetch the up-to-date data.
  // Using mocked data to ensure that this demo works regardless of
  // possible changes in Wikipedia (of course, images are fetched on-the-fly).

  // Slice the data based on page id number (1, 2, 3, ...)
  // Display 5 objects per page
  const objectsPerPage = 5;
  const id = Number(params.id);

  return {
    mockData: mockData.slice((id - 1) * objectsPerPage, id * objectsPerPage),
  };
};
