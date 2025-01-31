import { mockPersonWitMediaTypes } from "@/tests/mocks/person";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import {  PersonDetails, } from "@/lib/tmdb/models/person";
import Details from "@/app/(detail)/person/[id]/page";
import userEvent from "@testing-library/user-event";

vi.mock("@/lib/tmdb/api/person", async (importOriginal) => {
  const actual = await importOriginal();
  if (typeof actual !== "object" || actual === null) {
    throw new Error("Expected actual to be an object");
  }
  return {
    ...actual,
    person: {
      ...actual.person,
      detail: vi.fn(() => Promise.resolve(mockPersonWitMediaTypes)),
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

    expect(screen.getByText("Mock Person")).toBeInTheDocument();
    expect(screen.getByText("Images")).toBeInTheDocument();
  });

  it("renders component successfully with credits", async () => {
    const component = await Details({
      params: {
        id: "1",
      },
    });
    const user = userEvent.setup()
    render(component);

    expect(screen.getByText("Mock Person")).toBeInTheDocument();
    user.click(screen.getByText("Credits"))
    expect(screen.getByText("No credits")).toBeInTheDocument();
  });
});
