import styled from 'styled-components';

export const DetailsContainer = styled.div`
    background-color: #fff;
    width:100%;
    border-radius:15px;
    display:inline-block;
    padding: 20px 30px;

    h4 {
        text-align: center;
        text-transform: uppercase;
        font-weight: bold;
        margin-bottom: 15px;
    }

    @media (max-width: 480px) {
        padding: 20px 20px;
    }
`
