import "./App.css";
import { useState } from "react";
import { Form } from "./components/form";
import { List } from "./components/cards";
import { TotalMoney } from "./components/total";
import bg from "./img/bg.png"; //importação da imagem de background da landing page

const App = () => {
  const [listTransactions, setListTransactions] = useState([]); //state com todas as transações
  const [listTransactionsIn, setListTransactionsIn] = useState([]); //state com as transações de entradas
  const [listTransactionsOut, setListTransactionsOut] = useState([]); //state com as transações de saída
  const [filterList, setFilterList] = useState(""); //state do filtro de categoria
  const [isLoggedIn, setIsLoggedIn] = useState(false); //state usado para trocar de páginas(landing page e dashboard)

  function login() {
    //função que é chamada pelo botão na landing page que altera o state de troca de páginas
    setIsLoggedIn(true);
  }
  function logout() {
    //função que é chamada pelo botão logout na dashboard que altera o state de troca de páginas
    setIsLoggedIn(false);
  }

  function deleteItem(value) {
    //função que filtra as transações de acordo com o argumento repassado pelo botão delete na card.jsx
    const filtered = listTransactions.filter((e) => e !== value); //filtra todas as transações diferentes da transação repassada pelo botão delete
    setListTransactions(filtered);
    setListTransactionsIn(filtered);
    setListTransactionsOut(filtered);
    setFilterList("todos");
  }

  function entryFilter() {
    //função que filtra transações do tipo entrada e atualiza o state das entradas e do filtro de categorias
    const entry = listTransactions.filter((e) => e.type === "entrada");
    setListTransactionsIn(entry);
    setFilterList("entrada");
  }
  function outFilter() {
    //função que filtra transações do tipo saída e atualiza o state das saídas e do filtro de categorias
    const out = listTransactions.filter((e) => e.type === "saída");
    setListTransactionsOut(out);
    setFilterList("saída");
  }
  function allFilter() {
    //função que filtra transações do tipo todos e atualiza o state global das transações e do filtro de categorias
    setListTransactions(listTransactions);
    setFilterList("todos");
  }

  return (
    <>
      {isLoggedIn === false ? ( //ternário que renderiza landing page ou dashboard de acordo com o valor do state
        <main>
          <figure>
            <img className="img-bg" src={bg} alt="" />
          </figure>
          <section className="section-presentation">
            <div className="div-content">
              <h3 className="title">
                <span>Nu</span> Kenzie
              </h3>
              <h1 className="description-text">
                Centralize o controle das suas finanças
              </h1>
              <p className="advice-text">de forma rápida e segura</p>
              <button className="login" onClick={() => login()}>
                Iniciar
              </button>
            </div>
            <div className="space"></div>
          </section>
        </main>
      ) : (
        <div className="container">
          <header className="header">
            <div className="nav-menu">
              <h1 className="logo">
                <span>Nu</span> Kenzie
              </h1>
              <button onClick={() => logout()} className="button-home">
                Início
              </button>
            </div>
          </header>
          <main className="main-content">
            <div className="App">
              <div className="form-and-total">
                <Form
                  listTransactions={listTransactions}
                  setListTransactions={setListTransactions}
                  setFilterList={setFilterList}
                />
                <TotalMoney listTransactions={listTransactions} />
              </div>
              <ul className="ul">
                <div className="filter-menu">
                  <h3 className="h3-filter-menu">Resumo Financeiro</h3>
                  <div className="div-buttons-filter">
                    <button
                      onClick={() => allFilter()}
                      className={`${
                        filterList === "todos"
                          ? "button-pressed"
                          : "button-filter"
                      }`}
                    >
                      Todos
                    </button>
                    <button
                      className={`${
                        filterList === "entrada"
                          ? "button-pressed"
                          : "button-filter"
                      }`}
                      onClick={() => entryFilter()}
                    >
                      Entradas
                    </button>
                    <button
                      onClick={() => outFilter()}
                      className={`${
                        filterList === "saída"
                          ? "button-pressed"
                          : "button-filter"
                      }`}
                    >
                      Despesas
                    </button>
                  </div>
                </div>
                {filterList === "entrada" ? (
                  <List
                    listTransactions={listTransactionsIn}
                    setListTransactionsIn={setListTransactionsIn}
                    deleteItem={deleteItem}
                  />
                ) : filterList === "saída" ? (
                  <List
                    listTransactions={listTransactionsOut}
                    setListTransactions={setListTransactions}
                    deleteItem={deleteItem}
                  />
                ) : filterList === "todos" ? (
                  <List
                    listTransactions={listTransactions}
                    setListTransactions={setListTransactions}
                    deleteItem={deleteItem}
                  />
                ) : (
                  ""
                )}
              </ul>
            </div>
          </main>
        </div>
      )}
    </>
  );
};

export default App;
