# Challenge Bossabox

Esse repositório é um `monorepo`, utilizando yarn e lerna, contendo 3 packages.

- API
- Client
- Babel (Para compilar)

## Rodar projeto

Clone o repositório.

```bash
$ git clone git@github.com:yumartins/challenge-bossabox.git
$ cd challenge-bossabox
```

Instale as dependências utilizando `yarn`.

```bash
$ yarn
```

Inicie o projeto em desenvolvimento.

```bash
$ yarn app
```

Como o projeto rodando com o script `app`, caso queira rodar o build, basta rodar o script `build`, ele irá percorrer todo os packages.

```bash
$ yarn build
```

O app, vai estar no caminho.

```bash
$ cd packages/challenge-client/out
```

E é isso ...
Tks ❤️
