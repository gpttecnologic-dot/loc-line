# Loc-Line Geradores

Site institucional da Loc-Line — holding em soluções de energia desde 2009 (geração de energia, usinas móveis, plataformas elevatórias e engenharia elétrica em MG, RJ e SP).

Construído com Vite, React 19, Tailwind CSS v4 e shadcn/ui — build 100% estático (SPA), sem dependência de servidor.

## Desenvolvimento local

Requer [Bun](https://bun.sh).

```sh
bun install
bun run dev
```

## Build de produção

```sh
bun run build
```

Gera arquivos estáticos em `dist/` — funciona em qualquer hosting estático (GitHub Pages, Cloudflare Pages, Netlify, Vercel etc).

## Deploy no GitHub Pages

Já vem com um workflow em `.github/workflows/deploy.yml` que builda e publica automaticamente a cada push na branch `main`.

1. Suba este repositório para o GitHub (`git push -u origin main`).
2. No GitHub, vá em **Settings → Pages** e em "Build and deployment" escolha **Source: GitHub Actions**.
3. Dê um push (ou rode o workflow manualmente em "Actions") — em ~1 min o site fica no ar em `https://<seu-usuario>.github.io/<repo>/`.

### Domínio próprio

1. Crie o arquivo `public/CNAME` com uma única linha contendo seu domínio, por exemplo:
   ```
   www.locline.com.br
   ```
   (esse arquivo é copiado para `dist/` automaticamente no build.)
2. Na sua zona de DNS, aponte o domínio para o GitHub Pages:
   - Subdomínio (ex: `www`): registro **CNAME** para `<seu-usuario>.github.io`.
   - Domínio raiz (apex, ex: `locline.com.br`): registros **A** para os IPs do GitHub Pages (`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`).
3. Em **Settings → Pages → Custom domain**, cole o mesmo domínio e aguarde a verificação/certificado HTTPS.

## Scripts

- `bun run dev` — servidor de desenvolvimento
- `bun run build` — build de produção (`dist/`)
- `bun run preview` — pré-visualiza o build de produção localmente
- `bun run lint` — ESLint
- `bun run format` — Prettier
