import styled from "styled-components";

export const ButtonFilter = ({ theme, handleSelect }) => {

    return (
        <Filter theme={theme} onChange={handleSelect}>
            <option>Filter Types</option>
            <option>electric</option>
            <option>ground</option>
            <option>poison</option>
            <option>grass</option>
            <option>fire</option>
            <option>flying</option>
            <option>water</option>
            <option>bug</option>
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