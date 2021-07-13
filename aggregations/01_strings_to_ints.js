[{
    $addFields: {
        total: {
            $convert: {
                input: "$total",
                to: "double"
            }
        },
        delivery_fee: {
            $convert: {
                input: "$delivery_fee",
                to: "double"
            }
        },
        tip: {
            $convert: {
                input: "$tip",
                to: "double"
            }
        },
        credit_used: {
            $convert: {
                input: "$credit_used",
                to: "double"
            }
        },
        balance: {
            $convert: {
                input: "$balance",
                to: "double"
            }
        },
        subtotal: {
            $convert: {
                input: "$subtotal",
                to: "double"
            }
        }
    }
}, {
    $merge: {
        into: 'orders_peter',
    }
}]