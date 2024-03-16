import './App.css';
import PropTypes from 'prop-types'

function Customer({name, address}) {
  return (
      <>
          <div className='item'>Name: {name}</div>
          <div>Address: {address}</div>
      </>
  )
}

Customer.propTypes = {
  name: PropTypes.string,
  address: PropTypes.string.isRequired
}

function App() {
  const data = [
    {name: 'Name 1', address: 'Address 1'},
    {name: 'Name 2', address: 'Address 2'},
    {name: 'Name 3'},
  ]
  return (
    <>
      {
        data.map((element,index) => <Customer key={index} {...element} />)
      }
    </>
  );
}

export default App;
