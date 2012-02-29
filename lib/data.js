var Factura = new FacturaModel({
    "id":1,
    "cliente_id":1,
    "descuento":0,
    "descuento_ui":0,
    "descuento_tipo":1,
    "dias_alquiler":5,
    "fecha_inicio":"2012-02-28 12:36:04",
    "iva":12,
    "estado":"CERRADA",
    "numero":123,
    "proyecto":"BACKBONE",
    "referencia":0,
    "subtotal":0,
    "total":0,
    "transporte":0,
    "tipo":"ALQ",
    "factura_detalle": [
        {   "cantidad":5,
            "cantidad_devuelta":0,
            "factura_id":1,
            "item_id":1,
            "tipo_item":1,
            "valor_unitario":11,
            "valor_total":0,
            "descripcion":"ITEM 1",
            "dias_renovar":1
        },
        {   "cantidad":15,
            "cantidad_devuelta":0,
            "factura_id":1,
            "item_id":2,
            "tipo_item":1,
            "valor_unitario":6,
            "valor_total":0,
            "descripcion":"ITEM 2",
            "dias_renovar":1
        }
    ]

})

