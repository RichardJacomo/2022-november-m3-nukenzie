import { Card } from "./card";

export const List = ({ listTransactions, deleteItem }) => {
  //List recebe por props a lista de transações e a função que filtra transações após exclusão
  return (
    <>
      {listTransactions.map((transaction, index) => (
        <Card
          transaction={transaction} //List envia transação individual para Card
          listTransactions={listTransactions} //List envia todas as transações juntas para Card
          deleteItem={deleteItem} //List envia função delete para Card através de props
          key={index} //List envia index do map como props para Card
        />
      ))}
    </>
  );
};

//Obs: Card é o componente que renderiza as LIs com as informações das transações
