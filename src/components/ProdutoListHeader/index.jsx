import React from 'react';

import * as S from './styles';

export default function ProdutoListHeader() {

    return (
        <tr>
            <th>ID</th>
            <th>Produto</th>
            <th>Quantidade</th>
            <th>Valor</th>
            <th>Botão</th>
        </tr>
    );
}