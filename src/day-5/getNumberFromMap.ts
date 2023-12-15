type GetNumberFromMap = (args: {
  number: number;
  map: Array<Array<number>>;
}) => number;

const getNumberFromMap: GetNumberFromMap = ({ number, map }) => {
  const soilRange = map.reduce((acc, row) => {
    if (number >= row[1] && number < row[1] + row[2]) {
      acc = number - row[1] + row[0];
    }
    return acc;
  }, -1);

  return soilRange > -1 ? soilRange : number;
};

export default getNumberFromMap;
