interface Measurements {
    height: number,
    weight: number
}
//ERROR something is off with this formula at the top lol
const parseArgs = (args: string[]): Measurements  => {
    if(args.length > 2) throw new Error("Not enough arguments");
    if(args.length < 2) throw new Error("Not enough arguments");

    if(!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
        return {
            height: Number(args[2]),
            weight: Number(args[3])
        }
    } else {
        throw new Error("Provided values were not numbers");
    }
}

const calculateBMI = (height: number, weight: number): string  => {
    let bmi = ((weight) / ((height/100)^2));
    if (bmi < 16) {
        return "Underweight (Severe Thinness)";
    } 
    else if (bmi > 16 && bmi < 16.9) {
        return "Underweight (Moderate Thinness)";
    }
    else if (bmi > 17 && bmi < 18.4) {
        return "Underweight (Mild Thinness)";
    }
    else if (bmi > 18.5 && bmi < 24.9) {
        return "Normal Range";
    }
    else if (bmi > 25 && bmi < 29.9) {
        return "Overweight (Pre-Obese)";
    }
    else if (bmi > 30 && bmi < 34.9) {
        return "Obese (Class I)";
    }
    else if (bmi > 35 && bmi < 39.9) {
        return "Obese (Class II)";
    }
    else return "Obese (Class III)";
}

try {
    console.log(calculateBMI(180, 74));
} catch (error: unknown) {
    let errorMessage = "Something bad happened";
    if (error instanceof Error) {
        errorMessage += ' Error ' + error.message;
    }
    console.log(errorMessage);
}
