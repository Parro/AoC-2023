import { Brick, BrickMap } from './first/first';

type BricksInContact = (args: {
  brickMaps: BrickMap;
  brick: Brick;
  z: number;
}) => number;

const bricksInContact: BricksInContact = ({ brickMaps, brick, z }) => {
  // console.log('🚀 ~ file: first.ts:44 ~  ~ brick:', brick);
  let contacts = [];
  const bricksAbove = brickMaps[z + 1];
  if (bricksAbove === undefined) {
    return [];
  }
  // console.log('🚀 ~ file: bricksInContact.ts:35 ~ bricksBelow:', bricksAbove);
  bricksAbove.forEach((brickBelow) => {
    // console.log(
    //   '🚀 ~ file: first.ts:48 ~ Object.values ~ brickBelow:',
    //   brickBelow
    // );
    const brickCoordinates = Object.values(brick)[0];
    const brickBelowName = Object.keys(brickBelow)[0];
    const brickBelowCoordinates = Object.values(brickBelow)[0];

    const xContact = brickCoordinates.x.some((xBrick) => {
      return brickBelowCoordinates.x.indexOf(xBrick) > -1;
    });
    // console.log('🚀 ~ file: first.ts:62 ~ xContact ~ xContact:', xContact);

    const yContact = brickCoordinates.y.some((yBrick) => {
      return brickBelowCoordinates.y.indexOf(yBrick) > -1;
    });
    // console.log('🚀 ~ file: first.ts:66 ~ yC ontact ~ yContact:', yContact);

    if (xContact === true && yContact === true) {
      contacts.push(brickBelowName);
    }
  });

  // console.log('🚀 ~ file: bricksInContact.ts:77 ~ contactCount:', contacts);
  return contacts.join('_');
};

export default bricksInContact;
