
var AppRouter = Backbone.Router.extend({

    routes:{
        "":"pagina"
    },

    initialize:function () {
        console.log('Incializando APP');
    },

    pagina:function () {


        // Since the home view never changes, we instantiate it and render it only once
        if (!this.paginaView) {
            this.paginaView = new PaginaView({model:Factura});
            this.paginaView.render();
        }

        $('#content').html(this.paginaView.el);
    }

});



tpl.loadTemplates(['pagina-template', 'factura-template','item-factura-template'],
        function () {
            var app = new AppRouter();
            Backbone.history.start();
        });