Ext.define('AntiGuru.view.products.ProductForm', {
    extend: 'Ext.window.Window',
    xtype: 'productform',

    title: 'Карточка товара',
    modal: true,
    width: 400,

    config: {
        record: null // сюда будем передавать выбранный record
    },

    initComponent: function () {
        var me = this;

        me.items = [{
            xtype: 'form',
            reference: 'productForm',
            bodyPadding: 10,
            defaults: { anchor: '100%' },
            items: [
                { xtype: 'displayfield', fieldLabel: 'ID', name: 'id' },
                { xtype: 'displayfield', fieldLabel: 'Наименование', name: 'name' },
                { xtype: 'displayfield', fieldLabel: 'Описание', name: 'description' },
                { xtype: 'numberfield', fieldLabel: 'Цена', name: 'price', minValue: 0 },
                { xtype: 'numberfield', fieldLabel: 'Кол-во', name: 'quantity', minValue: 0, allowDecimals: false }
            ]
        }];

        me.bbar = [
            '->',
            {
                text: 'Сохранить',
                handler: function () {
                    var form = me.down('form').getForm();
                    if (form.isDirty()) {
                        Ext.Msg.alert('Сохранено', 'Данные обновлены');

                        // обновляем record, если передан
                        var rec = me.getRecord();
                        if (rec) {
                            rec.set(form.getValues());
                        }
                    } else {
                        Ext.Msg.alert('Инфо', 'Изменений нет');
                    }
                    me.close();
                }
            },
            {
                text: 'Отмена',
                handler: function () {
                    me.close();
                }
            }
        ];

        me.callParent(arguments);

        // если record передан, загружаем данные в форму
        if (me.getRecord()) {
            me.down('form').getForm().loadRecord(me.getRecord());
        }
    }
});
