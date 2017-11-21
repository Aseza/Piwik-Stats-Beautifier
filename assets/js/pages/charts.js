
Chart.defaults.groupableBar = Chart.helpers.clone(Chart.defaults.bar);
var helpers = Chart.helpers;
Chart.controllers.groupableBar = Chart.controllers.bar.extend({
  calculateBarX: function(index, datasetIndex) {
    // position the bars based on the stack index
    var stackIndex = this.getMeta().stackIndex;
    return Chart.controllers.bar.prototype.calculateBarX.apply(this, [index, stackIndex]);
  },
  hideOtherStacks: function(datasetIndex) {
    var meta = this.getMeta();
    var stackIndex = meta.stackIndex;

    this.hiddens = [];
    for (var i = 0; i < datasetIndex; i++) {
      var dsMeta = this.chart.getDatasetMeta(i);
      if (dsMeta.stackIndex !== stackIndex) {
        this.hiddens.push(dsMeta.hidden);
        dsMeta.hidden = true;
      }
    }
  },
  unhideOtherStacks: function(datasetIndex) {
    var meta = this.getMeta();
    var stackIndex = meta.stackIndex;

    for (var i = 0; i < datasetIndex; i++) {
      var dsMeta = this.chart.getDatasetMeta(i);
      if (dsMeta.stackIndex !== stackIndex) {
        dsMeta.hidden = this.hiddens.unshift();
      }
    }
  },
  calculateBarY: function(index, datasetIndex) {
    this.hideOtherStacks(datasetIndex);
    var barY = Chart.controllers.bar.prototype.calculateBarY.apply(this, [index, datasetIndex]);
    this.unhideOtherStacks(datasetIndex);
    return barY;
  },

  calculateBarBase: function(datasetIndex, index) {
    this.hideOtherStacks(datasetIndex);
    var barBase = Chart.controllers.bar.prototype.calculateBarBase.apply(this, [datasetIndex, index]);
    this.unhideOtherStacks(datasetIndex);
    return barBase;
  },
  getBarCount: function() {
    var stacks = [];
    // put the stack index in the dataset meta
    Chart.helpers.each(this.chart.data.datasets, function(dataset, datasetIndex) {
      var meta = this.chart.getDatasetMeta(datasetIndex);
      if (meta.bar && this.chart.isDatasetVisible(datasetIndex)) {
        var stackIndex = stacks.indexOf(dataset.stack);
        if (stackIndex === -1) {
          stackIndex = stacks.length;
          stacks.push(dataset.stack);
        }
        meta.stackIndex = stackIndex;
      }
    }, this);

    this.getMeta().stacks = stacks;
    return stacks.length;
  },
});
//_-----------------------------------
//_-----------------------------------
function checkIfEmptyAndFillD(arr){
  if(arr.length==0){
    arr = [
      {"label": "Lundi","nb_visits": 0},
      {"label": "Mardi","nb_visits": 0},
      {"label": "Mercredi","nb_visits": 0},
      {"label": "Jeudi","nb_visits": 0},
      {"label": "Vendredi","nb_visits": 0},
      {"label": "Samedi","nb_visits": 0},
      {"label": "Dimanche","nb_visits": 0}
    ]
  }
  return arr;
}
//_-----------------------------------
function checkIfEmptyAndFill(arr) {
  if(arr.length==0){
  arr = [
    {"label": "0h","nb_visits": 0},
    {"label": "1h","nb_visits": 0},
    {"label": "2h","nb_visits": 0},
    {"label": "3h","nb_visits": 0},
    {"label": "4h","nb_visits": 0},
    {"label": "5h","nb_visits": 0},
    {"label": "6h","nb_visits": 0},
    {"label": "7h","nb_visits": 0},
    {"label": "8h","nb_visits": 0},
    {"label": "9h","nb_visits": 0},
    {"label": "10h","nb_visits": 0},
    {"label": "11h","nb_visits": 0},
    {"label": "12h","nb_visits": 0},
    {"label": "13h","nb_visits": 0},
    {"label": "14h","nb_visits": 0},
    {"label": "15h","nb_visits": 0},
    {"label": "16h","nb_visits": 0},
    {"label": "17h","nb_visits": 0},
    {"label": "18h","nb_visits": 0},
    {"label": "19h","nb_visits": 0},
    {"label": "20h","nb_visits": 0},
    {"label": "21h","nb_visits": 0},
    {"label": "22h","nb_visits": 0},
    {"label": "23h","nb_visits": 0}
  ]
  }
  return arr;
}
//_-----------------------------------
//Time
var numbVisitFF = [];
var numbVisitSF = [];
var numbVisitCH = [];
var numbVisitCM = [];
var deviceTypeArray =[];
var numbVisitSmartphone = [];
var numbVisitDesktop = [];
var numbVisitTablet = [];
var numbVisitPhablet = [];
//days
var numbVisitFFD = [];
var numbVisitSFD = [];
var numbVisitCHD = [];
var numbVisitCMD = [];
var deviceTypeArrayD =[];
var numbVisitSmartphoneD = [];
var numbVisitDesktopD = [];
var numbVisitTabletD = [];
var numbVisitPhabletD = [];
var labelD = [];
/////referrerals
var referralTypeValues=[];
var referralTypeLabels=[];
//Time_Spent
var average_time = [];
var label_average_list = [];
// var fullArray=[];
var result ;
let promiseToGetData = new Promise(function(resolve, reject) {
  $.ajax({
    url: "php/info.php",
    data :{
      "isSafari":isSafari,
      "isFirefox":isFirefox,
      "isChrome":isChrome,
      "isChromeMobile":isChromeMobile,
      "botValue":botValue,
      "dateFrom":dateFrom,
      "dateTo":dateTo,
      "isReferral":isReferral
    },
    success: function(response) {
      response = JSON.parse(response);
      result = response;
//time
if(!result){
  window.location = "http://pfa2017:8888/401.html";

  // alert("Please Enter This Webpage from Selector, THIS IS WRONG\nYou will be redirect to it....");

}
for(i=0;i<9;i++)
{
  if(result[i].length==0){
    result[i]=checkIfEmptyAndFill(result[i])
  }

}
for(i=9;i<17;i++)
{
  if(result[i].length==0){
    result[i]=checkIfEmptyAndFillD(result[i])
    console.log(result[i]);
  }

}
console.log(result);

result[0].forEach(function(item){
  numbVisitFF.push(item.nb_visits);
});

result[1].forEach(function(item){
  numbVisitSF.push(item.nb_visits);
});
result[2].forEach(function(item){
  numbVisitCH.push(item.nb_visits);
});
result[3].forEach(function(item){
  numbVisitCM.push(item.nb_visits);
});
result[5].forEach(function(item){
  numbVisitSmartphone.push(item.nb_visits);
});
result[6].forEach(function(item){
  numbVisitDesktop.push(item.nb_visits);
});
result[7].forEach(function(item){
  numbVisitTablet.push(item.nb_visits);
});
result[8].forEach(function(item){
  numbVisitPhablet.push(item.nb_visits);
});
//Days
result[9].forEach(function(item){
  numbVisitFFD.push(item.nb_visits);
  labelD.push(item.label);
});
result[10].forEach(function(item){
  numbVisitSFD.push(item.nb_visits);

});
result[11].forEach(function(item){
  numbVisitCHD.push(item.nb_visits);
});
result[12].forEach(function(item){
  numbVisitCMD.push(item.nb_visits);
});
result[13].forEach(function(item){
  numbVisitSmartphoneD.push(item.nb_visits);
});
result[14].forEach(function(item){
  numbVisitDesktopD.push(item.nb_visits);
});
result[15].forEach(function(item){
  numbVisitTabletD.push(item.nb_visits);
});
result[16].forEach(function(item){
  numbVisitPhabletD.push(item.nb_visits);
});
result[17].forEach(function(item){
  referralTypeValues.push(item.nb_visits);
  referralTypeLabels.push(item.label);
});
result[18].forEach(function(item){
  average_time.push(item.avg_time_on_page);
  label_average_list.push(item.label);
});

      if (jQuery.isEmptyObject(result)) {

        reject('No Data error');
      } else {
        resolve('GOT DATA');
      }
    }
  });


});
promiseToGetData.then(function(fromResolve) {
  var data = {
    labels: ["00h", "1h", "2h", "2h", "4h", "5h", "6h", "7h", "8h", "9h", "10h", "11h", "12h", "13h", "14h", "15h", "16h", "17h", "18h","19h", "20h", "21h", "22h", "23h"],
    datasets: [{
        label: "Chrome",
        backgroundColor: "rgba(190, 180, 42, 0.69)",
        data: numbVisitCH,
        stack: 1
      },
      {
        label: "Safari",
        backgroundColor: "rgba(22, 51, 159, 0.88)",
        data: numbVisitSF,
        stack: 1
      },
      {
        label: "FireFox",
        backgroundColor: "rgba(240, 146, 60, 0.6)",
        data: numbVisitFF,
        stack: 1
      }
      ,
      {
        label: "Chrome Mobile",
        backgroundColor: "rgba(193, 95, 5, 0.6)",
        data: numbVisitCM,
        stack: 1
      },
      {
        label: "Desktop",
        backgroundColor: "rgba(40, 164, 153, 0.47)",
        data: numbVisitDesktop,
        stack: 2
      },
      {
        label: "Tablet",
        backgroundColor: "rgba(106, 65, 27, 0.93)",
        data: numbVisitTablet,
        stack: 2
      },
      {
        label: "Phablet",
        backgroundColor: "rgba(27, 73, 106, 0.6)",
        data: numbVisitPhablet,
        stack: 2
      },{
        label: "Smartphone",
        backgroundColor: "rgba(106, 65, 27, 0.6)",
        data: numbVisitSmartphone,
        stack: 2
      }
    ]
  };
  var dataD = {
    labels: labelD,
    datasets: [{
        label: "Chrome",
        backgroundColor: "rgba(190, 180, 42, 0.69)",
        data: numbVisitCHD,
        stack: 1
      },
      {
        label: "Safari",
        backgroundColor: "rgba(22, 51, 159, 0.88)",
        data: numbVisitSFD,
        stack: 1
      },
      {
        label: "FireFox",
        backgroundColor: "rgba(240, 146, 60, 0.6)",
        data: numbVisitFFD,
        stack: 1
      }
      ,
      {
        label: "Chrome Mobile",
        backgroundColor: "rgba(106, 65, 27, 0.6)",
        data: numbVisitCMD,
        stack: 1
      },
      {
        label: "Desktop",
        backgroundColor: "rgba(54, 138, 138, 1)",
        data: numbVisitDesktopD,
        stack: 2
      },
      {
        label: "Tablet",
        backgroundColor: "rgba(226, 138, 138, 1)",
        data: numbVisitTabletD,
        stack: 2
      },
      {
        label: "Phablet",
        backgroundColor: "rgba(226, 138, 64, 1)",
        data: numbVisitPhabletD,
        stack: 2
      },{
        label: "Smartphone",
        backgroundColor: "rgba(0, 63, 64, 1)",
        data: numbVisitSmartphoneD,
        stack: 2
      }
    ]
  };
  var dataReferrals = {
    labels: referralTypeLabels,
    datasets: [{
        label: referralTypeLabels[0],
        backgroundColor: "rgba(190, 180, 42, 0.69)",
        data: numbVisitCHD,
      },
      {
        label: referralTypeLabels[1],
        backgroundColor: "rgba(22, 51, 159, 0.88)",
        data: numbVisitSFD,
      },
      {
        label: referralTypeLabels[2],
        backgroundColor: "rgba(240, 146, 60, 0.6)",
        data: numbVisitFFD,
      }
    ]
  };
  var ctx = document.getElementById("myChart").getContext("2d");
  var ctxD = document.getElementById("myChart2").getContext("2d");
  var ctxReferrals = document.getElementById("myChart3").getContext("2d");
  $('.preloader').hide();
  new Chart(ctx, {
    type: 'groupableBar',
    data: data,
    options: {
      legend: {
        labels: {
          generateLabels: function(chart) {
            return Chart.defaults.global.legend.labels.generateLabels.apply(this, [chart]).filter(function(item, i) {
              return i <= 7;
            });
          }
        }
      },
      scales: {
        yAxes: [{
          ticks: {
            max: result[4]/3,
          },
          stacked: true,
        }]
      }
    }
  });
  new Chart(ctxD, {
    type: 'groupableBar',
    data: dataD,
    options: {
      legend: {
        labels: {
          generateLabels: function(chart) {
            return Chart.defaults.global.legend.labels.generateLabels.apply(this, [chart]).filter(function(item, i) {
              return i <= 7;
            });
          }
        }
      },
      scales: {
        yAxes: [{
          ticks: {
            max: result[4]/1.5,
          },
          stacked: true,
        }]
      }
    }
  });
      var dataReferrals = {
          type: 'pie',
          data: {
              datasets: [{
                  data: referralTypeValues,
                  backgroundColor:[
                    "rgba(22, 51, 159, 0.88)",
                    "rgba(149, 42, 255, 0.88)",
                    "rgba(183, 151, 214, 0.88)"
                  ],
                  label: 'Dataset 1'
              }],
              labels: referralTypeLabels
          },
          options: {
              responsive: true
          }
      };
          var ctx = document.getElementById("myChart3").getContext("2d");
          new Chart(ctx, dataReferrals);

      // var data_visit_length = {
      //     type: 'pie',
      //     data: {
      //         datasets: [{
      //             data: average_time,
      //             backgroundColor:[ "rgba(22, 51, 159, 0.88)",
      //               "rgba(149, 42, 255, 0.88)",
      //               "rgba(183, 151, 214, 0.88)"
      //             ],
      //             label: ' :'
      //         }],
      //         labels: label_average_list
      //     },
      //     options: {
      //         responsive: true
      //     }
      // };
      //     var ctxx = document.getElementById("myChart4").getContext("2d");
      //     new Chart(ctxx, data_visit_length);
      //


          //////////
          var ct = document.getElementById("myChart4").getContext('2d');
          var myChart = new Chart(ct, {
              type: 'bar',
              data: {
                  labels: label_average_list,
                  datasets: [{
                      label: 'Temps(sec) :',
                      data: average_time,
                      backgroundColor: [
                          'rgba(255, 99, 132, 0.2)',
                          'rgba(54, 162, 235, 0.2)',
                          'rgba(255, 206, 86, 0.2)',
                          'rgba(75, 192, 192, 0.2)',
                          'rgba(153, 102, 255, 0.2)',
                          'rgba(255, 159, 64, 0.2)'
                      ],
                      borderColor: [
                          'rgba(255,99,132,1)',
                          'rgba(54, 162, 235, 1)',
                          'rgba(255, 206, 86, 1)',
                          'rgba(75, 192, 192, 1)',
                          'rgba(153, 102, 255, 1)',
                          'rgba(255, 159, 64, 1)'
                      ],
                      borderWidth: 1
                  }]
              },
              options: {
                  scales: {
                      yAxes: [{
                          ticks: {
                              beginAtZero:true
                          }
                      }]
                  }
              }
          });






}).catch(function(fromReject) {
  alert(fromReject);
})
