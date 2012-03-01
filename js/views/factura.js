window.FacturaView = Backbone.View.extend({

    initialize:function () {
        console.log('Initializing Factura View');
        this.template = _.template(tpl.get('factura-template'));
    },


    render:function () {


        var itemFacturaListView = new ItemFacturaListView({model:this.model});
        var facturaTotales = new FacturaTotalesView({model:this.model});
        var facturaBotones = new FacturaBotonesView({model:this.model});
        $(this.el).html(this.template());

        $('#factura_detalle', this.el).html(itemFacturaListView.render().el);
        $('#factura_detalle', this.el).append(facturaTotales.render().el);
        $('#factura_botones', this.el).append(facturaBotones.render().el);

        return this;
    }
});