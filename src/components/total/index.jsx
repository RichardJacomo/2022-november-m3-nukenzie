import "./style.css";

export const TotalMoney = ({ listTransactions }) => {
  //componente que renderiza valor total das transações
  const allValues = listTransactions.map((e) => {
    //map com ternário que passa string para number e adiciona um (-) para os valores das transações de saída
    return e.type === "entrada" ? Number(e.value) : Number(-e.value);
  });
  const some = allValues.reduce((previous, actual) => {
    //reduce que realiza a soma de todos os valores, obtendo o valor total considerando as saídas
    return previous + actual;
  }, 0);
  return (
    <>
      {some !== 0 ? ( //card com a informação do valor total somente é renderizado se o valor total for diferente de 0
        <div className="div-total">
          <div className="div-total-value">
            <h2>Valor total:</h2>
            <h3>R$ {some}</h3>
          </div>
          <p className="advice">O valor se refere ao saldo</p>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};
