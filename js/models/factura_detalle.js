window.ItemFacturaModel = Backbone.Model.extend({

    defaults:{
        descripcion:"N/A",
        cantidad_alquilada:10,
        cantidad:0,
        cantidad_devolver:0,
        dias_renovar:1,
        valor_unitario:10,
        valor_total:0
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
