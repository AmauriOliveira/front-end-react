import React from 'react';

import * as S from './styles';
import Avatar from '../Avatar';

const title = "pagina";
const position = "position";
const description = "description";
const author = "author";

const Profile = () => (
  <S.ProfileWrapper>
    <S.ProfileLink>
      <Avatar />
      <S.ProfileAuthor>
        {title}
        <S.ProfilePosition>{position}</S.ProfilePosition>
      </S.ProfileAuthor>
    </S.ProfileLink>
    <S.ProfileDescription>{description}</S.ProfileDescription>
    <S.ProfileDescription>{author}</S.ProfileDescription>
  </S.ProfileWrapper>
)
export default Profile;