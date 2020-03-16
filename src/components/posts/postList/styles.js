import styled from 'styled-components';

export const BlogListContainer = styled.div`
    display: grid;
    grid-template-columns: 33% 33% 33%;

    @media (max-width: 1024px) {
        grid-template-columns: auto auto;
    }

    @media (max-width: 480px) {
        grid-template-columns: 100%;
    }
`