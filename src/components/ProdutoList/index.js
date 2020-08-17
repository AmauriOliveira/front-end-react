import React, { useState, useEffect } from 'react';

//import api from "../services/api";
import * as S from './styles';

import { Enter } from '@styled-icons/ionicons-outline/Enter';

export default function ProdutoList() {

    // const [produtos, setProdutos] = useState([]);

    //useEffect(() => {
    // api.get('produtos').then(response => {
    //   setProdutos(response.data);
    // })
    //}, [0]);

    return (
        <S.ProdutoWrapper key="85233">
            <S.ProdutoID>85233</S.ProdutoID>
            <S.ProdutoTitle>aquarela alon wow masc p cilios wp terca</S.ProdutoTitle>
            <S.ProdutoQuantidade>2</S.ProdutoQuantidade>
            <S.ProdutoValue>35.6</S.ProdutoValue>
            <S.ProdutoTD>
                <S.ProdutoLink to="/detalhe/">
                    <Enter />
                </S.ProdutoLink >
            </S.ProdutoTD>
        </S.ProdutoWrapper>
        /*  <ul>
 
             <S.ProdutoWrapper key="85233">
                 <S.ProdutoInfo>
                     <S.ProdutoID>85233</S.ProdutoID>
                     <S.ProdutoTitle>
                         aquarela alon wow masc p cilios wp terca
                    </S.ProdutoTitle>
                     <S.ProdutoDescription>
                         <S.ProdutoQuantidade>2</S.ProdutoQuantidade>
                         <S.ProdutoValue>35.6</S.ProdutoValue>
                         <S.ProdutoLink to="/detalhe/">
                             <Enter />
                         </S.ProdutoLink >
                     </S.ProdutoDescription>
                 </S.ProdutoInfo>
             </S.ProdutoWrapper>
         </ul> */
    );
}
/*
cod: 85233
nome: "aquarela alon wow masc p cilios wp terca"
preco: 35.6
quantidade: 2
_id: "5ec154f15d19e048d0b395d6"

{
          produtos.map(produto => (
            <li key={produto.cod}>
              <strong>Nome:</strong>
              <p>{produto.nome}</p>
              <strong>Quantidade:</strong>
              <p>{produto.quantidade}</p>
              <strong>id:</strong>
              <p>{produto.cod}</p>
            </li>
          ))
        }
*/