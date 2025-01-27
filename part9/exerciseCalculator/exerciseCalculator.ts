//9.2
interface {

}
interface exerciseResult {
    periodLength: number,
    trainingDays: number,
    target: number,
    averageTime: number,
    targetReached: boolean,
    rating: number,
    ratingDescription: string,
};

const parseArgs = (args: string[]: {target: number, number})

const calculateExercises = (exerciseArray: number[], targetValue: number) => {
    let periodLength = exerciseArray.length;
    let trainingDays = exerciseArray.filter(num => num !== 0).length;
    let target = targetValue;
    let averageTime = calculateAverage(exerciseArray);
    let targetReached = determineReachedTarget(averageTime, target);
    let rating = determineRating(averageTime, target);
};

const calculateAverage = (array: number[]) => {
    const sum = array.reduce((currentSum, currentIndexValue) => currentSum + currentIndexValue, 0);
    return (sum / array.length);
}

const determineReachedTarget = (average: number, target: number): boolean => {
    if ( average >= target ) 
        return true;
    else 
        return false;
}

const determineRating = (average: number, target: number): number => {
    if(average >= target) {
        return 3;
    } else if (target - average < 1) {
        return 2;
    } else {
        return 1;
    }
}
