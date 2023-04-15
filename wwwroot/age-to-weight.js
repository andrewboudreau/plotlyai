
    const ageData = Array.from({length: 49 }, (_, i) => i + 2);

    const weightData = [
    13.6, 14.2, 16.8, 20.3, 23.1, 25.5, 28.2, 30.5, 32.8, 35, 37.1, 39.2, 41.3, 43.4, 45.5,
    7.6, 49.7, 51.8, 53.9, 56, 58.1, 60.2, 62.3, 64.4, 66.5, 68.6, 70.7, 72.8, 74.9, 77, 79.1,
    81.2, 83.3, 85.4, 87.5, 89.6, 91.7, 93.8, 95.9, 98, 100.1, 102.2, 104.3, 106.4, 108.5,
    110.6, 112.7, 114.8];

    const chartData = {
        labels: ageData,
    series: [weightData]
        };

    const chartOptions = {
        axisX: {
        labelInterpolationFnc: function(value, index) {
              return index % 5 === 0 ? value : null;
            }
          },
    axisY: {
        onlyInteger: true,
    offset: 30,
    labelInterpolationFnc: function(value) {
              return value + ' kg';
            }
          },
    fullWidth: true,
    chartPadding: {
        right: 10
          },
    lineSmooth: Chartist.Interpolation.cardinal({
        tension: 0.5
          }),
        };

    new Chartist.Line('.ct-chart', chartData, chartOptions);