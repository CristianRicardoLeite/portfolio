<<<<<<< HEAD
import { styled } from "styled-components";



export const NavBar = styled.nav`
    background: rgba(0, 0, 0, .3);
    width: max-content;
    display: block;
    padding: .7rem 1.7rem;
    z-index: 2;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    bottom: ${props => (props.isActiveContact ? '8.5rem' : '2rem')};
    display: flex;
    gap: .8rem;
    border-radius: 3rem;
    backdrop-filter: blur(15px);

    @media screen and (max-width: 600px) {
    nav {
        display: content;
    }
}
`


export const Link = styled.a`
     
        background: transparent;
        padding: .9rem;
        border-radius: 50%;
        display: flex;
        color: ${props => (props.isActiveNav ? 'var(--color-white)' : 'var(--color-light)')};
        box-shadow:${props => (props.isActiveNav ? '0 0 1rem var(--color-primary)' : '')}; ;
        font-size: 1.3rem;
    
        :hover {
            background: rgba(0, 0, 0, .3);
            box-shadow: 0 0 1rem var(--color-primary);
        }

        /* :active {
            background: var(--color-bg);
            color: var(--color-white);
            box-shadow: 0 0 1rem var(--color-primary);
        } */
    
=======
import { styled } from "styled-components";



export const NavBar = styled.nav`
    background: rgba(0, 0, 0, .3);
    width: max-content;
    display: block;
    padding: .7rem 1.7rem;
    z-index: 2;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    bottom: ${props => (props.isActiveContact ? '8.5rem' : '2rem')};
    display: flex;
    gap: .8rem;
    border-radius: 3rem;
    backdrop-filter: blur(15px);

    @media screen and (max-width: 600px) {
    nav {
        display: content;
    }
}
`


export const Link = styled.a`
     
        background: transparent;
        padding: .9rem;
        border-radius: 50%;
        display: flex;
        color: ${props => (props.isActiveNav ? 'var(--color-white)' : 'var(--color-light)')};
        box-shadow:${props => (props.isActiveNav ? '0 0 1rem var(--color-primary)' : '')}; ;
        font-size: 1.3rem;
    
        :hover {
            background: rgba(0, 0, 0, .3);
            box-shadow: 0 0 1rem var(--color-primary);
        }

        /* :active {
            background: var(--color-bg);
            color: var(--color-white);
            box-shadow: 0 0 1rem var(--color-primary);
        } */
    
>>>>>>> e61af9065dd16f47778f0371167c536e0f18970d
`