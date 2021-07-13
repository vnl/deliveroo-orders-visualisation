[{$match: {
  delivered_at: ""
}}, {$addFields: {
  delivered_at: null
}}, {$merge: {
  into: 'orders_peter'
}}]