window.FacturaModel = Backbone.RelationalModel.extend({

    url: 'http://localhost/haras/renovacion/api/guardar/',

    relations: [{
        type: Backbone.HasMany,
        key: 'factura_detalle',
        relatedModel: 'ItemFacturaModel',
        collectionType: 'ItemFacturaCollection',
        reverseRelation: {
            key: 'factura_id'
        }
    }],

    defaults:{
        "id":1,
        "cliente_id":0,
        "descuento":0,
        "descuento_ui":0,
        "descuento_tipo":1,
        "dias_alquiler":5,
        "fecha_inicio":"2012-01-01 12:00:00",
        "iva":0,
        "iva_tipo":12,
        "estado":"CERRADA",
        "numero":123,
        "proyecto":"BACKBONE",
        "referencia":0,
        "subtotal":0,
        "total":0,
        "transporte":0,
        "tipo":"ALQ",
        "factura_detalle": [],
        "botones_guardar":'',
        "botones_imprimir":'style="display:none;"',
        "boton_cliked":0,
        "boton_activo":'disabled="disabled"',
        "id_factura_creada":0

    },

    initialize:function () {
        console.log('Creado Modelo Factura');
    },

    guardar: function(){

        var self = this;

        var options = {
            success: function(model, resp, xhr) {

                var respuesta = JSON.parse(xhr.responseText)
                //Let the user know we were able to save in the db
                mensaje.notifyBar('Factura Guardada', 'success', false);
                //Hide save buttons
                self.set('botones_guardar','style="display:none;');
                //Show print buttons
                self.set('botones_imprimir','');

                self.set('id_factura_creada', respuesta.id);
            },

            error: function(model, resp, xhr) {
                mensaje.notifyBar('Error Guardando Factura', 'error', false, true);
            }
        }

        return Backbone.sync('create', this, options);

    }


});