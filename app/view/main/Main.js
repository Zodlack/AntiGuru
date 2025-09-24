Ext.define('AntiGuru.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'mainview',


    requires: [
        'Ext.panel.Panel',          // <-- добавляем сюда
        'Ext.toolbar.Toolbar',
        'Ext.tab.Panel',
        'AntiGuru.view.products.Products' // если используешь productsview
    ],


    layout: 'border',

    items: [
        {
            region: 'north',
            xtype: 'toolbar',
            items: [
                {
                    text: 'Товары',
                    handler: function (btn) {
                        var tabPanel = btn.up('mainview').down('tabpanel');
                        tabPanel.add({ xtype: 'productsview', closable: true, title: 'Товары' });
                        tabPanel.setActiveTab(tabPanel.items.length - 1);
                    }
                },
                {
                    text: 'Выход',
                    handler: function (btn) {
                        var vp = btn.up('viewport');
                        vp.removeAll();
                        vp.add({ xtype: 'loginform' });
                    }
                }
            ]
        },
        {
            region: 'center',
            xtype: 'tabpanel',
            items: []
        }
    ]
});
