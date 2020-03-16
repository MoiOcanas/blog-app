import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
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

const StackList = styled.ul`
    li {
        word-break: break-word;
    }
`

const About = () => {
    /* Render method to about page */
    return (
        <AboutContainer>
            <h4>About page</h4>
            <p>Posts app using the JSonPlaceHolder API as the main tool, in addition to React, Redux, Styled Components, Bootstrap and some help libraries.</p>
            <StackList>
                <h5>Stack</h5>
                <li>JsonPlaceHolder: <a href="https://jsonplaceholder.typicode.com/posts">https://jsonplaceholder.typicode.com/posts</a></li>
                <li>React: <a href="https://es.reactjs.org/">https://es.reactjs.org/</a></li>
                <li>Redux: <a href="https://redux.js.org/">https://redux.js.org/</a></li>
                <li>React Router: <a href="https://reacttraining.com/react-router/web/guides/quick-start">https://reacttraining.com/react-router/web/guides/quick-start</a></li>
                <li>Styled Components: <a href="https://styled-components.com/">https://styled-components.com/</a></li>
                <li>Bootstrap: <a href="https://getbootstrap.com/">https://getbootstrap.com/</a></li>
            </StackList>
        </AboutContainer>
    );
}

export default About;
