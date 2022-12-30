import {
  FaFacebook,
  FaSearch,
  FaAlignJustify,
  FaPlus,
  FaFacebookMessenger,
  FaBell,
  FaCaretDown
} from 'react-icons/fa'
import {
  HeaderContainer,
  HeaderLeft,
  HeaderRight,
  LogoFb,
  MenuFb,
  PlusBtn,
  SearchFb
} from './AppStyled';

export default function Header() {
  return(
    <HeaderContainer>
      <HeaderLeft>
        <LogoFb>
          <FaFacebook />
        </LogoFb>
        <SearchFb>
          <FaSearch />
        </SearchFb>
        <MenuFb>
          <FaAlignJustify />
        </MenuFb>
      </HeaderLeft>

      <HeaderRight>
        <PlusBtn>
          <FaPlus />
        </PlusBtn>
        <PlusBtn>
          <FaFacebookMessenger />
        </PlusBtn>
        <PlusBtn>
          <FaBell />
        </PlusBtn>
        <PlusBtn>
          <FaCaretDown />
        </PlusBtn>
      </HeaderRight>
    </HeaderContainer>
  )
}