type First = (input: string) => number;

const first: First = (input) => {
  // Copied this
  const data = input.split('\n').slice(0, -1);
  const coords = [];
  const x = [];
  const y = [];
  let X = 0;
  let Y = 0;
  
  data.forEach(instruction => {
      const [dir, steps] = instruction.split(' ');
      const numSteps = parseInt(steps, 10);
      
      for (let i = 0; i < numSteps; i++) {
          switch(dir) {
              case 'U':
                  Y--;
                  break;
                  
              case 'R':
                  X++;
                  break;
      
              case 'D':
                  Y++;
                  break;
                  
              case 'L':
                  X--;
                  break;
          }
          coords.push({x:X, y:Y});
      }
      x.push(X);
      y.push(Y);
  });
  const minX=Math.min(x)
  const minY=Math.min(y)
  const newY = y.map(val=>val+5)
  console.log("🚀 ~ file: first.ts:38 ~ data:", x)
  console.log("🚀 ~ file: first.ts:38 ~ data:", newY)
  function getArea(x, y) {
    let area = 0;
    let sum = 0;
    for (let i = 0; i < x.length-1; i++) {
      console.log("🚀 ~ file: first.ts:45 ~ getArea ~ x[i]:", x[i])
      console.log("🚀 ~ file: first.ts:45 ~ getArea ~ y[i+1]:", y[i+1])
      console.log("🚀 ~ file: first.ts:45 ~ getArea ~ y[i]:", y[i])
      console.log("🚀 ~ file: first.ts:45 ~ getArea ~ x[i+1]:", x[i+1])
        sum += x[i] * y[i+1] - x[i+1] * y[i]
        console.log("🚀 ~ file: first.ts:54 ~ getArea ~ sum:", sum)
    }
    area = sum / 2;
    return Math.abs(area);
}
const area = getArea(x,y);
  console.log("🚀 ~ file: first.ts:50 ~ area:", area)
  
return coords.length + (area + 1 - coords.length / 2));
  
  
  const paths: Array<{
    direction: string;
    stepsString: string;
    color: string;
  }> = input.split('\n').map((path) => {
    const matches = path.match(
      /(?<direction>[RLUD]) (?<stepsString>[0-9]{1,2}) \((?<color>.*)\)/
    );
    return matches?.groups;
  });
  // console.log('🚀 ~ file: first.ts:5 ~ directions:', paths);


  const position = { x: 0, y: 0 };
  const matrix = paths.reduce<Array<{ x: number; y: number }>>(
    (acc, path, index) => {
      // if (index < 5) {
      const { direction, stepsString, color } = path;
      const steps = Number(stepsString);
      // console.log('🚀 ~ file: first.ts:16 ~ matrix ~ steps:', steps);

      for (let step = 0; step < steps; step++) {
        acc.push({ x: position.x, y: position.y });
        if (direction === 'R') {
          position.x += 1;
        } else if (direction === 'D') {
          position.y += 1;
        } else if (direction === 'L') {
          position.x -= 1;
        } else if (direction === 'U') {
          position.y -= 1;
        }
      }

      // console.log('🚀 ~ file: first.ts:29 ~ matrix ~ position:', position);
      // }
      return acc;
    },
    []
  );
  // console.log('🚀 ~ file: first.ts:15 ~ matrix ~ matrix:', matrix);
  const matrixDimensions = matrix.reduce<{
    minX: number;
    minY: number;
    maxX: number;
    maxY: number;
  }>(
    (acc, position) => {
      return {
        minX: Math.min(position.x, acc.minX),
        minY: Math.min(position.y, acc.minY),
        maxX: Math.max(position.x, acc.maxX),
        maxY: Math.max(position.y, acc.maxY),
      };
    },
    {
      minX: 0,
      minY: 0,
      maxX: 0,
      maxY: 0,
    }
  );
  // console.log('🚀 ~ file: first.ts:45 ~ matrixDimensions:', matrixDimensions);

  const newMatrix = matrix.reduce<string[][]>((acc, position) => {
    if (acc[position.y + Math.abs(matrixDimensions.minY)] === undefined) {
      acc[position.y + Math.abs(matrixDimensions.minY)] = [];
    }
    acc[position.y + Math.abs(matrixDimensions.minY)][
      position.x + Math.abs(matrixDimensions.minX)
    ] = '#';
    return acc;
  }, []);
  // console.log('🚀 ~ file: first.ts:70 ~ newMatrix ~ newMatrix:', newMatrix);
  const matrixHeight = Math.abs(matrixDimensions.minY) + matrixDimensions.maxY;
  const matrixWidth = Math.abs(matrixDimensions.minX) + matrixDimensions.maxX;
  // console.log('🚀 ~ file: first.ts:78 ~ matrixHeight:', matrixHeight);
  // console.log('🚀 ~ file: first.ts:80 ~ matrixWidth:', matrixWidth);
  let digCount = 0;
  for (let columnIndex = 0; columnIndex < matrixHeight + 1; columnIndex++) {
    let fill = false;
    const digged = newMatrix[columnIndex].reduce<number[]>(function (
      indices,
      element,
      index
    ) {
      if (element === '#') {
        indices.push(index);
      }
      return indices;
    }, []);
    // console.log('🚀 ~ file: first.ts:95 ~ digged:', digged);
    const boundaries = [];
    // const boundaries = digged.filter((dig,diggedIndex)=>digged[diggedIndex - 1] !== undefined &&
    //   dig-digged[diggedIndex - 1]  > 1);
    for (let diggedIndex = 0; diggedIndex < digged.length; diggedIndex++) {
      // console.log("🚀 ~ file: first.ts:99 ~ diggedIndex:", diggedIndex)
      // console.log(
      //   '🚀 ~ file: first.ts:103 ~ digged[diggedIndex-1]:',
      //   digged[diggedIndex - 1]
      // );
      // console.log(
      //   '🚀 ~ file: first.ts:103 ~ digged[diggedIndex]:',
      //   digged[diggedIndex]
      // );
      if (
        digged[diggedIndex - 1] !== undefined &&
        digged[diggedIndex] - digged[diggedIndex - 1] ===1
      ) {
        boundaries.push(digged[diggedIndex - 1]);
        boundaries.push(digged[diggedIndex]);
        // diggedIndex++;
      }
    }
    // boundaries.forEach((boundary) => {
    //   for (
    //     let fillPosition = boundary.start + 1;
    //     fillPosition < boundary.end;
    //     fillPosition++
    //   ) {
    //     newMatrix[columnIndex][fillPosition] = '?';
    //     digCount++;
    //   }
    // });

    // console.log('🚀 ~ file: first.ts:90 ~ boundaries:', boundaries);
    // for (let rowIndex = 0; rowIndex < matrixWidth + 1; rowIndex++) {
    //   // console.log('🚀 ~ file: first.ts:52 ~ columnIndex:', columnIndex);
    //   // console.log('🚀 ~ file: first.ts:54 ~ rowIndex:', rowIndex);
    //   // console.log(
    //   //   '🚀 ~ file: first.ts:57 ~ matrix[columnIndex][rowIndex]:',
    //   //   newMatrix[columnIndex][rowIndex]
    //   // );
    //   const lineClosed = newMatrix[columnIndex].findIndex(
    //     (cell, index) => index > rowIndex && cell === '#'
    //   );
    //   // console.log('🚀 ~ file: first.ts:92 ~ lineClosed:', lineClosed);
    //   if (newMatrix[columnIndex][rowIndex] === '#') {
    //     // if (fill===false && lineClosed>-1  ) {
    //     //   fill = true;
    //     // }else  if (fill===true && lineClosed===-1  ) {
    //     //   fill = false;
    //     // }
    //     if(newMatrix[columnIndex][rowIndex-1] !== '#' && newMatrix[columnIndex][rowIndex+1] !== '#'){
    //     fill = !fill
    //     }
    //     digCount++;
    //   } else {
    //     newMatrix[columnIndex][rowIndex] = '.';
    //   }

    //   // console.log('🚀 ~ file: first.ts:59 ~ fill:', fill);
    //   if (
    //     (newMatrix[columnIndex][rowIndex] === '.' ||
    //       newMatrix[columnIndex][rowIndex] === undefined) &&
    //     fill
    //   ) {
    //     newMatrix[columnIndex][rowIndex] = '?';
    //     digCount++;
    //   }
    // }
  }
  // console.log("🚀 ~ file: first.ts:103 ~ digCount:", digCount)
  // console.log('🚀 ~ file: first.ts:70 ~ matrix:', newMatrix.map(row=>JSON.stringify(row)));
  newMatrix.map((row) => console.log(JSON.stringify(row)));

  return digCount;
};

export default first;
