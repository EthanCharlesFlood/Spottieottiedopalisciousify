export const performSearch = query => {
  return $.ajax({
    method: "GET",
    url: "api/search",
    data: { query }
  });
};
