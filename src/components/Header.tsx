import { GambaModalButton } from 'gamba/react-ui'
import React from 'react'
import { FaDiscord, FaGithub, FaTwitter } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Logo = styled.img`
  width: 2em;
  height: 2em;
`

const Wrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr max-content;
  width: 100%;
  font-size: 25px;
  text-shadow: 
    3px 3px 0px #4f5290, // Offset x, y, blur and color
    6px 6px 0px #a79de0,
    9px 9px 0px #7672bd,
    12px 12px 0px #185469; // This creates a 3D effect
  backdrop-filter: blur(10px);
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  padding: 10px 20px;
  gap: 20px;
  .label {
    display: none;
    @media (min-width: 800px) {
      display: block;
    }
  }
`

const StyledNavigationLink = styled(NavLink)`
  color: var(--text-color);
  display: flex;
  align-items: center;
  gap: 1em;
  transition: color .1s, border .1s;
  white-space: nowrap;
  text-transform: uppercase;
`

const Links = styled.div`
  display: flex;
  gap: 20px;
  font-size: 20px;
  align-items: center;
  & > a > svg {
    display: block;
  }
`

function NavigationLink({ children, to }: React.PropsWithChildren<{to: string}>) {
  return (
    <StyledNavigationLink to={to}>
      {children}
    </StyledNavigationLink>
  )
}

export function Header() {
  return (
    <Wrapper>
      <NavigationLink to="/">
        <Logo src="/logo.png" />
        <div className="label">BoyFriend DAO</div>
      </NavigationLink>
      <Links>
        <a target="_blank" href="https://discord.com/invite/DvjPhQfBsQ" rel="noreferrer">
          <FaDiscord />
        </a>
        <a target="_blank" href="https://twitter.com/BoyfriendDAO" rel="noreferrer">
          <FaTwitter />
        </a>
      </Links>
      <GambaModalButton />
    </Wrapper>
  )
}
