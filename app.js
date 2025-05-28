function myStartsWith(str, search) {
  if (search.length > str.length) return false;
  for (let i = 0; i < search.length; i++) {
    if (str[i] !== search[i]) return false;
  }
  return true;
}
