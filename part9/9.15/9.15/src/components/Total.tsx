import {FC} from 'react'

interface TotalProps {
    exercises: number[]
};

const getSum = (numArray: number[]): number => {
    return numArray.reduce((currentSum, currentIndexValue) => currentSum + currentIndexValue, 0);
};


const Total: FC<TotalProps> = ({ exercises }) => {
    return (
        <div>
            <p>Number of exercises {getSum(exercises)}</p>
        </div>        
    )
};

export default Total;
