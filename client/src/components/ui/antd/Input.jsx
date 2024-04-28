import {Input as InputA} from 'antd';

export default function Input({...props}) {
    return <InputA {...props} />;
}

export function SearchInput({...props}) {
    return <InputA.Search {...props} />;
}