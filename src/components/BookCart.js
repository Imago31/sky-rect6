import { useState } from 'react'
import MinMax from './MinMax'

function booksStub() {
  return [
    {
      id: 1,
      title: 'Война и мир - Л.Н.Толстой',
      price: 800,
      rest: 10,
      quantity: 1,
    },
    {
      id: 2,
      title: 'Две жизни - К.Е.Антарова',
      price: 700,
      rest: 5,
      quantity: 1,
    },
    {
      id: 3,
      title: 'Разговор с богом - Н.Д.Уолша',
      price: 1000,
      rest: 2,
      quantity: 1,
    },
    {
      id: 5,
      title: 'Хохот Шамана - В.П.Серкин',
      price: 600,
      rest: 8,
      quantity: 1,
    },
    {
      id: 4,
      title: 'Хроники Ехо - Макс Фрай',
      price: 400,
      rest: 8,
      quantity: 1,
    },
  ]
}
export default function BookCart() {
  const [books, setBooks] = useState(booksStub())

  const setQuantity = (id, quantity) => {
    setBooks(
      books.map((book) => (book.id !== id ? book : { ...book, quantity }))
    )
  }

  return (
    <div className="some">
      <h1>books list</h1>
      <table>
        <tbody>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
          {books.map((book, i) => (
            <tr key={book.id}>
              <td>{i + 1}</td>
              <td>{book.title}</td>
              <td>{book.price}</td>
              <td>
                <MinMax
                  max={book.rest}
                  current={book.quantity}
                  onChange={(quantity) => setQuantity(book.id, quantity)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

/* 
const setquantity = (id, quantity) => {
	const newbooks = [ ...books ];
	const productInd = books.findIndex(book => book.id == id);
	const newProduct = { ...books[productInd] };
	newProduct.quantity = quantity;
	newbooks[productInd] = newProduct;
	setbooks(newbooks);
} */
