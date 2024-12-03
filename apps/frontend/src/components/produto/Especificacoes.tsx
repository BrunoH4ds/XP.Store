import { IconTag } from "@tabler/icons-react";
import { Produto } from "@gstore/core";
import Tag from "../shared/Tag";

export interface EspecificacoesProps {
  produto: Produto;
}

export default function Especificacoes(props: EspecificacoesProps) {
  const { produto } = props;

  // Verifica se 'produto.especificacoes' é uma string JSON e converte para um objeto
  const especificacoes = 
    typeof produto.especificacoes === "string"
      ? JSON.parse(produto.especificacoes)
      : produto.especificacoes;

  return (
    <div className="flex-1 flex flex-col gap-1">
      <div className="flex mb-3">
        <Tag
          label={produto.especificacoes.destaque!}
          icone={IconTag}
          outlined
        />
      </div>
      {especificacoes &&
        // Obtém as chaves do objeto e filtra a chave 'destaque'
        Object.keys(especificacoes)
          .filter((k) => k !== "destaque")
          .map((chave) => (
            <div key={chave} className="flex gap-1">
              <span className="p-2 w-1/3 bg-black/40 rounded">{chave}</span>
              <span className="p-2 w-2/3 bg-black/40 rounded">
                {especificacoes[chave]}
              </span>
            </div>
          ))}
    </div>
  );
}
