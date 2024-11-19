export const getPageNumbers = (
  currentPage: number,
  totalPages: number,
  maxVisiblePages = 5,
) => {
  const pages: (number | string)[] = [];

  if (totalPages <= maxVisiblePages) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // Always show first page
  pages.push(1);

  // Calculate start and end of visible page numbers
  let start = Math.max(2, currentPage - Math.floor(maxVisiblePages / 2));
  const end = Math.min(totalPages - 1, start + maxVisiblePages - 3);

  // Adjust start if end is too close to totalPages
  start = Math.max(2, Math.min(start, totalPages - maxVisiblePages + 2));

  // Add ellipsis after first page if needed
  if (start > 2) {
    pages.push("...");
  }

  // Add visible page numbers
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  // Add ellipsis before last page if needed
  if (end < totalPages - 1) {
    pages.push("...");
  }

  // Always show last page
  if (totalPages > 1) {
    pages.push(totalPages);
  }

  return pages;
};
