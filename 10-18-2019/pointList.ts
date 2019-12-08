import { IPoint } from './singlePoint';

class PointList {
  points: IPoint[] = [];

  add = (value: number) => {
    if (this.points.length === 0) {
      this.points.push({
        x: 0,
        y: 0,
        value
      });
    } else if (this.points.length % 10 === 0) {
      const last = this.getLast();
      this.points.push({
        x: 0,
        y: last.y + 1,
        value
      });
    } else {
      const last = this.getLast();
      this.points.push({
        x: last.x + 1,
        y: last.y,
        value
      });
    }
  };

  getLength = () => this.points.length;

  getLast = () => {
    return this.points[this.points.length - 1];
  };

  getPossibilities = (currentPoint: IPoint) => {
    const possibilities: IPoint[] = [];
    // console.log(currentPoint);
    // console.log(this.points);
    // up
    possibilities.push(
      this.points.find(point => {
        return point.x === currentPoint.x && point.y === currentPoint.y - currentPoint.value;
      })
    );
    // down
    possibilities.push(
      this.points.find(point => {
        return point.x === currentPoint.x && point.y === currentPoint.y + currentPoint.value;
      })
    );
    // right
    possibilities.push(
      this.points.find(point => {
        return point.y === currentPoint.y && point.x === currentPoint.x + currentPoint.value;
      })
    );
    // left
    possibilities.push(
      this.points.find(point => {
        return point.y === currentPoint.y && point.x === currentPoint.x - currentPoint.value;
      })
    );
    // console.log(possibilities);
    return possibilities.filter(possibility => possibility && possibility.x >= 0 && possibility.x <= 9 && possibility.y >= 0 && possibility.y <= 9);
  };
}

export { PointList };
