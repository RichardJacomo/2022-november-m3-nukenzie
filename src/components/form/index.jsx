import "./style.css";
import { useState } from "react";

export const Form = ({
  listTransactions,
  setListTransactions,
  setFilterList,
}) => {
  //state por props que trazem a lista das transações
  const [userInputDescription, setUserInputDescription] = useState(""); //state que é alterado pelo input de descrição da transação
  const [userInputValue, setUserInputValue] = useState(""); //state que é alterado pelo input de valor da transação
  const [userSelect, setUserSelect] = useState("entrada"); //state que é alterado pelo select de entrada ou saída da transação

  const sendSubmit = () => {
    //função que pega a função do state e incrementa com os valores adicionados pelo usuário através dos inuts e select
    setListTransactions([
      ...listTransactions,
      {
        description: userInputDescription,
        type: userSelect,
        value: userInputValue,
      },
    ]);
    setUserInputDescription(""); //após atualização dos valores do state da transação, os inputs são limpados para novas entradas
    setUserInputValue("");
    setFilterList("todos");
  };

  return (
    //return do Form que renderiza o formulário
    <form className="form" onSubmit={(event) => event.preventDefault()}>
      <label htmlFor="description">Descrição</label>
      <input
        type="text"
        placeholder="Digite aqui sua descrição"
        id="description"
        value={userInputDescription}
        onChange={(event) => setUserInputDescription(event.target.value)} //evento onChange captura value do input e atualiza o state
      />
      <p className="sugestion">Ex: Compra de roupas</p>
      <div className="row">
        <div className="col">
          <label htmlFor="value">Valor</label>
          <input
            className="input-value"
            type="text"
            placeholder="1"
            id="value"
            value={userInputValue}
            onChange={(event) => setUserInputValue(event.target.value)} //evento onChange captura value do input e atualiza o state
          />
          <p className="rs">R$</p>
        </div>
        <div className="col">
          <label htmlFor="value-type">Tipo de valor</label>
          <select
            className="select-entries"
            name="value-type"
            id="value-type"
            value={userSelect}
            onChange={(event) => setUserSelect(event.target.value)} //evento onChange captura value do select e atualiza o state
          >
            <option value="entrada">Entrada</option>
            <option value="saída">Saída</option>
          </select>
        </div>
      </div>
      <button className="button-send" onClick={sendSubmit} type="submit">
        Inserir Valor
      </button>
    </form>
  );
};
//por fim o button-send chama a função que atualiza o state de transação com os valores adicionados pelo usuário através dos inputs e select
