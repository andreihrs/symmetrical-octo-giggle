import React from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import "../styles/main.css";

class CompanyChart extends React.Component {
  componentDidMount() {
    // Create chart instance
    let chart = am4core.create("chartdiv", am4charts.PieChart);

    // Create pie series
    let series = chart.series.push(new am4charts.PieSeries());
    series.dataFields.value = "litres";
    series.dataFields.category = "country";

    chart.data = [
      {
        country: "Lithuania",
        litres: 501.9,
      },
      {
        country: "Czech Republic",
        litres: 301.9,
      },
      {
        country: "Ireland",
        litres: 201.1,
      },
      {
        country: "Germany",
        litres: 165.8,
      },
      {
        country: "Australia",
        litres: 139.9,
      },
      {
        country: "Austria",
        litres: 128.3,
      },
      {
        country: "UK",
        litres: 99,
      },
      {
        country: "Belgium",
        litres: 60,
      },
      {
        country: "The Netherlands",
        litres: 50,
      },
    ];

    this.chart = chart;
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    return (
      <div class="w-1/2 ml-4">
        <div class="rounded-md p-6 bg-white shadow">
          <div class="mb-2 pb-2">
            <h3 class="font-semibold text-lg text-gray-600">Bar Chart</h3>
            <p class="text-sm text-gray-500">Profit Share between customers</p>
          </div>
          <div id="chartdiv" class="w-full h-240px"></div>
        </div>
      </div>
    );
  }
}

export default CompanyChart;
