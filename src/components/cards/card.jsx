import "./style.css";
import iconDelete from "../../img/delete.png"; //importação da imagem da lixeira

export const Card = ({ transaction, deleteItem }) => {
  //Card recebe por props de List transação individual e função que filtra transações após exclusão (função deleteItem foi criada no App.jsx)
  return (
    <>
      {transaction.type === "entrada" ? ( //ternário que verifica o tipo da transação para alterar a corda da LI de acordo com seu tipo (entrada:verde ou saída:cinza)
        <li className="li-green">
          <div>
            <h2 className="description">{transaction.description}</h2>
            <p className="type">{transaction.type}</p>
          </div>
          <div className="div-value">
            <p className="value">R$ {transaction.value}</p>
            <button
              className="button-delete"
              onClick={() => deleteItem(transaction)} //botão delete que repassa sua transação como argumento para função que filtra as transações, fazendo com que essa transação desapareça da tela
            >
              <img src={iconDelete} alt="" />
            </button>
          </div>
        </li>
      ) : (
        <li className="li-grey">
          <div>
            <h2 className="description">{transaction.description}</h2>
            <p className="type">{transaction.type}</p>
          </div>
          <div className="div-value">
            <p className="value">R$ {transaction.value}</p>
            <button
              className="button-delete"
              onClick={() => deleteItem(transaction)}
            >
              <img src={iconDelete} alt="" />
            </button>
          </div>
        </li>
      )}
    </>
  );
};
