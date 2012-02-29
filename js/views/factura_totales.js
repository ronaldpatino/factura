window.FacturaTotalesView = Backbone.View.extend({

    tagName: "tbody",

    initialize:function () {
        console.log('Initializing FacturaTotales View');
        this.template = _.template(tpl.get('factura-totales-template'));
    },

    events:{
    },

    render:function () {

        $(this.el).html(this.template(this.model.toJSON()));

        return this;
    }
});