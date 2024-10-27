import styled from "styled-components";

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

const Filter = styled.select`
    position: absolute;
    top: 25px;
    right: 35px;
    
    background-color: ${props => props.theme.buttonBackground};
    font-size: 10px;
    padding: 8px;
    text-shadow: none;
    color: ${props => props.theme.buttonColor};
    cursor: pointer;

    option {
        padding: 10px;
    }

    @media (max-width: 1024px) {
        top: 10px;
        right: 10px;
    }
`