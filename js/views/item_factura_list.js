//Vistas
window.ItemFacturaListView = Backbone.View.extend({

    tagName:'tbody',

    initialize: function()
    {
        console.log('Inicializado ItemFacturaListView');
        this.template = _.template(tpl.get('item-factura-template'));
    },


    render:function () {

        _.each(this.model.get('factura_detalle').models, function (item) {
            $(this.el).append(new ItemFacturaView({model:item}).render().el);
        }, this);
        return this;

    }

})