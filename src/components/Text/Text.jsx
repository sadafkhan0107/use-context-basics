import { useCount } from '../../context/count-context';

export const Text = () => {
    const {count} = useCount();
    return <p>{count}</p>
}