

var ItemFacturaCollection = new ItemFacturaCollection([{descripcion:"ITEM 1", cantidad_alquilada:5,cantidad:0,cantidad_devolver:0,dias_renovar:1,valor_unitario:11,valor_total:0,tipo:1},{  descripcion:"ITEM 2",cantidad_alquilada:10,cantidad:0,cantidad_devolver:0,dias_renovar:1,valor_unitario:5,valor_total:0,tipo:1}]);

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
            this.paginaView = new PaginaView({model:ItemFacturaCollection});
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