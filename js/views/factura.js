window.FacturaView = Backbone.View.extend({

    initialize:function () {
        console.log('Initializing Factura View');
        this.template = _.template(tpl.get('factura-template'));
    },

    events:{
    },

    render:function () {


        var itemFacturaView = new ItemFacturaView({model:this.model});

        $(this.el).html(this.template());
        $('#factura_detalle', this.el).html(itemFacturaView.render().el);
        return this;
    }
});