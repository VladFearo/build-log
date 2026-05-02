function parseQuery(query) {
  const output = {};
  query = query.trim();
  if (query.startsWith("?")) {
    query = query.slice(1);
  }
  if (query === "") {
    return output;
  }
  const qArray = query.split("&");
  for (const item of qArray) {
    const [key, value] = item.split("=");
    if (!key) {
      throw new Error("Missing Key");
    } else if (!value) {
      throw new Error("Missing Value");
    }

    output[decodeURIComponent(key)] = decodeURIComponent(value);
  }
  return output;
}
