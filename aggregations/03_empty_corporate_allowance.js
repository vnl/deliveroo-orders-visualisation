[{$match: {
  corporate_allowance_used: ""
}}, {$set: {
  corporate_allowance_used: 0
}}, {$merge: {
  into: 'orders_peter',
}}]