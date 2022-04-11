class Client {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    if (value.length < 3) {
      throw new Error('Name must be at least 3 characters long');
    }
    this._name = value;
  }
}

class OrderItem {
  private _name: string;
  private _price: number;

  constructor(name: string, price: number) {
    this._name = name;
    this._price = price;
  }

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    if (value.length < 3) {
      throw new Error('Name must be at least 3 characters long');
    }
    this._name = value;
  }

  public get price(): number {
    return this._price;
  }

  public set price(value: number) {
    if (value < 0) {
      throw new Error('Price must be positive');
    }
    this._price = value;
  }
}

class Order {
  private _client: Client;
  private _items: OrderItem[];
  private _paymentMethod: string;
  private _discount: number;

  constructor(client: Client, items: OrderItem[], paymentMethod: string, discount: number) {
    this._client = client;
    this._items = items;
    this._paymentMethod = paymentMethod;
    this._discount = discount;
  }

  get client(): Client {
    return this._client;
  }

  set client(value: Client) {
    this._client = value;
  }

  get items(): OrderItem[] {
    return this._items;
  }

  set items(value: OrderItem[]) {
    if (value.length === 0) {
      throw new Error('Order must have at least one item');
    }
    this._items = value;
  }

  get paymentMethod(): string {
    return this._paymentMethod;
  }

  set paymentMethod(value: string) {
    this._paymentMethod = value;
  }

  get discount(): number {
    return this._discount;
  }

  set discount(value: number) {
    if (value < 0) {
      throw new Error('Discount must be positive');
    }

    this._discount = value;
  }

  bill(): number {
    return this._items
      .reduce((previousValue, item) => {
        const total = previousValue += item.price;
        return total;
      }, 0);
  }

  billWithDiscount(): number {
    return this.bill() * (1 - this.discount);
  }
}

// Testes

const client = new Client('João');

const sandwich = new OrderItem('Sanduíche Natural', 5.00);
const juice = new OrderItem('Suco de Abacaxi', 5.00);
const dessert = new OrderItem('Gelatina de Uva', 2.50);

const order = new Order(client, [sandwich, juice, dessert], 'dinheiro', 0.10);

console.log(order);
console.log('Valor normal: ', order.bill());
console.log('Valor com desconto: ', order.billWithDiscount()); 