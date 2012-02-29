window.FacturaView = Backbone.View.extend({

    initialize:function () {
        console.log('Initializing Factura View');
        this.template = _.template(tpl.get('factura-template'));
    },

    events:{
    },

    render:function () {


        //var itemFacturaCollection = new ItemFacturaCollection(this.model.get('factura_detalle'));

        //var itemFacturaListView = new ItemFacturaListView({model:itemFacturaCollection});

        var itemFacturaListView = new ItemFacturaListView({model:this.model});
        var facturaTotales = new FacturaTotalesView({model:this.model});

        $(this.el).html(this.template());

        $('#factura_detalle', this.el).html(itemFacturaListView.render().el);
        $('#factura_detalle', this.el).append(facturaTotales.render().el);

        return this;
    }
});