/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
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
      total: 800,
    },
    {
      id: 2,
      title: 'Две жизни - К.Е.Антарова',
      price: 700,
      rest: 5,
      quantity: 1,
      total: 700,
    },
    {
      id: 3,
      title: 'Разговор с богом - Н.Д.Уолша',
      price: 1000,
      rest: 2,
      quantity: 1,
      total: 1000,
    },
    {
      id: 4,
      title: 'Хохот Шамана - В.П.Серкин',
      price: 600,
      rest: 8,
      quantity: 1,
      total: 600,
    },
    {
      id: 5,
      title: 'Хроники Ехо - Макс Фрай',
      price: 400,
      rest: 8,
      quantity: 1,
      total: 400,
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
            <th>Remove</th>
            <th>Total</th> 
          </tr>
          {books.map((book) => (
            <tr>
              <td>{book.id}</td>
              <td>{book.title}</td>
              <td>{book.price}</td>
              <td>
                <MinMax
                  max={book.rest}
                  current={book.quantity}
                  onChange={(quantity) => setQuantity(book.id,quantity)}
                />
              </td>
              <td>{book.quantity * book.price}</td>
            </tr>
          ))}
           <tr><th>Total:{books.reduce((acc,book) =>acc + book.price*book.quantity,0)}</th></tr>
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
