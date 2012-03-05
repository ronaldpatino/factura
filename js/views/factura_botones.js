window.FacturaBotonesView = Backbone.View.extend({

    events:{
        "click #guardar_factura": "guardarFactura"
    },

    initialize:function () {
        console.log('Initializing Factura Botones View');
        this.template = _.template(tpl.get('factura-botones-template'));
        this.options.botones.bind("change", this.render, this);
    },

    render:function () {
        $(this.el).html(this.template({model:this.model.toJSON(),botones: this.options.botones}));
        return this;
    },

    guardarFactura: function () {

        mensaje.notifyBar('Guardando Factura','wait', true, false);

        this.options.botones.set('principal_label','CHANGOS');
        this.options.botones.set('secundario_label','Imprimir');
        this.options.botones.set('principal_clicked',1);
        this.model.guardar();
    }
});