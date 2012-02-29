window.PaginaView = Backbone.View.extend({


    initialize:function () {
        console.log('Initializing Pagina View');
        this.template = _.template(tpl.get('pagina-template'));
    },

    events:{
    },

    render:function () {


        var facturaView = new FacturaView({model:this.model});
        $(this.el).html(this.template());
        $('#detalles', this.el).html(facturaView.render().el);

        return this;
    }
});