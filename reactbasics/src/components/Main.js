/* eslint-disable class-methods-use-this */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import './Main.css';
// eslint-disable-next-line import/no-duplicates
import { FaPlus } from 'react-icons/fa';
// eslint-disable-next-line import/no-duplicates
import { FaEdit, FaWindowClose } from 'react-icons/fa';

export default class Main extends Component {
  state = {
    novaTarefa: '',
    tarefas: [],
    // eslint-disable-next-line react/no-unused-state
    index: -1,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { tarefas, index } = this.state;
    let { novaTarefa } = this.state;
    novaTarefa = novaTarefa.trim();

    if (tarefas.indexOf(novaTarefa) !== -1) return;
    const novasTarefas = [...tarefas];
    if (index === -1) {
      this.setState({
        tarefas: [...novasTarefas, novaTarefa],
        novaTarefa: '',
      });
    } else {
      novasTarefas[index] = novaTarefa;

      this.setState({
        tarefas: [...novasTarefas],
        index: -1,
      });
    }
  };

  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  };

  handleDelete = (e, index) => {
    const { tarefas } = this.state;
    const novasTarefas = [...tarefas];
    novasTarefas.splice(index, 1);

    this.setState({
      tarefas: [...novasTarefas],
    });
  };

  // eslint-disable-next-line react/no-unused-class-component-methods
  handleEdit = (e, index) => {
    const { tarefas } = this.state;

    this.setState({
      // eslint-disable-next-line react/no-unused-state
      index,
      novaTarefa: tarefas[index],
    });
  };

  render() {
    // eslint-disable-next-line no-unused-vars
    const { novaTarefa, tarefas } = this.state;

    return (
      <div className="main">

        <h1>Lista de tarefas</h1>
        <form action="#" onSubmit={this.handleSubmit} className="form">
          <input onChange={this.handleChange} type="text" value={novaTarefa} />
          <button type="submit">
            <FaPlus />
          </button>
        </form>

        <ul className="tarefas">
          {tarefas.map((item, index) => (
            <li key={item}>
              {item}
              <span>
                <FaEdit className="edit" onClick={(e) => this.handleEdit(e, index)} />
                <FaWindowClose onClick={this.handleDelete} className="delete" />
              </span>
            </li>
          ))}
        </ul>

      </div>
    );
  }
}
