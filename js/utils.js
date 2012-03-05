tpl = {

    // Hash of preloaded templates for the app
    templates:{},

    // Recursively pre-load all the templates for the app.
    // This implementation should be changed in a production environment. All the template files should be
    // concatenated in a single file.
    loadTemplates:function (names, callback) {

        var that = this;

        var loadTemplate = function (index) {
            var name = names[index];
            console.log('Loading template: ' + name);
            $.get('tpl/' + name + '.html', function (data) {
                that.templates[name] = data;
                index++;
                if (index < names.length) {
                    loadTemplate(index);
                } else {
                    callback();
                }
            });
        }

        loadTemplate(0);
    },

    // Get template by name from hash of preloaded templates
    get:function (name) {
        return this.templates[name];
    }

};

mat = {

    redondear: function(number, decimals /* optional, default 0 */)
    {
        var _round = Math.round;

        if (arguments.length == 1)
            return _round(number);

        var multiplier = Math.pow(10, decimals);
        return _round(number * multiplier) / multiplier;
    }
};

mensaje = {

    notifyBar: function(mensaje, cls, waitSignal, cerrar)
    {
        window.$.notifyBar({
            html: mensaje,
            delay: 2000,
            animationSpeed: "normal",
            waitSignal: waitSignal,
            cls: cls,
            closeOnClick: cerrar

        });

    }
}
