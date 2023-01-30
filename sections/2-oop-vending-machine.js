class VendingMachine {
    #credit = 0;
    #stock = {
        A : {},
        B : {},
        C : {},
    };

    get credit() {
        return this.#credit;
    }

    get stock() {
        return this.#stock;
    }

    addStock(item, row) {
        this.stock[row] = item;
    }

    addCredit(credit) {
        this.#credit += credit;
    }

    purchaseItem(row) {
        const item = this.#stock[row];

        if (this.#credit < item.price) return 'Insufficient credit!';

        this.#credit -= item.price;
        item.quantity -= 1;
        return item.name;
    }
}

module.exports = VendingMachine;
