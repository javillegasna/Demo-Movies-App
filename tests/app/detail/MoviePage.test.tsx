import { mockCollectionDetails } from "@/tests/mocks/collections";
import { mockMovieDetails } from "@/tests/mocks/movie";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from "vitest";
import { DetailedCollection, MovieDetails } from "@/lib/tmdb/models";
import Details from "@/app/(detail)/movie/[id]/page";

vi.mock("@/lib/tmdb/api/movie", async (importOriginal) => {
  const actual = await importOriginal();
  if (typeof actual !== "object" || actual === null) {
    throw new Error("Expected actual to be an object");
  }
  return {
    ...actual,
    movie: {
      ...actual.movie,
      detail: vi.fn(() => Promise.resolve<MovieDetails>(mockMovieDetails)),
    },
  };
});

vi.mock("@/lib/tmdb/api/collection", async (importOriginal) => {
  const actual = await importOriginal();
  if (typeof actual !== "object" || actual === null) {
    throw new Error("Expected actual to be an object");
  }
  return {
    ...actual,
    movie: {
      ...actual.collection,
      detail: vi.fn(() => Promise.resolve<DetailedCollection>(mockCollectionDetails)),
    },
  };
});

describe("Detail movie page", () => {
  it("renders component successfully", async () => {
    const component = await Details({
      params: {
        id: "1",
      },
    });
    render(component);

    expect(screen.getByText("Mock Original Title")).toBeInTheDocument();
    expect(screen.getByText("View The Collection")).toBeInTheDocument();
  });

  it("render collection view modal", async () => {
    const component = await Details({
      params: {
        id: "1",
      },
    });
    const user = userEvent.setup()
    render(component);
    await user.click(screen.getByRole('button'))
    expect(screen.getByText("Close")).toBeInTheDocument();
  });
});
