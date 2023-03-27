import { Order } from '../../types/Order';
import { OrdersBoard } from '../OrdersBoard';
import { Container } from './styles';

const orders: Array<Order> = [
  {
    '_id': '6421bcd0bd1301d89f8ec496',
    'table': '123',
    'status': 'WAITING',
    'products': [
      {
        'product': {
          'name': 'Pizza quatro queijos',
          'imagePath': '1679762457289-quatro-queijos.png',
          'price': 40,
        },
        'quantity': 3,
        '_id': '6421bcd0bd1301d89f8ec497'
      },
      {
        'product': {
          'name': 'Coca cola',
          'imagePath': '1679757217533-coca-cola.png',
          'price': 7,
        },
        'quantity': 2,
        '_id': '6421bcd0bd1301d89f8ec498'
      }
    ],
  }
];

export function Orders() {
  return (
    <Container>
      <OrdersBoard
        icon="🕒"
        title="Fila de espera"
        orders={orders}
      />
      <OrdersBoard
        icon="👨‍🍳"
        title="Em preparação"
        orders={[]}
      />
      <OrdersBoard
        icon="✅"
        title="Pronto!"
        orders={[]}
      />
    </Container>
  );
}
