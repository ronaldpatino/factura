window.PaginaView = Backbone.View.extend({


    initialize:function () {
        console.log('Initializing Pagina View');
        this.template = _.template(tpl.get('pagina-template'));
    },

    events:{
    },

    render:function (eventName) {
        var facturaView = new FacturaView();
        $(this.el).html(this.template());
        $('#detalles', this.el).html(facturaView.render().render().el);


        return this;
    }
});