sampleObject = {
  one: "integer",
  two: "integer or null",
  strike: "boolean = false",
  spare: "boolean = false",
  points: "integer",
  bonus: {
    one: "integer or null",
    two: "integer or null"
  }
};

function bowlingScoreCalculator(arrOfObj) {
  let score = 0;

  for (i = 0; i < arrofObj.length - 1; i++) {
    //sets initial scores for individual frames;
    if (arrOfObj[i].one === 10) {
      strike = true;
      points = 10;
    } else if (arrOfObj[i].one + arrOfObj[i].two === 10) {
      spare = true;
      points = 10;
    } else {
      points = arrOfObj[i].one + arrOfObj[i].two;
    }
  }

  for (i = 0; i < arrofObj.length - 1; i++) {
    //sets bonuses based on strike or spare booleans
    if (arrOfObj[i].strike) {
      arrOfObj[i].bonus.one = arrOfObj[i + 1].one;
      if (arrOfObj[i + 1].two === null) {
        //if next frame is a strike
        arrOfObj[i].bonus.two = arrOfObj[i + 2].one;
      } else {
        arrOfObj[i].bonus.two = arrOfObj[i + 1].two;
      }
    }

    if (arrOfObj[i].spare) {
      arrOfObj[i].bonus.one = arrOfObj[i + 1].one;
    }
  }

  for (i = 0; i < arrOfObj.length; i++) {
    //sets score based on points and bonuses;
  }

  return score;
}

module.exports = bowlingScoreCalculator;
