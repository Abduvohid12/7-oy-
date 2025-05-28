function myStartsWith(str, search) {
  if (search.length > str.length) return false;
  for (let i = 0; i < search.length; i++) {
    if (str[i] !== search[i]) return false;
  }
  return true;
}

function myEndsWith(str, search) {
  if (search.length > str.length) return false;
  let start = str.length - search.length;
  for (let i = 0; i < search.length; i++) {
    if (str[start + i] !== search[i]) return false;
  }
  return true;
}

function myIncludes(str, search) {
  if (search.length > str.length) return false;
  for (let i = 0; i <= str.length - search.length; i++) {
    let found = true;
    for (let j = 0; j < search.length; j++) {
      if (str[i + j] !== search[j]) {
        found = false;
        break;
      }
    }
    if (found) return true;
  }
  return false;
}

function myIndexOf(str, search) {
  if (search.length > str.length) return -1;
  for (let i = 0; i <= str.length - search.length; i++) {
    let match = true;
    for (let j = 0; j < search.length; j++) {
      if (str[i + j] !== search[j]) {
        match = false;
        break;
      }
    }
    if (match) return i;
  }
  return -1;
}

function mySlice(str, start, end) {
  let result = "";
  let len = str.length;

  if (start < 0) start = len + start;
  if (end === undefined) end = len;
  if (end < 0) end = len + end;

  for (let i = start; i < end && i < len; i++) {
    result += str[i];
  }

  return result;
}

function myRepeat(str, count) {
  let result = "";
  for (let i = 0; i < count; i++) {
    result += str;
  }
  return result;
}

function myToLowerCase(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);
    if (code >= 65 && code <= 90) {
      result += String.fromCharCode(code + 32);
    } else {
      result += str[i];
    }
  }
  return result;
}

function myToUpperCase(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);
    if (code >= 97 && code <= 122) {
      result += String.fromCharCode(code - 32);
    } else {
      result += str[i];
    }
  }
  return result;
}

function myTrim(str) {
  let start = 0;
  let end = str.length - 1;
  while (str[start] === " " && start < str.length) start++;
  while (str[end] === " " && end > start) end--;
  let result = "";
  for (let i = start; i <= end; i++) {
    result += str[i];
  }
  return result;
}

const str = "  Hello World!  ";

console.log(myStartsWith(str, "  He"));
console.log(myEndsWith(str, "!  "));
console.log(myIncludes(str, "lo Wo"));
console.log(myIndexOf(str, "World"));
console.log(mySlice(str, 2, 7));
console.log(myRepeat("Yo", 3));
console.log(myToLowerCase("JS"));
console.log(myToUpperCase("js"));
console.log(myTrim(str));
