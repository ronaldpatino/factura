//Vistas
window.ItemFacturaListView = Backbone.View.extend({

    tagName:'tr',

    initialize: function()
    {
        console.log('Inicializado ItemFacturaListView');
        this.template = _.template(tpl.get('item-factura-template'));
    },


    render:function () {

        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    }

})