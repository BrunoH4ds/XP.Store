# XP.Store

ela e uma loja Gamer criada para solucionar os problemas de falta de informacoes de produtos de maneira facil e vendendo sempre pelo melhor preco

**Importante** O site pode nao funcionar por falta de um banco de dados.

## Turborepo Starter

Este é um modelo oficial do Turborepo.

## Usando este exemplo

Execute o seguinte comando:

```sh
npx create-turbo@latest
```

## O que está incluído?

Este Turborepo inclui os seguintes pacotes/aplicativos:

### Aplicativos e Pacotes

- `docs`: um aplicativo [Next.js](https://nextjs.org/)
- `web`: outro aplicativo [Next.js](https://nextjs.org/)
- `@repo/ui`: uma biblioteca de componentes React compartilhada entre as aplicações `web` e `docs`
- `@repo/eslint-config`: configurações do `eslint` (inclui `eslint-config-next` e `eslint-config-prettier`)
- `@repo/typescript-config`: arquivos `tsconfig.json` usados em todo o monorepo

Cada pacote/aplicativo é 100% [TypeScript](https://www.typescriptlang.org/).

### Utilitários

Este Turborepo já vem com algumas ferramentas configuradas para você:

- [TypeScript](https://www.typescriptlang.org/) para verificação estática de tipos
- [ESLint](https://eslint.org/) para linting de código
- [Prettier](https://prettier.io) para formatação de código

### Build

Para compilar todos os aplicativos e pacotes, execute o seguinte comando:

```
cd my-turborepo
pnpm build
```

### Desenvolvimento

Para desenvolver todos os aplicativos e pacotes, execute o seguinte comando:

```
cd my-turborepo
pnpm dev
```

### Cache Remoto

O Turborepo pode usar uma técnica conhecida como [Cache Remoto](https://turbo.build/repo/docs/core-concepts/remote-caching) para compartilhar artefatos de cache entre máquinas, permitindo que você compartilhe caches de build com sua equipe e pipelines de CI/CD.

Por padrão, o Turborepo fará cache localmente. Para habilitar o Cache Remoto, você precisará de uma conta no Vercel. Caso não tenha uma conta, você pode [criar uma](https://vercel.com/signup). Em seguida, insira os comandos abaixo:

```
cd my-turborepo
npx turbo login
```

Isso irá autenticar a CLI do Turborepo com sua [conta Vercel](https://vercel.com/docs/concepts/personal-accounts/overview).

Depois, você pode vincular seu Turborepo ao Cache Remoto executando o seguinte comando na raiz do seu Turborepo:

```
npx turbo link
```

## Links Úteis

Saiba mais sobre o poder do Turborepo:

- [Tarefas](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Cache](https://turbo.build/repo/docs/core-concepts/caching)
- [Cache Remoto](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtragem](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Opções de Configuração](https://turbo.build/repo/docs/reference/configuration)
- [Uso da CLI](https://turbo.build/repo/docs/reference/command-line-reference)
