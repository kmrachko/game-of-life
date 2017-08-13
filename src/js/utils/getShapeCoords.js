export default function (centerPoint, shapePoints) {
  const shapeCoords = new Set();
  shapePoints.forEach(point => {
    shapeCoords.add({x: centerPoint.x + point.x, y: centerPoint.y - point.y});
  });
  return shapeCoords;
}