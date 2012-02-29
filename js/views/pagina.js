window.PaginaView = Backbone.View.extend({


    initialize:function () {
        console.log('Initializing Pagina View');
        this.template = _.template(tpl.get('pagina-template'));
    },

    events:{
    },

    render:function (eventName) {
        var itemFacturaModel = new ItemFacturaModel();

        var facturaView = new FacturaView({model:itemFacturaModel});
        $(this.el).html(this.template());
        $('#detalles', this.el).html(facturaView.render().el);

        return this;
    }
});