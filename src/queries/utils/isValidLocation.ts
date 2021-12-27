export const isValidLocation = (location: string = '') => {
  const regex = RegExp(/^[a-zA-Z0-9 ]+$/);
  return regex.test(location);
};
