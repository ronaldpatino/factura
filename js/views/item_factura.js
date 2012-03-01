//Vistas
window.ItemFacturaView = Backbone.View.extend({

    tagName:"tr",

    events:{
      "change #cantidad_select" : "calcularValores"
    },

    initialize: function()
    {
        console.log('Init ItemFacturaView');

        this.template = _.template(tpl.get('item-factura-template'));
        this.model.bind("change", this.render, this);
    },


    render:function () {

        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    },

    calcularValores: function() {
        this.getVariablesInterfaz();
        this.calcularSubTotal();
        this.calcularDescuento();
        this.calcularIva();
        this.calcularTotal();
    },

    getVariablesInterfaz: function(){
        this.descuento_interfaz = window.$('#descuento').val();
        this.descuento_tipo_interfaz = window.$('#descuento_tipo').val();
        this.iva_tipo_interfaz = window.$('#iva_tipo').val();
        this.cantidad_devuelta_interfaz = this.$('#cantidad_select').val();
    },

    calcularSubTotal: function(){


        this.model.set('cantidad_devuelta',this.cantidad_devuelta_interfaz);

        var valor_total =   this.model.get('cantidad_devuelta') *
                            this.model.get('dias_renovar') *
                            this.model.get('valor_unitario');

        this.model.set('valor_total', valor_total);

        var subtotal = 0;

        _.each(this.model.get('factura_id').get('factura_detalle').models, function (item) {
            subtotal += item.get('valor_total');
        }, this);

        this.model.get('factura_id').set('subtotal',subtotal);
        this.model.get('factura_id').set('descuento',this.descuento_interfaz);
    },

    calcularDescuento: function(){

        if (this.descuento_tipo_interfaz == 1)
        {
            if (this.model.get('factura_id').get('subtotal') > this.descuento_interfaz)
            {
                var descuento_interfaz = this.descuento_interfaz;
                var descuento_ui = this.model.get('factura_id').get('subtotal') - this.descuento_interfaz;
                this.model.get('factura_id').set('descuento_ui', descuento_ui);
                this.model.get('factura_id').set('descuento_tipo', this.descuento_tipo_interfaz);
                this.model.get('factura_id').set('descuento', this.descuento_interfaz);
            }
            else
            {
                this.model.get('factura_id').set('descuento_ui', this.model.get('factura_id').get('subtotal'));
                this.model.get('factura_id').set('descuento', 0);
            }
        }
        else
        {
            if (this.descuento_interfaz < 100)
            {
                var descuento_porcentaje = (this.model.get('factura_id').get('subtotal') * this.descuento_interfaz)/100;
                var descuento_ui = this.model.get('factura_id').get('subtotal') - descuento_porcentaje;
                this.model.get('factura_id').set('descuento_ui', descuento_ui);
                this.model.get('factura_id').set('descuento_tipo', this.descuento_tipo_interfaz);
                this.model.get('factura_id').set('descuento', this.descuento_interfaz);
            }
            else
            {
                this.model.get('factura_id').set('descuento_ui', this.model.get('factura_id').get('subtotal'));
                this.model.get('factura_id').set('descuento', 0);
            }
        }
    },

    calcularIva: function () {
        if (this.model.get('factura_id').get('subtotal') > 0 ) {
            if (this.iva_tipo_interfaz == 12)
            {
                var valor_iva = this.model.get('factura_id').get('descuento_ui') * 0.12;
                valor_iva = mat.redondear(valor_iva,2);
                this.model.get('factura_id').set('iva_tipo', 12);
            }
            else
            {
                var valor_iva = 0;
                this.model.get('factura_id').set('iva_tipo', 0);
            }

            this.model.get('factura_id').set('iva', valor_iva);

        }
        else
        {
            this.model.get('factura_id').set('iva', 0);
        }
    },

    calcularTotal: function () {
        if (this.model.get('factura_id').get('subtotal') > 0 ) {
            var total_factura = (   this.model.get('factura_id').get('subtotal') -
                                    this.model.get('factura_id').get('descuento')) +
                                    this.model.get('factura_id').get('iva');

            total_factura = mat.redondear(total_factura,2);

            this.model.get('factura_id').set('total', total_factura);
            this.options.botones.set('principal_activo','')
        }
        else
        {

            this.model.get('factura_id').set('total', 0);
            if (this.options.botones.get('principal_cliked') == 0 || this.options.botones.get('principal_activo') === '')
            {
                this.options.botones.set('principal_activo','disabled="disabled"')
            }

        }
    }

})