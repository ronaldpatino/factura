window.FacturaTotalesView = Backbone.View.extend({

    tagName: "tbody",

    events:{
        "change #descuento"         : "calcularValores",
        "change #descuento_tipo"    : "calcularValores",
        "change #iva_tipo"          : "calcularValores"

    },

    initialize:function () {
        console.log('Initializing FacturaTotales View');
        this.template = _.template(tpl.get('factura-totales-template'));
        this.model.bind("change", this.render, this);
    },

    render:function () {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    },

    calcularValores: function() {
        this.getVariablesInterfaz();
        this.calcularDescuento();
        this.calcularIva();
        this.calcularTotal();
    },

    getVariablesInterfaz: function(){
        this.descuento_interfaz = this.$('#descuento').val();
        this.descuento_tipo_interfaz = this.$('#descuento_tipo').val();
        this.iva_tipo_interfaz = this.$('#iva_tipo').val();
    },

    calcularDescuento: function(){


        if (this.descuento_tipo_interfaz == 1)
        {
            if (this.model.get('subtotal') > this.descuento_interfaz)
            {
                var descuento_interfaz = this.descuento_interfaz;
                var descuento_calculado = this.model.get('subtotal') - descuento_interfaz;
                descuento_calculado = mat.redondear(descuento_calculado,2);
                this.model.set('descuento_ui', descuento_calculado);
                this.model.set('descuento_tipo', this.descuento_tipo_interfaz);
                this.model.set('descuento', this.descuento_interfaz);
            }
            else
            {
                this.model.set('descuento_ui', this.model.get('subtotal'));
                this.model.set('descuento', 0);
            }
        }
        else
        {
            if (this.descuento_interfaz < 100)
            {
                var descuento_porcentaje = (this.model.get('subtotal') * this.descuento_interfaz)/100;
                var descuento_calculado = this.model.get('subtotal') - descuento_porcentaje;
                descuento_calculado = mat.redondear(descuento_calculado,2);
                this.model.set('descuento_ui', descuento_calculado);
                this.model.set('descuento_tipo', this.descuento_tipo_interfaz);
                this.model.set('descuento', this.descuento_interfaz);
            }
            else
            {
                this.model.set('descuento_ui', this.model.get('subtotal'));
                this.model.set('descuento', 0);
            }
        }
    },

    calcularIva: function () {
        if (this.model.get('subtotal') > 0 ) {
            if (this.iva_tipo_interfaz == 12)
            {
                var valor_iva = this.model.get('descuento_ui') * 0.12;
                valor_iva = mat.redondear(valor_iva,2);
                this.model.set('iva_tipo', 12);
            }
            else
            {
                var valor_iva = 0;
                this.model.set('iva_tipo', 0);
            }

            this.model.set('iva', valor_iva);

        }
        else
        {
            this.model.set('iva', 0);
        }
    },

    calcularTotal: function () {
        if (this.model.get('subtotal') > 0 ) {

            var total_factura = ( this.model.get('descuento_ui')) +    this.model.get('iva');

            total_factura = mat.redondear(total_factura,2);

            this.model.set('total', total_factura);

        }
        else
        {
            this.model.set('total', 0);
        }
    }


});
