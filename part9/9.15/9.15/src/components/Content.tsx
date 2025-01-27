import {FC} from 'react'
import CoursePart from '../types';
import Part from './Part';

const Content: FC<{courseParts: CoursePart[]}> = ({ courseParts }) => {
    return (
        <div>
            <Part partProps={courseParts}>
            </Part>

        </div>
    )
}

export default Content;
