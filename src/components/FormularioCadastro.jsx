import React, { useState } from 'react'
import './FormularioCadastro.css'

/**
 * ==============================================================================
 * COMPONENTE DIDÁTICO: FormularioCadastro (Cadastro com Validação Reativa)
 * ==============================================================================
 *
 * CONCEITOS IMPORTANTES PARA A DEFESA / APRESENTAÇÃO:
 *
 * 1. FORMULÁRIOS CONTROLADOS COM ESTADOS INDIVIDUAIS:
 *    Cada campo de formulário ('nome', 'email', 'telefone', 'modalidade') possui
 *    sua própria variável de estado gerenciada pelo hook 'useState'. Qualquer
 *    alteração no DOM atualiza o estado em tempo real (Controlled Components).
 *
 * 2. TRATAMENTO REATIVO DE ERROS (Reactive Error Handling):
 *    - O estado 'erros' armazena um mapa chave/valor com as falhas de validação.
 *    - Se 'erros.nome' existir, o input recebe a classe CSS '.campo-invalido'
 *      (borda vermelha) e exibe uma mensagem descritiva logo abaixo.
 *    - Ao digitar em um campo com erro, limpamos reativamente a falha daquele
 *      campo específico, oferecendo feedback instantâneo ao usuário.
 *
 * 3. PREVENÇÃO DE RECARREGAMENTO ('e.preventDefault()'):
 *    Garante que a página não sofra recarregamento completo durante a submissão,
 *    permitindo validação defensiva 100% no cliente antes de alterar o estado.
 *
 * 4. FEEDBACK DE SUCESSO E RESET DE CAMPOS (FORM-04, FORM-05):
 *    Após cadastrar com sucesso, ativamos o banner de confirmação e redefinimos
 *    os campos para o estado inicial, preparando o formulário para um novo registro.
 * ==============================================================================
 */
