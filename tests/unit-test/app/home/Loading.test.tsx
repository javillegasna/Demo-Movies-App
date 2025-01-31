/// <reference types="vitest" />
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react'
import Loading from '@/app/(home)/loading';

describe('Loading home', () => {
  it('renders the Loading component', async () => {
    const { container } = render(<Loading />);
    expect(container.firstChild).toHaveClass("container");
    expect(container.firstChild).toHaveClass("space-y-8");
    expect(container.querySelectorAll(".h-hero")).toHaveLength(1);
  })
})