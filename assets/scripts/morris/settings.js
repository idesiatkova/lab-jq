Morris.Line({
  element: 'chart-morris-line',
  data: [
    { year: '2008', value: 20 },
    { year: '2009', value: 10 },
    { year: '2010', value: 5 },
    { year: '2011', value: 5 },
    { year: '2012', value: 20 }
  ],
  resize: true,
  gridTextColor: ['#ffffff'],
  pointFillColors: ['#ffffff'],
  xkey: 'year',
  ykeys: ['value'],
  labels: ['Value']
});
Morris.Donut({
  element: 'chart-morris-donut',
  data: [
    { label: "Download Sales", value: 12 },
    { label: "In-Store Sales", value: 30 },
    { label: "Mail-Order Sales", value: 20 }
  ], 
  resize: true, 
});