import React from 'react';

//import api from "../services/api";
import Layout from "../components/Layout";
import ProdutoList from "../components/ProdutoList";
import ProdutoListHeader from "../components/ProdutoListHeader";

export default function ProdutoPage() {

  return (
    <Layout>
      <table style={{ width: '100%' }}>
        <ProdutoListHeader />
        <ProdutoList />
        <ProdutoList />
        <ProdutoList />
        <ProdutoList />
        <ProdutoList />
        <ProdutoList />
      </table>
    </Layout>
  );
}