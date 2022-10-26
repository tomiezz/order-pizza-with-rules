function isMeaningfullArray<T>(data?: T[]): boolean {
  return data && data.length > 0 ? true : false;
}

export { isMeaningfullArray };
