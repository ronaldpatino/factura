//Vistas
window.ItemFacturaView = Backbone.View.extend({

    tagName:"tr",

    events:{
      "change #cantidad_select" : "calcularValores"
    },

    initialize: function()
    {
        console.log('Init ItemFacturaView');

        this.template = _.template(tpl.get('item-factura-template'));
        //cuando el modelo cambia, actualizo la vista
        this.model.bind("change", this.render, this);

    },


    render:function () {
        $(this.el).html(this.template(this.model.get('factura_detalle').at(this.options.indice).toJSON()));
        return this;
    },

    calcularValores: function() {



        this.model.get('factura_detalle').at(this.options.indice).set('cantidad_devuelta',this.$('#cantidad_select').val());

        var valor_total =   this.model.get('factura_detalle').at(this.options.indice).get('cantidad_devuelta') *
                            this.model.get('factura_detalle').at(this.options.indice).get('dias_renovar') *
                            this.model.get('factura_detalle').at(this.options.indice).get('valor_unitario');

        this.model.get('factura_detalle').at(this.options.indice).set('valor_total', valor_total);

    }

})