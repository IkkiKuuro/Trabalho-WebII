import React, { useState } from 'react'
import './FormularioCadastro.css'

/**
 * ==============================================================================
 * COMPONENTE DIDÁTICO: FormularioCadastro (Cadastro de Atletas)
 * ==============================================================================
 *
 * CONCEITOS IMPORTANTES PARA A DEFESA / APRESENTAÇÃO:
 *
 * 1. FORMULÁRIOS CONTROLADOS (Controlled Components):
 *    No React, um componente é dito "controlado" quando o valor de cada campo
 *    de entrada (input) é mantido e controlado diretamente pelo estado do React
 *    (via hook 'useState'). A fonte única da verdade (Single Source of Truth)
 *    é o estado do componente, e não o DOM do navegador.
 *
 * 2. FLUXO UNIDIRECIONAL DE DADOS E EVENTOS:
 *    - Leitura: o atributo 'value={nome}' vincula o input à variável de estado.
 *    - Atualização: o evento 'onChange' captura a digitação do usuário em tempo real
 *      através de 'e.target.value' e invoca a função 'setNome()'.
 *
 * 3. PREVENÇÃO DO COMPORTAMENTO PADRÃO ('e.preventDefault()'):
 *    Em formulários HTML padrão, o clique em submeter recarrega a página enviando
 *    uma requisição HTTP. No modelo Single Page Application (SPA) do React, usamos
 *    'e.preventDefault()' para interceptar esse evento, mantendo a aplicação viva
 *    e processando os dados de forma instantânea em memória.
 *
 * 4. COMUNICAÇÃO DE FILHO PARA PAI (Callback Props):
 *    O componente 'FormularioCadastro' recebe a função 'onCadastrarAtleta' via props.
 *    Ao validar e montar o novo objeto de atleta, o filho invoca essa função para
 *    notificar o componente pai ('App.jsx'), elevando o estado (Lifting State Up).
 * ==============================================================================
 */
function FormularioCadastro({ onCadastrarAtleta }) {
  // 1. Estados locais para controle de cada campo do formulário
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [modalidade, setModalidade] = useState('beach-tennis') // Modalidade padrão inicial

  // Opções de modalidades esportivas disponíveis na Arena Sunset
  const opcoesModalidades = [
    { id: 'beach-tennis', nome: 'Beach Tennis' },
    { id: 'futevolei', nome: 'Futevôlei' },
    { id: 'volei-praia', nome: 'Vôlei de Praia' }
  ]

  /**
   * Manipulador do envio do formulário (submit)
   */
  const handleSubmit = (e) => {
    // Impede o recarregamento da página (comportamento padrão do navegador)
    e.preventDefault()

    // Monta o objeto com os dados do novo atleta
    const novoAtleta = {
      id: Date.now().toString(),
      nome: nome.trim(),
      email: email.trim(),
      telefone: telefone.trim(),
      modalidade,
      dataCadastro: new Date().toLocaleDateString('pt-BR')
    }

    // Notifica o componente pai repassando o novo atleta
    if (onCadastrarAtleta) {
      onCadastrarAtleta(novoAtleta)
    }

    // Limpa os campos de texto após o envio
    setNome('')
    setEmail('')
    setTelefone('')
  }

  return (
    <div className="formulario-cadastro-container">
      <div className="formulario-cabecalho">
        <span className="formulario-tag">Área de Membros</span>
        <h3 className="formulario-titulo">Cadastro de Atletas e Alunos</h3>
        <p className="formulario-subtitulo">
          Preencha os dados abaixo para registrar novos praticantes nas modalidades de Beach Tennis, Futevôlei e Vôlei de Praia.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="formulario-corpo" noValidate>
        {/* Seletor de Modalidade Esportiva em Chips Interativos */}
        <div className="grupo-campo">
          <label className="label-campo">Modalidade Esportiva Preferida</label>
          <div className="chips-modalidades" role="group" aria-label="Seleção de modalidade esportiva">
            {opcoesModalidades.map((opcao) => (
              <button
                key={opcao.id}
                type="button"
                className={`chip-modalidade ${modalidade === opcao.id ? 'chip-ativo' : ''}`}
                onClick={() => setModalidade(opcao.id)}
              >
                {opcao.nome}
              </button>
            ))}
          </div>
        </div>

        {/* Campo: Nome Completo */}
        <div className="grupo-campo">
          <label htmlFor="campo-nome" className="label-campo">
            Nome Completo
          </label>
          <input
            id="campo-nome"
            type="text"
            className="input-campo"
            placeholder="Ex: Gabriel Medina da Silva"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>

        {/* Campo: E-mail */}
        <div className="grupo-campo">
          <label htmlFor="campo-email" className="label-campo">
            E-mail
          </label>
          <input
            id="campo-email"
            type="email"
            className="input-campo"
            placeholder="Ex: atleta@exemplo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Campo: Telefone */}
        <div className="grupo-campo">
          <label htmlFor="campo-telefone" className="label-campo">
            Telefone
          </label>
          <input
            id="campo-telefone"
            type="tel"
            className="input-campo"
            placeholder="Ex: (88) 99876-5432"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
        </div>

        {/* Botão de Submissão Principal */}
        <button type="submit" className="btn-cadastrar-atleta">
          Cadastrar Atleta
        </button>
      </form>
    </div>
  )
}

export default FormularioCadastro
