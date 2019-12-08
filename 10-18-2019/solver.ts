import { simplePoints } from './simplePoints';
import { PointList } from './pointList';
import { IPoint } from './singlePoint';

let Board = new PointList();
let startPoint: IPoint = { x: 0, y: 9, value: 6 };
let currentPath: IPoint[] = [startPoint];
let pathIsSolution = false;

simplePoints.forEach(simplePoint => {
  Board.add(simplePoint);
});

class Path {
  soFar: IPoint[];
  deadPaths: IPoint[][] = [];
  unexploredBranches: IPoint[][] = [];

  constructor(initial: IPoint[]) {
    this.soFar = initial;
  }

  getLast = () => {
    return this.soFar[this.soFar.length - 1];
  };

  isTooLong = () => {
    return this.soFar.length > 100;
  };
  isSolved = () => {
    return this.getLast().value === 0;
  };

  getFullPath = () => this.soFar;

  // log = () => [...this.soFar].join(',');
  next = () => {
    // keep from going in circles by checking if the point is already used in the current path
    const possibilities = Board.getPossibilities(this.getLast()).filter(poss => {
      return !this.soFar.includes(poss);
    });

    if (possibilities.length === 0) {
      // console.log('dead end');
      this.deadPaths.push(this.soFar);
      // console.log(this.soFar);
      this.soFar = this.unexploredBranches.pop();
      // console.log(`branch failed.  Trying one of the other possibilities`);
    } else if (possibilities.length === 1) {
      this.soFar.push(possibilities[0]);
    } else {
      this.soFar.push(possibilities.pop());
      possibilities.forEach(possibility => {
        // console.log(`multiple branches, hanging on to ${[...this.soFar, possibility]}`);
        this.unexploredBranches.push([...this.soFar, possibility]);
      });
      // console.log(`unexplored count is now ${this.unexploredBranches.length}`);
    }
  };
}

const solver = new Path(currentPath);
while (!solver.isSolved() && !solver.isTooLong()) {
  solver.next();
}

const solution = solver.getFullPath();
solution.forEach(point => {
  console.log(point);
});
