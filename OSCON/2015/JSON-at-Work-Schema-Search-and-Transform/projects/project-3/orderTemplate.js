[
  '{{repeat(3)}}',
  {
    id: '{{index()}}',
    orderId: '{{integer(100, 10000)}}',
    customerName: '{{firstName()}} {{surname()}}',
    drink:
      {
        drinkType: 'Latte',
        size: 'Large',
        milk: 'Non-Fat'
      },
    muffin: 'Chocolate Cheesecake',
    date: '{{date(new Date(2015, 0, 1), new Date(), "MM-dd-YYYY")}}',
    time: '{{date(new Date(2015, 0, 1), new Date(), "hh:mm:ss")}}',
    espressoConCard: '{{guid()}}',
    totalPrice: '{{floating(0, 100, 2, "$0.00")}}'
  }
]