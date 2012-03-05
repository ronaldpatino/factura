window.FacturaView = Backbone.View.extend({

    initialize:function () {
        console.log('Initializing Factura View');
        this.template = _.template(tpl.get('factura-template'));
    },


    render:function () {



        var itemFacturaListView = new ItemFacturaListView({model:this.model});
        var facturaTotalesView = new FacturaTotalesView({model:this.model});
        var facturaBotonesView = new FacturaBotonesView({model:this.model});
        var facturaDiasView = new FacturaDiasView({model:this.model});

        $(this.el).html(this.template());

        $('#factura_detalle', this.el).html(itemFacturaListView.render().el);
        $('#factura_detalle', this.el).append(facturaTotalesView.render().el);
        $('#factura_botones', this.el).append(facturaBotonesView.render().el);
        $('#factura_dias', this.el).append(facturaDiasView.render().el);

        return this;
    }
});