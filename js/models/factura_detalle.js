window.ItemFacturaModel = Backbone.RelationalModel.extend({

    defaults:{
        "cantidad":0,
        "cantidad_devuelta":0,
        "factura_id":0,
        "item_id":1,
        "tipo_item":1,
        "valor_unitario":0,
        "valor_total":0,
        "descripcion":"ITEM NA",
        "dias_renovar":0
    },

    initialize:function () {
        console.log('Creado Modelo Item Factura')
    }

});

window.ItemFacturaCollection = Backbone.Collection.extend({
    model: ItemFacturaModel,

    initialize:function(){
        console.log('Creada ItemFacturaCollection ');
    }

});
