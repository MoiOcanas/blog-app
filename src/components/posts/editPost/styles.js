import styled from 'styled-components';

export const EditContainer = styled.div`
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

export const FormField = styled.div`
    display: flex;
    margin: 0 0 1rem 0;
`
export const EditInput = styled.input`
    font-weight: bold;
    width: 100%;
    margin: 0 35px 20px ;
    height: 40px;
    padding: 6px 15px;
    border-radius: 5px;
    outline: none;
    border: none;
    background: #F6F7F9;
    color: #748194;
    font-size: 14px;
`

export const EditText = styled.textarea`
    font-weight: bold;
    width: 100%;
    margin: 0 35px 20px ;
    padding: 6px 15px;
    border-radius: 5px;
    outline: none;
    border: none;
    background: #F6F7F9;
    color: #748194;
    font-size: 14px;
`;

export const EditButton = styled.button`
    font-weight: bold;
    width: 200px;
    margin: 0 auto;
    height: 45px;
    padding: 6px 15px;
    border-radius: 5px;
    outline: none;
    border: none;
    background: #EE9BA3;
    text-transform: uppercase;
    color: white;
    font-size: 14px;
`;

export const ButtonContainer = styled.div`
    text-align: center;
`;
