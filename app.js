
Ext.application({
    name: 'AntiGuru',



     requires: [
        // 'AntiGuru.view.main.Main',
        'Ext.container.Viewport',
        'Ext.app.Controller',
        // 'Ext.panel.Panel',    
        'Ext.form.Panel',
        'Ext.data.Store',
        'Ext.data.Model',
        // 'Ext.window.MessageBox',
        'Ext.window.Window',
        'Ext.tab.Panel',
        'Ext.grid.Panel',
        'Ext.toolbar.Toolbar',
        // 'Ext.form.field.Text',
        // 'Ext.form.field.Number'
    ],

    launch: function () {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            id: 'mainViewport',  // <-- добавлено
            items: [{ xtype: 'loginform' }]
        });
    }
});
