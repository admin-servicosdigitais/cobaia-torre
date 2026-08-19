import { describe, it, expect } from 'vitest'
import { saudacao, somar } from '../index.js'

describe('cobaia', () => {
  it('soma dois números', () => {
    expect(somar(2, 3)).toBe(5)
  })

  it('saúda pelo nome', () => {
    expect(saudacao('torre')).toBe('Olá, torre!')
  })
})
