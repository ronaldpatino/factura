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

        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    },

    calcularValores: function() {

        this.model.set('cantidad_devuelta',this.$('#cantidad_select').val());

        var valor_total =   this.model.get('cantidad_devuelta') *
                            this.model.get('dias_renovar') *
                            this.model.get('valor_unitario');

        this.model.set('valor_total', valor_total);

    }

})