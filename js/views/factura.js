window.FacturaView = Backbone.View.extend({

    initialize:function () {
        console.log('Initializing Factura View');
        this.template = _.template(tpl.get('factura-template'));
    },


    render:function () {

        var facturaBotonesModel = new FacturaModel({
            "principal_label":'GENERAR',
            "principal_url":'#',
            "principal_activo":'disabled="disabled"',
            "principal_clicked":0,
            "secundario_label":'&larr; Cancelar',
            "secundario_url":'#',
            "secundario_clicked":0
        });

        var itemFacturaListView = new ItemFacturaListView({model:this.model, botones:facturaBotonesModel});
        var facturaTotales = new FacturaTotalesView({model:this.model, botones:facturaBotonesModel});
        var facturaBotones = new FacturaBotonesView({model:this.model, botones:facturaBotonesModel});

        $(this.el).html(this.template());

        $('#factura_detalle', this.el).html(itemFacturaListView.render().el);
        $('#factura_detalle', this.el).append(facturaTotales.render().el);
        $('#factura_botones', this.el).append(facturaBotones.render().el);

        return this;
    }
});