import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProdutoWrapper = styled.tr`
  border-bottom: 1px solid #38444d;
  width:100%;
  padding: 2rem;
  text-align: center;
`

export const ProdutoID = styled.td`
  font-size: 0.9rem;
  color: #FFF;
`

export const ProdutoTitle = styled.td`
  font-size: 1.6rem;
  font-weight: 700;
  color: #FFF;
  margin: 0.5rem 0.2rem 0.5rem;
`
export const ProdutoTD = styled.td`
display:flex;
`

export const ProdutoQuantidade = styled.td`
font-size: 1.2rem;
font-weight: 300;
line-height: 1.2;
color: #FFF;
`

export const ProdutoValue = styled.td`
font-size: 1.2rem;
font-weight: 300;
line-height: 1.2;
color: #FFF;
`
export const ProdutoLink = styled(Link)`
  color: #8899a6;
  align-items:center;
  justify-content:center;
  width: 32px;
  text-decoration: none;
  &:hover {
    color: #1fa1f2;
  }
`