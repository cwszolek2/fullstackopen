import CoursePart from "../types";
import { FC } from 'react';

//Need to rewrite the case statements to isntead use a map function.
const Part: FC<{ partProps: CoursePart[] }> = ({ partProps }): any =>  {
    partProps.forEach(part => {
        switch (part.kind) {
            case "basic":
                return (
                    <div>
                        <p>{part.name}</p>
                        <p>{part.exerciseCount}</p>
                        <p>{part.description}</p>
                    </div>
                )
            case "group":
                return(
                    <div>
                        <p>{part.name}</p>
                        <p>{part.exerciseCount}</p>
                        <p>{part.groupProjectCount}</p>
                    </div>
                )
            case "background":
                return(
                    <div>
                        <p>{part.name}</p>
                        <p>{part.exerciseCount}</p>
                        <p>{part.description}</p>
                        <p>{part.backgroundMaterial}</p>
                    </div>
                )
            case "special":
                return (
                    <div>
                        <p>{part.name}</p>
                        <p>{part.exerciseCount}</p>
                        <p>{part.description}</p>
                        <p>Requirements: {part.requirements.map((requirement) => <p>{requirement}</p>)}</p>
                    </div>
                )
            default:
                return assertNever(part);
        }
    });
}

/**
 * Helper function for exhaustive type checking
 */
const assertNever = (value: never): never => {
    throw new Error(
      `Unhandled discriminated union member: ${JSON.stringify(value)}`
    );
};

export default Part;