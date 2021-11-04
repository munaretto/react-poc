import styled from 'styled-components';

export const PageWrapper = styled.section`
    height: 100%;
    width: fill-available;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: var(--background-grey);

    @media(max-width: 800px) {
        flex-direction: column;
    }
`;

export const Title = styled.h1`
    color: white;
    font-size: 4rem;
`;

export const Card = styled.section`
    padding: 16px;
    margin: 16px;
    height: 450px;
    width: 100%;
    min-width: 150px;
    max-width: 350px;
    background-color: white;
    display: flex;
    flex-flow: column;
    border-radius: 16px;
    justify-content: flex-start;

    Button {
        display: flex;
        flex-flow: column;
        align-self: center;
        width: 100%;
    }
`;