export  const truncateString = (string, limit) =>
    string.length > limit ?
      string.substring(0, limit) + '...' :
      string