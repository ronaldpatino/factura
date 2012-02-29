window.ItemFacturaModel = Backbone.Model.extend({

    defaults:{
        descripcion:"N/A",
        cantidad_alquilada:0,
        cantidad:10,
        cantidad_devolver:0,
        dias_renovar:1,
        valor_unitario:0,
        valor_total:0,
        descuento:0,
        descuento_tipo:0,
        iva_tipo:12
    },

    initialize:function () {
        console.log('Creado Modelo Item Factura')
    }

});