const groupData = <T>({ data, size }: { data: Array<T>; size: number }): T[][] => {
  const result = [];

  for (let i = 0; i < data.length; i += size) {
    result.push(data.slice(i, i + size));
  }

  return result;
};

export default groupData;
