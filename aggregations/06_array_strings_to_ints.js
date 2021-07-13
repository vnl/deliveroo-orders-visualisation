[{$set: {
  items: {
    $map: {
      input: "$items",
      as: "item",
      in: {
        $mergeObjects: ["$$item", {
          unit_price: {
            $convert: {
              input: "$$item.unit_price",
              to: "double"
            }
          }
        }, {
          total_unit_price: {
            $convert: {
              input: "$$item.total_unit_price",
              to: "double"
            }
          }
        }]
      }
    }
  }
}}, {$merge: {
  into: 'orders_peter',
}}]