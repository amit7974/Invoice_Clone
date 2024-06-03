document.addEventListener('DOMContentLoaded', function() {
    const invoiceData = {
        customerName: "Amit Kumar",
        customerAddress: "123 Main St, Anytown, USA",
        invoiceNumber: "INV-12345678",
        invoiceDate: "2024-06-01",
        items: [
            { name: "Item 1", quantity: 2, price: 25.00 },
            { name: "Item 2", quantity: 1, price: 15.00 },
            { name: "Item 3", quantity: 3, price: 10.00 }
        ]
    };

    document.getElementById('customer-name').textContent = invoiceData.customerName;
    document.getElementById('customer-address').textContent = invoiceData.customerAddress;
    document.getElementById('invoice-number').textContent = invoiceData.invoiceNumber;
    document.getElementById('invoice-date').textContent = invoiceData.invoiceDate;

    const invoiceItemsElement = document.getElementById('invoice-items');
    let totalAmount = 0;

    invoiceData.items.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.quantity}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td>$${(item.quantity * item.price).toFixed(2)}</td>
        `;
        invoiceItemsElement.appendChild(row);
        totalAmount += item.quantity * item.price;
    });

    document.getElementById('invoice-total').textContent = totalAmount.toFixed(2);
});
