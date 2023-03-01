import { Category } from "./category";

describe("Category", () => {
  it("should create a category", () => {
    const category = new Category("Movies");

    expect(category.name).toBe("Movies");
  });
});
