# cobaia-torre

Repositório cobaia da torre de controle. O código é trivial de propósito — o que está sob teste
não é ele, e sim o percurso da torre contra um forge de verdade.

## Antes de mexer

O arquivo `.github/workflows/ci.yml` é **fixture**, não infraestrutura deste repositório. Cada
linha dele sustenta um caso de teste ao vivo da torre:

- `on: pull_request` e `workflow_dispatch` declarados juntos — os dois modos de disparo
- os jobs `lint` e `testes` — os nomes viram a **fonte** da evidência colhida do forge
- **cobertura não é publicada** — a ausência precisa ser real, não encenada

Não adicione publicação de cobertura, não renomeie os jobs, não remova gatilho. Se precisar mudar,
leia antes as issues #132, #133 e #134 de `admin-servicosdigitais/torre-de-controle`.

A suíte em `src/__tests__/` tem de continuar quebrando quando um diff ruim é aplicado — é assim
que o teste ao vivo colhe vermelho além de verde.

## Comandos

```bash
npm install     # dependências
npm run lint    # eslint
npm test        # vitest
```

## Agent skills

### Issue tracker

Issues deste repositório vivem no GitHub Issues, via `gh`. Ver `docs/agents/issue-tracker.md`.

### Triage labels

Vocabulário canônico, sem renomeações. Ver `docs/agents/triage-labels.md`.

### Domain docs

Repositório de contexto único. Ver `docs/agents/domain.md`.
