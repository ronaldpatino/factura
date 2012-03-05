window.FacturaBotonesView = Backbone.View.extend({

    events:{
        "click #guardar_factura": "guardarFactura" ,
        "click #imprimir_factura_botones": "imprimirFactura"
    },

    initialize:function () {
        console.log('Initializing Factura Botones View');
        this.template = _.template(tpl.get('factura-botones-template'));
        this.model.bind("change", this.render, this);
    },

    render:function () {
        $(this.el).html(this.template({model:this.model.toJSON()}));
        return this;
    },

    guardarFactura: function () {

        mensaje.notifyBar('Guardando Factura','wait', true, false);
        this.model.guardar();
    },

    imprimirFactura: function()
    {
        mensaje.fancybox('http://localhost/haras/renovacion/comp/imprimir_factura/'+this.model.get('id_factura_creada'));
    }
});