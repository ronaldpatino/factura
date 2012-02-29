window.FacturaModel = Backbone.Model.extend({

    defaults:{
        "id":1,
        "cliente_id":0,
        "descuento":0,
        "descuento_tipo":1,
        "dias_alquiler":5,
        "fecha_inicio":"2012-01-01 12:00:00",
        "iva":12,
        "estado":"CERRADA",
        "numero":123,
        "proyecto":"BACKBONE",
        "referencia":0,
        "total":0,
        "transporte":0,
        "tipo":"ALQ",
        "factura_detalle": []
    },

    initialize:function () {
        console.log('Creado Modelo Factura')
    }

});