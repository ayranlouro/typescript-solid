type CartItem = { name: string; price: number };

export class ShoppingCart {
    private readonly _items: CartItem[] = [];
    private orderStatus: 'open' | 'closed' = 'open';

    addItem(item: CartItem): void {
        this._items.push(item);
    }

    removeItem(index: number): void {
        this._items.splice(index, 1);
    }

    get items(): Readonly<CartItem[]> {
        return this._items;
    }

    total(): number {
        return +this._items.reduce((total, next) => total + next.price, 0).toFixed(2);
    }

    checkout(): void {

    }
}

const shoppingCart = new ShoppingCart();

shoppingCart.addItem({ name: 'Camiseta', price: 49.90 })
shoppingCart.addItem({ name: 'Short', price: 25.50 })
shoppingCart.addItem({ name: 'Caderno', price: 10.90 })

console.log(shoppingCart.items);
console.log(shoppingCart.total());