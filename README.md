# MineTunnel Control Center

MineTunnel Control Center é uma aplicação front-end de página única para visualizar mundos de Minecraft compartilhados por túneis e acompanhar a infraestrutura de conexão. A interface reúne uma listagem de mundos carregada de um JSON externo e uma listagem local de relays, além de busca e filtro por status.

O projeto foi desenvolvido como Trabalho de Conclusão da Disciplina de Desenvolvimento de Aplicações para Web, utilizando React, TypeScript e CSS responsivo.

## Funcionalidades

- carregamento de 10 mundos a partir de um arquivo JSON externo;
- feedback visual durante o carregamento dos dados;
- mensagem de erro compreensível e opção de tentar novamente;
- busca em tempo real por nome ou descrição;
- filtro de mundos por status online e offline;
- resumo com quantidade de mundos, mundos online e jogadores;
- listagem secundária de relays mantida em um vetor local;
- layout mobile first para celular, tablet e desktop;
- componentes e props tipados com TypeScript.

## Fonte dos dados

A listagem principal é carregada de [`public/worlds.json`](public/worlds.json) com a API nativa `fetch`, executada dentro de um `useEffect`.

O arquivo contém 10 mundos. Cada item possui nome, descrição, versão, jogadores, limite de jogadores, status, latência e informações de imagem. A listagem de relays permanece declarada localmente em [`src/data/relays.ts`](src/data/relays.ts), conforme o escopo da Fase 4.

## Como executar

É necessário ter o Node.js instalado.

```bash
npm install
npm run dev
```

O Vite mostrará no terminal o endereço local da aplicação, normalmente `http://localhost:5173`.

## Verificações

```bash
npm run lint
npm run build
```

O primeiro comando executa o ESLint. O segundo verifica os tipos com TypeScript e gera a versão de produção na pasta `dist`.

## Estrutura principal

```text
public/
  worlds.json              Dados externos da listagem principal
src/
  components/              Componentes da interface
  data/relays.ts           Vetor local da listagem secundária
  services/worldService.ts Acesso tipado ao JSON com fetch
  App.tsx                  Estado, efeito, filtros e composição
  App.css                  Estilos e responsividade
  types.ts                 Types dos mundos, relays e filtros
```

## Estados da interface

Durante a leitura do JSON, a página apresenta cards de carregamento. Se a requisição falhar ou retornar um status HTTP inválido, uma mensagem de erro é exibida com um botão para repetir a tentativa. Após o sucesso, os dados são renderizados e continuam compatíveis com a busca e o filtro da Fase 3.
