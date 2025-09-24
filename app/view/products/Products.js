Ext.define('AntiGuru.view.products.Products', {
    extend: 'Ext.grid.Panel',
    xtype: 'productsview',

    title: 'Список товаров',
    store: { type: 'products' },

    tbar: [
        {
            xtype: 'textfield',
            emptyText: 'Фильтр по ID',
            reference: 'idFilter',
            enableKeyEvents: true,
            listeners: {
                specialkey: function (field, e) {
                    if (e.getKey() === Ext.event.Event.ENTER) {
                        var toolbar = field.up('toolbar');
                        var btn = toolbar.down('#filterBtn');
                        if (btn) {
                            btn.handler(btn);
                        }
                    }
                }
            }
        },
        {
            xtype: 'textfield',
            emptyText: 'Фильтр по описанию',
            reference: 'descFilter',
            enableKeyEvents: true,
            listeners: {
                specialkey: function (field, e) {
                    if (e.getKey() === Ext.event.Event.ENTER) {
                        var toolbar = field.up('toolbar');
                        var btn = toolbar.down('#filterBtn');
                        if (btn) {
                            btn.handler(btn);
                        }
                    }
                }
            }
        },
        {
            xtype: 'button',
            text: 'Применить',
            itemId: 'filterBtn',  // ищем по itemId
            handler: function (btn) {
                var grid = btn.up('grid');
                var store = grid.getStore();

                var idFilter = btn.up('toolbar').down('[reference=idFilter]').getValue();
                var descFilter = btn.up('toolbar').down('[reference=descFilter]').getValue();

                store.clearFilter();
                if (idFilter) {
                    store.addFilter({ property: 'id', value: idFilter, exactMatch: true });
                }
                if (descFilter) {
                    store.addFilter({ property: 'description', value: descFilter, anyMatch: true, caseSensitive: false });
                }
            }
        }
    ],


    columns: [
        { text: 'ID', dataIndex: 'id', flex: 1 },
        { text: 'Имя', dataIndex: 'name', flex: 2 },
        { text: 'Описание', dataIndex: 'description', flex: 3 },
        { text: 'Цена', dataIndex: 'price', flex: 1 },
        {
            text: 'Кол-во', dataIndex: 'quantity', flex: 1,
            renderer: function (val) {
                if (val === 0) {
                    return '<span style="display:block;background-color:red;color:white;padding:2px; width:100%">' + val + '</span>';
                }
                return val;
            }
        }
    ],

    listeners: {
        itemdblclick: function (grid, record) {
            Ext.create('AntiGuru.view.products.ProductForm', {
                record: record
            }).show();
        }
    }

});
