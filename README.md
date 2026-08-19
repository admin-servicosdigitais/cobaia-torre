# cobaia-torre

Repositório cobaia da [torre de controle](https://github.com/admin-servicosdigitais/torre-de-controle).
Existe para que o percurso da torre seja provado contra um forge de verdade — abrir mudança a
partir de um diff real, disparar a verificação, colher evidência com procedência — em vez de
contra um fake que responde o que combinamos.

O código aqui é trivial de propósito. **Não é ele que está sob teste.**

## O contrato com a torre

| O que a torre espera | Onde está | Por quê |
| --- | --- | --- |
| Branch padrão `main` | — | Base dos pull requests abertos pelo adaptador |
| `on: pull_request` declarado | `.github/workflows/ci.yml` | Caso do gatilho do cliente: o CI dispara sozinho, e o ledger não pode afirmar autoria nossa |
| `workflow_dispatch` declarado | `.github/workflows/ci.yml` | Caso do disparo por nós: só aqui `disparada_por_nos` é verdade |
| Check runs `lint` e `testes` | `.github/workflows/ci.yml` | Fonte e momento da evidência de teste saem do nome do check e da conclusão dele |
| Cobertura **não** publicada | `.github/workflows/ci.yml` | A ausência de evidência de cobertura precisa ser real: só registramos que falta porque perguntamos |
| Suíte que quebra com um diff ruim | `src/__tests__/index.test.ts` | O teste ao vivo precisa colher verde **e** vermelho |

Mexer em qualquer linha dessa tabela quebra um teste ao vivo da torre. Se for mexer, leia antes as
issues [#132](https://github.com/admin-servicosdigitais/torre-de-controle/issues/132),
[#133](https://github.com/admin-servicosdigitais/torre-de-controle/issues/133) e
[#134](https://github.com/admin-servicosdigitais/torre-de-controle/issues/134).

## Credencial

A torre escreve aqui com um PAT fine-grained **restrito a este repositório**, separado da
credencial de leitura que é montada na sessão do runtime — reusar a mesma anularia a garantia de
que o token de escrita não entra no sandbox.

Permissões mínimas do PAT (`GITHUB_PAT_ESCRITA` na torre):

| Permissão | Nível | Para quê |
| --- | --- | --- |
| Contents | Read and write | Clonar, empurrar a branch da mudança |
| Pull requests | Read and write | Abrir, integrar e reverter a mudança |
| Actions | Read and write | Disparar o workflow e ler o resultado do run |
| Checks | Read | Colher os check runs como evidência |
| Metadata | Read | Obrigatória pelo GitHub |

Este repositório é público: minutos de Actions não consomem cota da organização, e o teste ao vivo
pode rodar quantas vezes for preciso.

## Comandos

```bash
npm install     # dependências
npm run lint    # eslint
npm test        # vitest
```
