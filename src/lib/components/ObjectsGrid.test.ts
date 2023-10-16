/**
 * Tests for the ObjectsGrid component.
 */
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/svelte';
import { ObjectsGrid } from '$components';
import { mockData } from '$mockData';

const data = mockData.slice(0, 5);

describe('ObjectsGrid', () => {
  beforeEach(() => {
    render(ObjectsGrid, { props: { data } });
  });

  afterEach(() => {
    cleanup();
  });

  it('should render a grid', () => {
    expect(screen.getAllByTestId('grid-item').length).toEqual(5);
  });

  it('should render correct Cards', () => {
    // Check by title
    data.forEach((item) => {
      expect(screen.getByText(item.title));
    });
  });
});
