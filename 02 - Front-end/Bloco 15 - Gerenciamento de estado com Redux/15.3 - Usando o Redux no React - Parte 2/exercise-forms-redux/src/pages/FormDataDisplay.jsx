import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class FormDataDisplay extends Component {
  render() {
    const {
      nome,
      email,
      cpf,
      endereco,
      cidade,
      estado,
      curriculo,
      cargo,
      descricao,
    } = this.props;
    return (
      <div>
        <h2>Dados enviados</h2>
        <div>
          Nome:
          {nome}
        </div>
        <div>
          Email:
          { email }
        </div>
        <div>
          CPF:
          { cpf }
        </div>
        <div>
          Endereço:
          { endereco }
        </div>
        <div>
          Cidade:
          { cidade }
        </div>
        <div>
          Estado:
          { estado }
        </div>
        <div>
          Currículo:
          { curriculo }
        </div>
        <div>
          Cargo:
          { cargo }
        </div>
        <div>
          Descrição do cargo:
          { descricao }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  nome: state.personalForm.nome,
  email: state.personalForm.email,
  cpf: state.personalForm.cpf,
  endereco: state.personalForm.endereco,
  cidade: state.personalForm.cidade,
  estado: state.personalForm.estado,
  curriculo: state.professionalForm.curriculo,
  cargo: state.professionalForm.cargo,
  descricao: state.professionalForm.descricao,
});

FormDataDisplay.propTypes = {
  cargo: PropTypes.string.isRequired,
  cidade: PropTypes.string.isRequired,
  cpf: PropTypes.string.isRequired,
  curriculo: PropTypes.string.isRequired,
  descricao: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  endereco: PropTypes.string.isRequired,
  estado: PropTypes.string.isRequired,
  nome: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(FormDataDisplay);
