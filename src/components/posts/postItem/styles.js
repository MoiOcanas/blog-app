import styled from 'styled-components';

export const PostItemCard = styled.div`
    padding: 25px 35px;
    margin: 5px;
    position: relative;
    border-radius: 15px;
    background-color: #fefefe;
    text-align: center;

    h4 {
        text-transform: uppercase;
    }

    @media (max-width: 480px) {
        padding: 25px 25px;
    }
`

export const PostVisitedItemCard = styled.div`
    padding: 20px;
    margin: 5px;
    background: #E9E9E9;
    text-align: center;

    h4 {
        text-decoration: line-through;
        text-transform: uppercase;
    }
`

export const DeleteButton = styled.button`
    background: transparent;
    border: none;
    color: #999999;
    position: absolute;
    top: 12px;
    right: 12px;
`;

export const ActionButton = styled.button`
    background: transparent;
    border: none;

    &:hover {
        text-decoration: underline;
    }
`;
export const ButtonsContainer = styled.div`
    text-align: center;
`