const ransom = () => {
  const magazine =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";
  const text1 = "Lorem, dolore, magna";
  const text2 = "GIVE US 1 MILLION DOLLARS";
  const magArray = magazine.split(/[ ,]+/);
  const text1Array = text1.split(/[ ,]+/);
  console.log(magArray);
  for (const word in text1Array) {
    if (magArray.includes(word)) {
      continue;
    } else {
      return false;
    }
  }
  return true;
};
ransom();
