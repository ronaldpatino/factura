window.FacturaView = Backbone.View.extend({

    initialize:function () {
        console.log('Initializing Factura View');
        this.template = _.template(tpl.get('factura-template'));
    },

    events:{
    },

    render:function () {
        $(this.el).html(this.template());
        return this;
    }
});