function FormularioCadastro({ onCadastrarAtleta }) {
  // 1. Estados dos campos do formulário
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [modalidade, setModalidade] = useState('beach-tennis') // Modalidade padrão per FORM-02

  // 2. Estados de feedback e validação
  const [erros, setErros] = useState({})
  const [mensagemSucesso, setMensagemSucesso] = useState(false)

  // Opções de modalidades esportivas permitidas
  const opcoesModalidades = [
    { id: 'beach-tennis', nome: 'Beach Tennis' },
    { id: 'futevolei', nome: 'Futevôlei' },
    { id: 'volei-praia', nome: 'Vôlei de Praia' }
  ]

  /**
   * Função pura de validação defensiva dos dados
   * @param {Object} dados - Objeto contendo nome, email, telefone e modalidade
   * @returns {Object} Objeto com os erros identificados (vazio se tudo válido)
   */
  const validarCampos = (dados) => {
    const novosErros = {}

    // Validação do Nome: obrigatório e mínimo de 3 caracteres não-espaço
    if (!dados.nome || dados.nome.trim().length < 3) {
      novosErros.nome = 'Informe o nome completo do atleta (mínimo de 3 caracteres).'
    }

    // Validação do E-mail: obrigatório e formato padrão com @ e domínio
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!dados.email || !regexEmail.test(dados.email.trim())) {
      novosErros.email = 'Informe um endereço de e-mail válido (ex: atleta@exemplo.com).'
    }

    // Validação do Telefone: obrigatório e ao menos 10 dígitos numéricos (DDD + número)
    const digitosTelefone = dados.telefone ? dados.telefone.replace(/\D/g, '') : ''
    if (!dados.telefone || digitosTelefone.length < 10) {
      novosErros.telefone = 'Informe um número de telefone com DDD para contato.'
    }

    // Validação da Modalidade: deve ser uma das opções suportadas
    const modalidadesValidas = ['beach-tennis', 'futevolei', 'volei-praia']
    if (!dados.modalidade || !modalidadesValidas.includes(dados.modalidade)) {
      novosErros.modalidade = 'Selecione uma das modalidades esportivas disponíveis.'
    }

    return novosErros
  }

  /**
   * Remove o erro de um campo específico quando o usuário começa a corrigir
   * @param {string} campo - Nome da chave no objeto de erros
   */
  const limparErroCampo = (campo) => {
    if (erros[campo]) {
      setErros((prev) => {
        const atualizados = { ...prev }
        delete atualizados[campo]
        return atualizados
      })
    }
  }

  /**
   * Manipulador da submissão do formulário
   */
  const handleSubmit = (e) => {
    // 1. Prevenção obrigatória do comportamento padrão do navegador
    e.preventDefault()

    // 2. Validação dos dados atuais dos estados
    const dadosFormulario = { nome, email, telefone, modalidade }
    const validacoes = validarCampos(dadosFormulario)

    // Se houver algum erro de validação:
    if (Object.keys(validacoes).length > 0) {
      setErros(validacoes)
      setMensagemSucesso(false)
      return
    }

    // Se válido: limpa erros e aciona cadastro
    setErros({})

    const novoAtleta = {
      id: Date.now().toString(),
      nome: nome.trim(),
      email: email.trim().toLowerCase(),
      telefone: telefone.trim(),
      modalidade,
      dataCadastro: new Date().toLocaleDateString('pt-BR')
    }

    if (onCadastrarAtleta) {
      onCadastrarAtleta(novoAtleta)
    }

    // Exibe banner de sucesso
    setMensagemSucesso(true)

    // Reset automático dos campos de texto (FORM-05)
    setNome('')
    setEmail('')
    setTelefone('')
    setModalidade('beach-tennis')
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

      {/* Banner de Erro Geral quando a validação falhar */}
      {Object.keys(erros).length > 0 && (
        <div className="banner-alerta-erro" role="alert">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <span>Preencha todos os campos obrigatórios corretamente antes de confirmar o cadastro.</span>
        </div>
      )}

      {/* Banner de Confirmação de Sucesso (FORM-04) */}
      {mensagemSucesso && (
        <div className="banner-alerta-sucesso" role="status">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
          <span>Cadastro realizado com sucesso! O atleta foi adicionado à lista da Arena Sunset.</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="formulario-corpo" noValidate>
        {/* Seletor de Modalidade Esportiva em Chips Interativos */}
        <div className="grupo-campo">
          <label className="label-campo">Modalidade Esportiva Preferida *</label>
          <div className="chips-modalidades" role="group" aria-label="Seleção de modalidade esportiva">
            {opcoesModalidades.map((opcao) => (
              <button
                key={opcao.id}
                type="button"
                className={`chip-modalidade ${modalidade === opcao.id ? 'chip-ativo' : ''}`}
                onClick={() => {
                  setModalidade(opcao.id)
                  limparErroCampo('modalidade')
                  setMensagemSucesso(false)
                }}
              >
                {opcao.nome}
              </button>
            ))}
          </div>
          {erros.modalidade && (
            <span className="msg-erro-campo" role="alert">
              {erros.modalidade}
            </span>
          )}
        </div>

        {/* Campo: Nome Completo */}
        <div className="grupo-campo">
          <label htmlFor="campo-nome" className="label-campo">
            Nome Completo *
          </label>
          <input
            id="campo-nome"
            type="text"
            className={`input-campo ${erros.nome ? 'campo-invalido' : ''}`}
            placeholder="Ex: Gabriel Medina da Silva"
            value={nome}
            onChange={(e) => {
              setNome(e.target.value)
              limparErroCampo('nome')
              setMensagemSucesso(false)
            }}
            aria-invalid={!!erros.nome}
            aria-describedby={erros.nome ? 'erro-nome' : undefined}
          />
          {erros.nome && (
            <span id="erro-nome" className="msg-erro-campo" role="alert">
              {erros.nome}
            </span>
          )}
        </div>

        {/* Campo: E-mail */}
        <div className="grupo-campo">
          <label htmlFor="campo-email" className="label-campo">
            E-mail *
          </label>
          <input
            id="campo-email"
            type="email"
            className={`input-campo ${erros.email ? 'campo-invalido' : ''}`}
            placeholder="Ex: atleta@exemplo.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              limparErroCampo('email')
              setMensagemSucesso(false)
            }}
            aria-invalid={!!erros.email}
            aria-describedby={erros.email ? 'erro-email' : undefined}
          />
          {erros.email && (
            <span id="erro-email" className="msg-erro-campo" role="alert">
              {erros.email}
            </span>
          )}
        </div>

        {/* Campo: Telefone */}
        <div className="grupo-campo">
          <label htmlFor="campo-telefone" className="label-campo">
            Telefone *
          </label>
          <input
            id="campo-telefone"
            type="tel"
            className={`input-campo ${erros.telefone ? 'campo-invalido' : ''}`}
            placeholder="Ex: (88) 99876-5432"
            value={telefone}
            onChange={(e) => {
              setTelefone(e.target.value)
              limparErroCampo('telefone')
              setMensagemSucesso(false)
            }}
            aria-invalid={!!erros.telefone}
            aria-describedby={erros.telefone ? 'erro-telefone' : undefined}
          />
          {erros.telefone && (
            <span id="erro-telefone" className="msg-erro-campo" role="alert">
              {erros.telefone}
            </span>
          )}
        </div>

        {/* Botão de Submissão Principal */}
        <button type="submit" className="btn-cadastrar-atleta">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          <span>Cadastrar Atleta</span>
        </button>
      </form>
    </div>
  )
}

export default FormularioCadastro
