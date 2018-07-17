import React, { Component } from 'react'

class Body extends Component {
  render() {
    return (
      <div>
        <section id="#formacao">
          <h3>Formação</h3>
          <p>Formado como Analisa em desenvolvimento de sistema na UNIP de Sorocaba, SP.</p>
        </section>
        <section id='#projetos'>
          <h3>Projetos</h3>
          <p> Portifoli desenvolvido em ReactJs + Firebase <a href="">https://github.com/MarcioRamos90/Curriculo</a></p>
          <p> Clone AirBnB com AdonisJS, React Native e ReactJS <a href="">https://github.com/MarcioRamos90/airbnb-adonis-reactjs-react-native-</a></p>
        </section>
        <section id='#cursos'>
          <h3>Cursos</h3>
          <p><strong>Ful Stack:</strong> Com a Rocketseat por 6 semanas</p>
        </section>
        <section id="#trabalhos">
          <h3>Trabalhos</h3>
          <div>
            <h5>Inforaware Informática</h5>
            <p>De Julho de 2014 à Janeiro de 2018</p>
            <p>Suporte técnico para usuarios de sistema ERP. Ajudacom emissão de nota fiscal, abertura de chamado para melhorias.Analise com cliente para melhorias no sistema.</p>
          </div>
          <div>
            <h5>Inforaware Informática</h5>
            <p>De Julho de 2014 à Janeiro de 2018</p>
            <p>Suporte técnico para usuarios de sistema ERP. Ajudacom emissão de nota fiscal, abertura de chamado para melhorias.Analise com cliente para melhorias no sistema.</p>
          </div>
        </section>
      </div>
    )
  }
}

export default Body