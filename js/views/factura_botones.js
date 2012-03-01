window.FacturaBotonesView = Backbone.View.extend({

    initialize:function () {
        console.log('Initializing Factura Botones View');
        this.template = _.template(tpl.get('factura-botones-template'));
    },

    render:function () {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    }

});