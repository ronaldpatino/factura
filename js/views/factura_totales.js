window.FacturaTotalesView = Backbone.View.extend({

    tagName: "tbody",

    events:{
        "change #descuento" : "calcularDescuento"
    },

    initialize:function () {
        console.log('Initializing FacturaTotales View');
        this.template = _.template(tpl.get('factura-totales-template'));
        this.model.bind("change", this.render, this);
    },

    render:function () {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    },

    calcularDescuento: function () {

/*

        if (this.model.get('subtotal') > 0 &&
            this.model.get('subtotal') > this.model.get('descuento') )
        {
            this.model.set('descuento', this.$('#descuento').val());
            var descuento_ui = this.model.get('subtotal') - this.model.get('descuento');
            this.model.set('descuento_ui', descuento_ui);
        }
        else
        {
            this.$('#descuento').val(0);
        }

*/

    }
});
