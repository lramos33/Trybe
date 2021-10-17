import React from 'react'

class DataField extends React.Component {
  render() {
    const { state } = this.props

    return (
      <div>
        <h2>Dados enviados</h2>
        <h3>Pessoal</h3>
        <p>Nome: { state.name }</p>
        <p>Email: { state.email }</p>
        <p>CPF: { state.cpf }</p>
        <p>Endereço: { state.address }</p>
        <p>Cidade: { state.city }</p>
        <p>Estado: { state.state }</p>
        <p>Tipo: { state.type }</p>
        <h3>Profissional</h3>
        <p>Resumo do currículo: { state.resume }</p>
        <p>Cargo: { state.position }</p>
        <p>Descrição do cargo: { state.description }</p>
      </div>
    )
  }
}

export default DataField;