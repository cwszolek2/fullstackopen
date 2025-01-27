import {FC} from 'react'

interface HeaderProps {
    courseName: string;
}

const Header: FC<HeaderProps> = ({ courseName }) => {
    return <h1>{courseName}</h1>
};

export default Header;