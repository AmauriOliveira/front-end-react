import React from 'react';
import logo from '../../images/me.jpg';

import * as S from './styles';

export default function Avatar() {

    return <S.AvatarWrapper src={logo} alt="logo" />
}