/**
 * Repositório cobaia da torre de controle.
 *
 * O conteúdo é trivial de propósito: o que está sob teste aqui não é este código,
 * e sim o percurso da torre — abrir mudança a partir de um diff real, disparar a
 * verificação e colher evidência com procedência.
 */

export function somar(a: number, b: number): number {
  return a + b
}

export function saudacao(nome: string): string {
  // verde — este diff não altera o comportamento
  return `Olá, ${nome}!`
}
