[{
    $match: {
        fee: ""
    }
}, {
    $set: {
        fee: 0
    }
}, {
    $merge: {
        into: 'orders_peter'
    }
}]