import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProdutoLink = styled(Link)`
  color: #8899a6;
  display: block;
  width: 32px;
  text-decoration: none;
  &:hover {
    color: #1fa1f2;
  }
`

export const ProdutoWrapper = styled.li`
  align-items: center;
  border-bottom: 1px solid #38444d;
  display: flex;
  padding: 2rem 3rem;
  width: 100%;
`

export const ProdutoTag = styled.div`
  align-items: center;
  background: ${props => props.background};
  border-radius: 50%;
  color: #fff;
  display: flex;
  font-size: 1.3rem;
  font-weight: 700;
  justify-content: center;
  min-height: 90px;
  min-width: 90px;
  text-transform: uppercase;
`

export const ProdutoInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;
`

export const ProdutoID = styled.p`
  font-size: 0.9rem;
`

export const ProdutoTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0.2rem 0 0.5rem;
`

export const ProdutoDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.2;
`