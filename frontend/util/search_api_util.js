export const performSearch = query => {
  return $.ajax({
    method: "POST",
    url: "api/search",
    data: { query }
  });
};
