window.FacturaDiasView = Backbone.View.extend({

    events:{
        "change #numero_dias_renovar": "calcularValores"
    },


    initialize:function () {
        console.log('Initializing Factura Dias View');

        this.template = _.template(tpl.get('factura-dias-template'));
        this.model.bind("change", this.render, this);
    },

    render:function () {
        $(this.el).html(this.template({model:this.model.toJSON()}));
        return this;
    },

    calcularValores: function() {

        this.getVariablesInterfaz();
        this.cambiarDias();
        this.calcularSubTotal();
        this.calcularDescuento();
        this.calcularIva();
        this.calcularTotal();
    },

    getVariablesInterfaz: function(){
        this.dias_renovar = this.$('#numero_dias_renovar').val();
        this.descuento_interfaz = window.$('#descuento').val();
        this.descuento_tipo_interfaz = window.$('#descuento_tipo').val();
        this.iva_tipo_interfaz = window.$('#iva_tipo').val();
    },

    calcularSubTotal: function(){

        console.log('calculamos SUBTOTAL en FacturaDiasView')
        var subtotal = 0;

        _.each(this.model.get('factura_detalle').models, function (item) {


            var valor_total =   item.get('cantidad_devuelta') *
                    item.get('dias_renovar') *
                    item.get('valor_unitario');

            item.set('valor_total', valor_total);


            subtotal += item.get('valor_total');
        }, this);

        this.model.set('subtotal',subtotal);
        this.model.set('descuento',this.descuento_interfaz);
    },

    calcularDescuento: function(){

        if (this.descuento_tipo_interfaz == 1)
        {
            if (this.model.get('subtotal') > this.descuento_interfaz)
            {
                var descuento_interfaz = this.descuento_interfaz;
                var descuento_ui = this.model.get('subtotal') - this.descuento_interfaz;
                this.model.set('descuento_ui', descuento_ui);
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
                var descuento_ui = this.model.get('subtotal') - descuento_porcentaje;
                this.model.set('descuento_ui', descuento_ui);
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

            var total_factura = (   this.model.get('subtotal') -
                this.model.get('descuento')) +
                this.model.get('iva');

            total_factura = mat.redondear(total_factura,2);

            this.model.set('total', total_factura);

        }
        else
        {
            this.model.set('total', 0);

        }
    },

    cambiarDias: function () {

        _.each(this.model.get('factura_detalle').models, function (item) {
            item.set('dias_renovar', this.dias_renovar);
        }, this);

    }

});