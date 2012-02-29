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
        this.model.bind("change", this.render, this);
    },


    render:function () {

        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    },

    calcularValores: function() {
        this.calcularSubTotal();
        this.calcularDescuento();

    },

    calcularSubTotal: function(){
        this.model.set('cantidad_devuelta',this.$('#cantidad_select').val());

        var valor_total =   this.model.get('cantidad_devuelta') *
            this.model.get('dias_renovar') *
            this.model.get('valor_unitario');

        this.model.set('valor_total', valor_total);

        var subtotal = 0;

        _.each(this.model.get('factura_id').get('factura_detalle').models, function (item) {
            subtotal += item.get('valor_total');
        }, this);

        this.model.get('factura_id').set('subtotal',subtotal);
    },

    calcularDescuento: function(){

        var descuento_interfaz = window.$('#descuento').val();
        alert(descuento_interfaz);
        var descuento_ui = this.model.get('factura_id').get('subtotal') - descuento_interfaz;

        this.model.set('descuento_ui', descuento_ui);


    }

})