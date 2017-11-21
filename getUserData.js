var myApp = angular.module('myApp', ['ngAnimate']);
var visitDataData;
var stringVisitData;
var baseUrl = "https://abdelilah.piwikpro.com/?module=API"
var method;
var formatAndId = "&format=JSON&idSite=1"
var period;
var date;
var segment;
var token = "&token_auth=1a6e61f8499c61c39655076568aca25f";
var fullUrl;
myApp.controller('ctrl1', function($scope, $http, $filter, $timeout, $rootScope) {
    $scope.noData = true;
    $rootScope.allDataFiltered = [];
    $scope.allData = [];
    $scope.click = false;
    $scope.country = 'ma';
    $scope.all = false;
    $scope.loading = false;
    angular.element('.datepicker').datepicker({
        format: 'yyyy-mm-dd',
        autoclose: true,
    });
    $scope.areaChange = function() {
        $scope.click = false;
    }
    $scope.run = function() {
        $rootScope.allDataFiltered = []
        period = "&period=range";
        date = "&date=" + $scope.dateFrom + "," + $scope.dateTo;
        if ($scope.fullArea) {
            segment = '';
            method = "&method=UserCountry.getCountry"
            $scope.click = false;
        } else {
            $scope.click = false;
            segment = "&segment=countryCode==" + $scope.country;
            method = "&method=UserCountry.getRegion"
        }
        fullUrl = baseUrl + method + formatAndId + period + date + segment + token;
        if ($scope.dateTo && $scope.dateFrom) {
            if (!$scope.click) {
                $scope.click = true;
                $scope.loading = true;
                $http.get(fullUrl)
                    .then(function(response) {
                        console.log(fullUrl);
                        $rootScope.allDataFiltered = response.data;
                        $scope.noData = false;
                        visitDataData = response.data;
                        stringVisitData = JSON.stringify(visitDataData)
                        localStorage.setItem("myVisitData", stringVisitData);
                        $scope.loading = false;
                        angular.element('#dataTable').DataTable({
                            language: {
                                searchPlaceholder: 'Search records',
                                sSearch: '',
                                sLengthMenu: 'Show _MENU_',
                                sLength: 'dataTables_length',
                                oPaginate: {
                                    sFirst: '<i class="material-icons">chevron_left</i>',
                                    sPrevious: '<i class="material-icons">chevron_left</i>',
                                    sNext: '<i class="material-icons">chevron_right</i>',
                                    sLast: '<i class="material-icons">chevron_right</i>'
                                }
                            }
                        });

                    });
            }
        } else {
            Materialize.toast('Entrez les Dates SVP', 1000)
        }
    }
    $scope.clicked = function() {
        if ($scope.click) {
            Materialize.toast('Deja filtrée', 1000)
        }
    }
    $scope.changedOption = function() {
        $rootScope.allDataFiltered = [];
        $scope.click = false;

    }
    $scope.choseStart = function() {
        angular.element('#to').datepicker('setStartDate', $scope.dateFrom);
    }
});
myApp.controller('ctrl2', function($scope, $rootScope, $timeout, $http) {
    $http.get("countries.js").then(function(response) {
        $scope.countries = response.data;
    });
    var visitData = {
        "MA.TO": 0,
        "MA.CO": 0,
        "MA.FB": 0,
        "MA.TH": 0,
        "MA.GB": 0,
        "MA.GC": 0,
        "MA.RZ": 0,
        "MA.MT": 0,
        "MA.TD": 0,
        "MA.OR": 0,
        "MA.SM": 0,
        "MA.MK": 0,
        "MA.DA": 0,
        "MA.LB": 0,
        "MA.GE": 0,
        "MA.OD": 0
    };
    var visitDataWorld = {
        "AF": 0,
        "AL": 0,
        "DZ": 0,
        "AO": 0,
        "AG": 0,
        "AR": 0,
        "AM": 0,
        "AU": 0,
        "AT": 0,
        "AZ": 0,
        "BS": 0,
        "BH": 0,
        "BD": 0,
        "BB": 0,
        "BY": 0,
        "BE": 0,
        "BZ": 0,
        "BJ": 0,
        "BT": 0,
        "BO": 0,
        "BA": 0,
        "BW": 0,
        "BR": 0,
        "BN": 0,
        "BG": 0,
        "BF": 0,
        "BI": 0,
        "KH": 0,
        "CM": 0,
        "CA": 0,
        "CV": 0,
        "CF": 0,
        "TD": 0,
        "CL": 0,
        "CN": 0,
        "CO": 0,
        "KM": 0,
        "CD": 0,
        "CG": 0,
        "CR": 0,
        "CI": 0,
        "HR": 0,
        "CY": 0,
        "CZ": 0,
        "DK": 0,
        "DJ": 0,
        "DM": 0,
        "DO": 0,
        "EC": 0,
        "EG": 0,
        "SV": 0,
        "GQ": 0,
        "ER": 0,
        "EE": 0,
        "ET": 0,
        "FJ": 0,
        "FI": 0,
        "FR": 0,
        "GA": 0,
        "GM": 0,
        "GE": 0,
        "DE": 0,
        "GH": 0,
        "GR": 0,
        "GD": 0,
        "GT": 0,
        "GN": 0,
        "GW": 0,
        "GY": 0,
        "HT": 0,
        "HN": 0,
        "HK": 0,
        "HU": 0,
        "IS": 0,
        "IN": 0,
        "ID": 0,
        "IR": 0,
        "IQ": 0,
        "IE": 0,
        "IL": 0,
        "IT": 0,
        "JM": 0,
        "JP": 0,
        "JO": 0,
        "KZ": 0,
        "KE": 0,
        "KI": 0,
        "KR": 0,
        "UNDEFINED": 0,
        "KW": 0,
        "KG": 0,
        "LA": 0,
        "LV": 0,
        "LB": 0,
        "LS": 0,
        "LR": 0,
        "LY": 0,
        "LT": 0,
        "LU": 0,
        "MK": 0,
        "MG": 0,
        "MW": 0,
        "MY": 0,
        "MV": 0,
        "ML": 0,
        "MT": 0,
        "MR": 0,
        "MU": 0,
        "MX": 0,
        "MD": 0,
        "MN": 0,
        "ME": 0,
        "MA": 0,
        "MZ": 0,
        "MM": 0,
        "NA": 0,
        "NP": 0,
        "NL": 0,
        "NZ": 0,
        "NI": 0,
        "NE": 0,
        "NG": 0,
        "NO": 0,
        "OM": 0,
        "PK": 0,
        "PA": 0,
        "PG": 0,
        "PY": 0,
        "PE": 0,
        "PH": 0,
        "PL": 0,
        "PT": 0,
        "QA": 0,
        "RO": 0,
        "RU": 0,
        "RW": 0,
        "WS": 0,
        "ST": 0,
        "SA": 0,
        "SN": 0,
        "RS": 0,
        "SC": 0,
        "SL": 0,
        "SG": 0,
        "SK": 0,
        "SI": 0,
        "SB": 0,
        "ZA": 0,
        "ES": 0,
        "LK": 0,
        "KN": 0,
        "LC": 1,
        "VC": 0,
        "SD": 0,
        "SR": 0,
        "SZ": 0,
        "SE": 0,
        "CH": 0,
        "SY": 0,
        "TW": 0,
        "TJ": 0,
        "TZ": 0,
        "TH": 0,
        "TL": 0,
        "TG": 0,
        "TO": 0,
        "TT": 0,
        "TN": 0,
        "TR": 0,
        "TM": 0,
        "UG": 0,
        "UA": 0,
        "AE": 0,
        "GB": 0,
        "US": 0,
        "UY": 0,
        "UZ": 0,
        "VU": 0,
        "VE": 0,
        "VN": 0,
        "YE": 0,
        "ZM": 0,
        "ZW": 0
    };
    console.log('COUNTRIES ARE ' + $scope.countries);
    var visitDataWorld;
    $('.jvectormap-zoomin').addClass('btn blue-grey');
    $('.jvectormap-zoomout').addClass('btn blue-grey');
    var jsonVisits = JSON.parse(localStorage.getItem("myVisitData"));
    // localStoragex.setItem("myVisitData", '');
    // $http.get("countries.js").then(function(response){
    angular.forEach(jsonVisits, function(item) {
        if (item.region_name == "Oriental")
            visitData['MA.OR'] = item.nb_visits;
        else if (item.region_name == "Taza - Al Hoceima - Taounate")
            visitData['MA.TH'] = item.nb_visits;
        else if (item.region_name == "Oued el Dahab")
            visitData['MA.OD'] = item.nb_visits;
        else if (item.region_name == "Layoune - Boujdour - Sakia El Hamra")
            visitData['MA.LB'] = item.nb_visits;
        else if (item.region_name == "Guelmim - Es-Semara")
            visitData['MA.GE'] = item.nb_visits;
        else if (item.region_name == "Sous - Massa - Dra")
            visitData['MA.SM'] = item.nb_visits;
        else if (item.region_name == "Mekns - Tafilalet")
            visitData['MA.MT'] = item.nb_visits;
        else if (item.region_name == "Fs - Boulemane")
            visitData['MA.FB'] = item.nb_visits;
        else if (item.region_name == "Tanger - Ttouan")
            visitData['MA.TO'] = item.nb_visits;
        else if (item.region_name == "Gharb - Chrarda - BniHssen")
            visitData['MA.GB'] = item.nb_visits;
        else if (item.region_name == "Doukkala - Abda")
            visitData['MA.DA'] = item.nb_visits;
        else if (item.region_name == "Rabat - Sal - Zemmour - Zaer")
            visitData['MA.RZ'] = item.nb_visits;
        else if (item.region_name == "Grand Casablanca")
            visitData['MA.GC'] = item.nb_visits;
        else if (item.region_name == "Chaouia - Ouardigha")
            visitData['MA.CO'] = item.nb_visits;
        else if (item.region_name == "Marrakech - Tensift - Al Haouz")
            visitData['MA.MK'] = item.nb_visits;
        else if (item.region_name == "Tadla - Azilal")
            visitData['MA.TD'] = item.nb_visits;

        angular.forEach(jsonVisits, function(item) {
            if (item.country_name == "Morocco" || item.label == "Morocco")
                visitDataWorld['MA'] += item.nb_visits;
            if (item.country_name == "United States" || item.label == "United States")
                visitDataWorld['US'] += item.nb_visits;
            if (item.country_name == "Belgium" || item.label == "Belgium")
                visitDataWorld['BE'] += item.nb_visits;
            if (item.country_name == "Colombia" || item.label == "Colombia")
                visitDataWorld['CO'] += item.nb_visits;
            if (item.country_name == "Greece" || item.label == "Greece")
                visitDataWorld['GR'] += item.nb_visits;
            if (item.country_name == "Ireland" || item.label == "Ireland")
                visitDataWorld['IE'] += item.nb_visits;
            if (item.country_name == "Mexico" || item.label == "Mexico")
                visitDataWorld['MX'] += item.nb_visits;
            if (item.country_name == "Pakistan" || item.label == "Pakistan")
                visitDataWorld['PK'] += item.nb_visits;

        });

    });
    // });

    // angular.forEach(response.data, function(value, key) {
    //     // if (item.country_name == value || item.label == value){
    //     //     visitDataWorld[key] += item.nb_visits;
    //     //   }
    // });
    angular.element('#map-canvas').vectorMap({
        map: 'world_mill_en',
        zoomMax: 11,
        zoomButtons: false,
        series: {
            regions: [{
                values: visitDataWorld,
                scale: ['#b2bdd1', '#1c5c8b'],
                normalizeFunction: 'polynomial'
            }]
        },
        onRegionTipShow: function(e, el, code) {
            el.html(el.html() + ' (Unique Visits - ' + visitDataWorld[code] + ')');
        },
        onRegionClick: function(e, code, isSelected, selectedRegions) {
            $('#map-canvas').vectorMap('get', 'mapObject').setFocus({
                region: code,
                animate: true
            });
        }
    });
    $scope.load = function() {
        if ($scope.isMorocco) {
            $('#map-canvas').vectorMap('get', 'mapObject').setFocus({
                region: 'MA',
                animate: true,
            });
            $('#map-canvas').fadeOut(1700);
            $timeout(function() {
                $('#map-canvas').replaceWith("<main id='map-canvas' class='mn-inner center allign' style='width: 100%; height: 700px;margin-right:900em;margin-top:9%' ></main>").fadeIn(1000);
                $('#map-canvas').hide();
                $('#map-canvas').fadeIn(1500);
                angular.element('#map-canvas').vectorMap({
                    map: 'maroc_abdelilah',
                    zoomMax: 11,
                    zoomButtons: false,
                    series: {
                        regions: [{
                            values: visitData,
                            scale: ['#b2bdd1', '#1c5c8b'],
                            normalizeFunction: 'polynomial'
                        }]
                    },
                    onRegionTipShow: function(e, el, code) {
                        el.html(el.html() + ' (Unique Visits - ' + visitData[code] + ')');
                    },
                    onRegionClick: function(e, code, isSelected, selectedRegions) {
                        $('#map-canvas').vectorMap('get', 'mapObject').setFocus({
                            region: code,
                            animate: true
                        });
                    }
                });
            }, 660);
        }
        if (!$scope.isMorocco) {
            $('#map-canvas').replaceWith("<main id='map-canvas' class='mn-inner' ></main>");
            $('#map-canvas').hide();
            $('#map-canvas').fadeIn(1000);
            angular.element('#map-canvas').vectorMap({
                map: 'world_mill_en',
                zoomMax: 11,
                zoomButtons: false,
                series: {
                    regions: [{
                        values: visitDataWorld,
                        scale: ['#b2bdd1', '#1c5c8b'],
                        normalizeFunction: 'polynomial'
                    }]
                },
                onRegionTipShow: function(e, el, code) {
                    el.html(el.html() + ' (Unique Visits - ' + visitDataWorld[code] + ')');
                },
                onRegionClick: function(e, code, isSelected, selectedRegions) {
                    $('#map-canvas').vectorMap('get', 'mapObject').setFocus({
                        region: code,
                        animate: true
                    });
                }
            });
        }
    }
    //// Map info
});
myApp.controller('ctrl3', function($scope, $http, $filter) {
    angular.element('.datepicker').datepicker({
        format: 'yyyy-mm-dd',
        autoclose: true,
    });
    var method = "&method=Actions.getPageUrls";
    period = "&period=range";
    $scope.send = function() {
        if (!$scope.debut || !$scope.fin) {
            Materialize.toast('Entrez les Dates SVP', 1000);
        } else {
            $scope.loading3 = true;
            date = "&date=" + $scope.debut + "," + $scope.fin;
            fullUrl = baseUrl + method + formatAndId + period + date + token;
            $http.get(fullUrl)
                .then(function(response) {
                    $scope.allData = response.data;
                    $scope.loading3 = false;
                });
        }
    };
    $scope.choseStart3 = function() {
        angular.element('#jusq').datepicker('setStartDate', $scope.debut);
    }


});
myApp.controller('ctrl4', function($scope, $http, $filter) {
    angular.element('.datepicker').datepicker({
        format: 'yyyy-mm-dd',
        autoclose: true,
    });
    $scope.Result = false;
    method = "&method=Actions.getPageUrls";
    $scope.loading3 = true;
    period = "&period=day";
    date = "&date=yesterday";
    fullUrl = baseUrl + method + formatAndId + period + date + token;

    $http.get(fullUrl)
        .then(function(response) {
            $scope.Pages = response.data;
            $scope.loading3 = false;
        });

    $scope.send = function() {
        $scope.Result = true;
        method = "&method=Transitions.getTransitionsForPageUrl";
        pageUrl = "&pageUrl=http://justasingletest.000webhostapp.com" + $scope.ToPage;
        period = "&period=range";

        if (!$scope.debut || !$scope.fin || !$scope.FromPage || !$scope.ToPage) {
            Materialize.toast('Entrez les Dates et les Pages SVP', 1000);
        } else {
            $scope.loading3 = true;
            date = "&date=" + $scope.debut + "," + $scope.fin;
            fullUrl = baseUrl + method + pageUrl + formatAndId + period + date + token;
            $http.get(fullUrl)
                .then(function(response) {
                    $scope.allData = response.data;
                    $scope.loading3 = false;
                    console.log($scope.allData);
                    $scope.referrals = 0;
                    for (var i = $scope.allData.previousPages.length - 1; i >= 0; i--) {

                        if ($scope.allData.previousPages[i].label == "justasingletest.000webhostapp.com" + $scope.FromPage) {
                            $scope.referrals = $scope.allData.previousPages[i].referrals;
                            console.log($scope.referrals);
                        }


                    }
                });
        }
        var a = $scope.FromPage;
        var b = $scope.ToPage;
        $scope.From = a;
        $scope.To = b;
    };
    $scope.choseStart3 = function() {
        angular.element('#jusq').datepicker('setStartDate', $scope.debut);
    }

});
