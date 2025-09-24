Ext.define('AntiGuru.store.Products', {
    extend: 'Ext.data.Store',
    model: 'AntiGuru.model.Product',
    alias: 'store.products',

    data: [
        { id: 1, name: 'Notebook Lenovo', description: 'ThinkPad T460 14FH...', price: 100, quantity: 2 },
        { id: 2, name: 'Keyboard OKLICK', description: 'Клавиатура OKLICK 140M, USB', price: 50, quantity: 8 },
        { id: 3, name: 'Network adapter', description: 'WiFi D-Link', price: 7, quantity: 0 }
    ]
});
