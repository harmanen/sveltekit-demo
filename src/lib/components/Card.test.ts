/**
 * Tests for the Card component.
 * This also tests the rendering of Button and LinkToWiki components.
 */
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/svelte';
import { Card } from '$components';
import { mockData } from '$mockData';

const item = mockData[0];

describe('Card', () => {
  beforeEach(() => {
    render(Card, { props: { item } });
  });

  afterEach(() => {
    cleanup();
  });

  it('should render a title', () => {
    expect(screen.getByText(item.title));
  });

  it('should render an image', () => {
    expect(
      screen.getByAltText(
        `An image of ${item.title} which is ${item.description}`,
      ),
    );
  });

  it('should render an extract', () => {
    expect(screen.getByText(item.extract));
  });

  it('should render buttons', () => {
    expect(screen.getByText('View more!'));
    // Both are rendered even though only one is visible at the time
    expect(screen.getAllByText('To Wikipedia').length).toEqual(2);
  });
});
