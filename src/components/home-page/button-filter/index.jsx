import { Filter } from './styled';

export const ButtonFilter = ({ theme, handleSelect }) => {

    return (
        <Filter theme={theme} onChange={handleSelect}>
            <option>Filter Types</option>
            <option>electric</option>
            <option>fire</option>
            <option>water</option>
            <option>ground</option>
            <option>grass</option>
            <option>normal</option>
            <option>poison</option>
            <option>flying</option>
            <option>bug</option>
            <option>fighting</option>
            <option>rock</option>
            <option>psychic</option>
            <option>ice</option>
            <option>ghost</option>
            <option>steel</option>
            <option>dragon</option>
            <option>dark</option>
            <option>fairy</option>
        </Filter>
    )
}