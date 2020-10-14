export const strToBool = (value: string | null) => {
  if (value && value.toLowerCase() === ("true" || "1")) {
    return true;
  }
  return false;
};
