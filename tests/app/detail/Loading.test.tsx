/// <reference types="vitest" />
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react'
import Loading from '@/app/(detail)/loading';

describe('Loading details', () => {
  it('renders the detail Loading component', async () => {
    const { container } = render(<Loading />);
    expect(container.firstChild).toHaveClass("overflow-hidden");
    expect(container.firstChild?.firstChild).toHaveClass("container");
  })
})