import {Text} from '../Text/Text';
import {CountProvider} from '../../context/count-context'
import {useCount} from '../../context/count-context'

export const Button = () => 
{
    const {count,setCount} = useCount()
    const handleClick = () => setCount(count+1)
    return(
    <> 
    <button onClick={handleClick}>Clicked {count} times</button>
     <Text />
    </>
    )
}
