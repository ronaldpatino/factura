window.FacturaModel = Backbone.RelationalModel.extend({

    defaults:{
        "principal_label":'',
        "principal_url":'',
        "principal_activo":'disabled="disabled"',
        "principal_clicked":0,
        "secundario_label":'',
        "secundario_url":'',
        "secundario_activo":'disabled="disabled"',
        "secundario_clicked":0
    },

    initialize:function () {
        console.log('Creado Modelo Factura Botones');
    }
});