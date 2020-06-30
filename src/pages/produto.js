
import React, { useState, useEffect } from 'react';

import api from "../services/api";
import Layout from "../components/Layout";

export default function ProdutoPage() {

  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    api.get('produtos').then(response => {
      setProdutos(response.data);
    })
  }, [0]);
  console.log(produtos);
  return (
    <Layout>
      <ul>
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
      </ul>
    </Layout>
  );
}
/*
cod: 85233
nome: "aquarela alon wow masc p cilios wp terca"
preco: 35.6
quantidade: 2
_id: "5ec154f15d19e048d0b395d6"
*/