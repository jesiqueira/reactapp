const luana = {
  cliente: 'Luana',
  idade: 28,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};
const mario = {
  cliente: 'Mario',
  idade: 28,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};

// Exercicio
const produtos = [
  {
    id: 1,
    nome: 'Smartphone',
    preco: 'R$ 2000',
    cores: ['#29d8d5', '#252a34', '#fc3766'],
  },
  {
    id: 2,
    nome: 'Notebook',
    preco: 'R$ 3000',
    cores: ['#ffd045', '#d4394b', '#f37c59'],
  },
  {
    id: 3,
    nome: 'Tablet',
    preco: 'R$ 1500',
    cores: ['#365069', '#47c1c8', '#f95786'],
  },
];
const App = () => {
  const dados = mario;

  const total = dados.compras
    .map((item) => +item.preco.replace('R$ ', ''))
    .reduce((a, b) => a + b);
  const produto = ['Notebook', 'Tablet', 'Smartphone'];

  const dadosProduto = produtos.filter((produto) => +produto.preco.replace('R$ ', '') > 1500);

  return (
    <>
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p>
        Situação:{' '}
        <span style={{ color: dados.ativa ? 'green' : 'red' }}>
          {' '}
          {dados.ativa ? 'Ativa' : 'Inativo'}
        </span>
      </p>
      <p>Total: R$ {total}</p>
      {total > 10000 && <p>Você está gastando muito!</p>}

      <ul>
        {produto.map((filme) => (
          <li key={filme}>{filme}</li>
        ))}
      </ul>

      <p>---------Exercício-----------</p>

      <ul>
        {dadosProduto.map((produto) => (
          <li key={produto.id}>
            <h1>{produto.nome}</h1>
            <h3>Preço: {produto.preco}</h3>
            <ul>
              {produto.cores.map((cor) => (
                <li key={cor}>
                  <p style={{ background: cor, color: '#fff' }}>{cor}</p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
