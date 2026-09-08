import "@testing-library/jest-dom";

// jsdom has no IntersectionObserver — used by useScrollReveal for scroll animations.
class MockIntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}
window.IntersectionObserver = MockIntersectionObserver;

