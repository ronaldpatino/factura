//Vistas
window.ItemFacturaListView = Backbone.View.extend({

    tagName:'tr',

    initialize: function()
    {
        console.log('Inicializado ItemFacturaListView');
        this.template = _.template(tpl.get('item-factura-template'));
    },


    render:function () {

        //$(this.el).html(this.template(this.model.toJSON()));
        _.each(this.model.models, function (item) {
            $(this.el).append(new ItemFacturaView({model:item}).render().el);
        }, this);
        return this;
        return this;
    }

})