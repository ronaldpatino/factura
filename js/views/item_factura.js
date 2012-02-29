//Vistas
window.ItemView = Backbone.View.extend({

    tagName:"tr",

    initialize: function()
    {
        console.log('Init ItemView');
        this.template = _.template(tpl.get('item-factura-template'));
    },


    render:function (eventName) {
        $(this.el).html(this.template());
        return this;
    }

})