import React from 'react'
import './BadgeExemplo.css'

/**
 * ==============================================================================
 * COMPONENTE DIDÁTICO: BadgeExemplo
 * ==============================================================================
 *
 * CONCEITOS IMPORTANTES PARA A DEFESA / APRESENTAÇÃO:
 *
 * 1. COMPONENTE FUNCIONAL:
 *    No React moderno, componentes são simplesmente funções JavaScript que
 *    retornam elementos visuais (JSX). Não é necessário utilizar classes.
 *
 * 2. PROPS DESESTRUTURADAS:
 *    Em vez de receber 'props' e acessar 'props.texto' ou 'props.tipo',
 *    utilizamos a desestruturação do JavaScript:
 *      function BadgeExemplo({ texto, tipo = 'destaque' })
 *    Isso torna a assinatura da função limpa, autoexplicativa e permite
 *    definir valores padrão (default values) diretamente nos parâmetros.
 *
 * 3. REUTILIZAÇÃO E MODULARIZAÇÃO:
 *    Este componente pode ser utilizado em múltiplos pontos da aplicação
 *    apenas variando as propriedades passadas, garantindo DRY (Don't Repeat Yourself).
 *
 * @param {Object} props
 * @param {string} props.texto - Texto exibido no interior da badge
 * @param {'destaque' | 'esporte' | 'solar'} [props.tipo='destaque'] - Tipo visual
 * ==============================================================================
 */
function BadgeExemplo({ texto, tipo = 'destaque' }) {
  // Define a classe CSS dinamicamente com base no tipo recebido via props
  const classeTipo = `badge-exemplo badge-exemplo--${tipo}`

  return (
    <span className={classeTipo}>
      {texto}
    </span>
  )
}

export default BadgeExemplo
