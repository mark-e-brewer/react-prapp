import ListGroup from './components/ListGroup';

const App = () => {
  let items = ['new york', 'tokyo', 'london', 'paris'];
  return <div><ListGroup items={items} heading="cities"/></div>;
}

export default App;
