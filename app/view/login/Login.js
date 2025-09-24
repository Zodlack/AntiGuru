Ext.define('AntiGuru.view.login.Login', {
    extend: 'Ext.form.Panel',
    xtype: 'loginform',

    title: 'Авторизация',
    bodyPadding: 10,
    defaultType: 'textfield',
    items: [
        { fieldLabel: 'Логин', name: 'login', allowBlank: false },
        { fieldLabel: 'Пароль', name: 'password', inputType: 'password', allowBlank: false }
    ],
    buttons: [
        {
            text: 'Вход',
            handler: function (btn) {
                var form = btn.up('form');
                var values = form.getValues();

                if (values.login === 'admin' && values.password === 'padmin') {
                    // Ext.Msg.alert('Успех', 'Добро пожаловать!');

                    // находим viewport по id
                    var vp = Ext.getCmp('mainViewport'); 
                    vp.removeAll();
                    vp.add({ xtype: 'mainview' });

                } else {
                    Ext.Msg.alert('Ошибка', 'Неверный логин или пароль');
                }
            }
        }
    ]
});
