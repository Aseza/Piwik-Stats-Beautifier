<!DOCTYPE html>
<html lang="en">



<head>

    <!-- Title -->
    <title>Enter Metrics - Beautified </title>

    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <meta charset="UTF-8">
    <meta name="description" content="Responsive Admin Dashboard Template" />
    <meta name="keywords" content="admin,dashboard" />
    <meta name="author" content="Steelcoders" />
    <!-- Styles -->
    <link href="assets/css/bootstrap.css" rel="stylesheet" type="text/css" />
    <link href="assets/css/bootstrap-datepicker.min.css" rel="stylesheet" type="text/css" />
    <link type="text/css" rel="stylesheet" href="assets/plugins/materialize/css/materialize.min.css" />
    <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href="assets/plugins/material-preloader/css/materialPreloader.min.css" rel="stylesheet">
    <!-- Theme Styles -->
    <link href="assets/css/alpha.min.css" rel="stylesheet" type="text/css" />
    <link href="assets/css/custom.css" rel="stylesheet" type="text/css" />
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="http://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
        <script src="http://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->

</head>

<body ng-app="myApp" ng-controller="controller">
  <div class="loader-bg"></div>
  <div class="loader">
      <div class="preloader-wrapper big active">
          <div class="spinner-layer spinner-blue">
              <div class="circle-clipper left">
                  <div class="circle"></div>
              </div>
              <div class="gap-patch">
                  <div class="circle"></div>
              </div>
              <div class="circle-clipper right">
                  <div class="circle"></div>
              </div>
          </div>
          <div class="spinner-layer spinner-spinner-teal lighten-1">
              <div class="circle-clipper left">
                  <div class="circle"></div>
              </div>
              <div class="gap-patch">
                  <div class="circle"></div>
              </div>
              <div class="circle-clipper right">
                  <div class="circle"></div>
              </div>
          </div>
          <div class="spinner-layer spinner-yellow">
              <div class="circle-clipper left">
                  <div class="circle"></div>
              </div>
              <div class="gap-patch">
                  <div class="circle"></div>
              </div>
              <div class="circle-clipper right">
                  <div class="circle"></div>
              </div>
          </div>
          <div class="spinner-layer spinner-green">
              <div class="circle-clipper left">
                  <div class="circle"></div>
              </div>
              <div class="gap-patch">
                  <div class="circle"></div>
              </div>
              <div class="circle-clipper right">
                  <div class="circle"></div>
              </div>
          </div>
      </div>
  </div>
  <div class="mn-content fixed-sidebar">
      <header class="mn-header navbar-fixed">
          <nav class="cyan darken-1">
              <div class="nav-wrapper row">
                  <section class="material-design-hamburger navigation-toggle">
                      <a href="#" data-activates="slide-out" class="button-collapse show-on-large material-design-hamburger__icon">
                          <span class="material-design-hamburger__layer"></span>
                      </a>
                  </section>
                  <div class="header-title col s3">
                      <span class="chapter-title">Statistics Beautifier</span>
                  </div>

              </div>
          </nav>
      </header>

      <aside id="slide-out" class="side-nav white fixed">
          <div class="side-nav-wrapper">
              <div class="sidebar-profile">
                  <div class="sidebar-profile-image">
                      <img src="assets/images/profile-image.png" class="circle" alt="">
                  </div>
                  <div class="sidebar-profile-info">
                      <a  >
                          <p>Abdelilah</p>
                          <span>Abdelilah@gmail.com</span>
                      </a>
                  </div>
              </div>

              <ul class="sidebar-menu collapsible collapsible-accordion" data-collapsible="accordion">
                  <li class="no-padding">
                      </li>
                      <li class="no-padding active">
                          <a class="collapsible-header waves-effect waves-grey active"><i class="material-icons">desktop_windows</i>Application Pages<i class="nav-drop-icon material-icons">keyboard_arrow_right</i></a>
                          <div class="collapsible-body">
                              <ul>
                                  <li><a class="active-page"  >Entering Metrics</a></li>
                                  <li><a href="Viewing_charts.php" >Viewing Charts</a></li>
                                  <li><a href="layout-hidden-sidebar.html">Hidden Sidebar</a></li>
                                  <li><a href="layout-right-sidebar.html">Right Sidebar</a></li>
                              </ul>
                          </div>
                      </li>
              </ul>
          </div>
      </aside>
        <main class="mn-inner">
          <div class="card">
              <div class="card-content">
                  <span class="card-title">Choose Params</span><br>
                  <div class="row">
                    <!-- Modal Trigger -->
                    <a class="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>

                    <!-- Modal Structure -->
                    <div id="modal1" class="modal">
                        <div class="modal-content">
                            <h4>Modal Header</h4>
                            <p>A bunch of text</p>
                        </div>
                        <div class="modal-footer">
                            <a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat">Confirmer</a>
                        </div>
                    </div>
                      <form class="col l4 m4 s12" action="Viewing_charts.php" method="post">
                          <p class="p-v-xs" >
                              <input type="checkbox" name="paysValue" class="filled-in" id="test" ng-model="isPays" ng-change="paysChanged()" />
                              <label for="test">Pays</label>
                            </p>
                            <div id="paysDiv" class="center allign" style="margin-left:10%;display:none">
                              <p class="p-v-xs">
                                  <input name="group1" type="radio" id="ville" value="pays" />
                                  <label for="ville">Ville (Maroc)</label>
                              </p>
                              <p class="p-v-xs">
                                  <input name="group1" type="radio" id="pays"  value="ville"/>
                                  <label for="pays">Pays (le Monde)</label>
                              </p>
                            </div>
                          <p class="p-v-xs">
                              <input type="checkbox" class="filled-in" id="test2" ng-model="isOs" ng-change="osChanged()" />
                              <label for="test2">Navigateur WEB</label>
                          </p>
                          <div id="osDiv" class="center allign" style="margin-left:10%;display:none" >
                            <p class="p-v-xs smallMargin">
                                <input type="checkbox" class="filled-in" id="chrome" name="isChrome"/>
                                <label for="chrome">Chrome</label>
                              </p>
                            <p class="p-v-xs smallMargin">
                                <input type="checkbox" class="filled-in" id="chromeMobile" name="isChromeMobile"/>
                                <label for="chromeMobile">Chrome Mobile</label>
                              </p>
                            <p class="p-v-xs smallMargin">
                                <input type="checkbox" class="filled-in" id="ie" name="isIe" />
                                <label for="ie" >Internet Explorer</label>
                              </p>
                            <p class="p-v-xs smallMargin">
                                <input type="checkbox" class="filled-in" id="firefox" name="isFirefox"/>
                                <label for="firefox">Mozilla FireFox</label>
                              </p>
                              <p class="p-v-xs smallMargin">
                                <input type="checkbox" class="filled-in" id="safari" name="isSafari"/>
                                <label for="safari">Safari</label>
                              </p>
                              <p class="p-v-xs smallMargin">
                                <input type="checkbox" class="filled-in" id="others" name="isOthers" />
                                <label for="others">Others</label>
                              </p>
                          </div>
                          <p class="p-v-xs">
                              <input type="checkbox" class="filled-in" id="test4" ng-model="isBot" />
                              <label for="test4">Visit Time</label>
                            </p>
                            <div ng-show="isBot" class="input-field col l12 m12 s12 ">
                              <label for="bot">
                                &lt;time(s)
                              </label>
                              <input id="bot" type="number" name="botValue" class="col l6  m12 s4 center allign"/ >
                            </div>
                          <p class="p-v-xs" >
                              <input type="checkbox" class="filled-in" id="test41" ng-model="isDateChecked" ng-change="changed()" />
                              <label for="test41">Date &amp; Time</label>
                            </p>
                            <div class="input-field col l4 s6" id="fromDiv" style="display:none">
                                <input id="from" type="text" class="datepicker" name="dateFrom" ng-model="dateFrom" ng-change="dateChanged()"   >
                                <label for="from">From :</label>
                            </div>
                            <div class="input-field col l4 s6" id="toDiv" style="display:none" >
                                <input id="to" type="text" class="datepicker" name="dateTo" />
                                <label for="to">To :</label>
                            </div>

                          <p class="p-v-xs">
                              <input type="checkbox" class="filled-in" id="test8" name="isReferral"  />
                              <label for="test8">URL - Referral</label>
                            </p>
                        <button style="float:right" ng-click="send()" class="btn waves-effect waves-light" type="submit">Request Data
                            <i class="material-icons right">send</i>
                          </button>

                    </form>

                  </div>
              </div>
          </div>
        </main>

    </div>
    <div class="left-sidebar-hover"></div>
    <!-- Javascripts -->
    <script src="assets/plugins/jquery/jquery-2.2.0.min.js"></script>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.2/angular.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.2/angular-animate.js"></script>
    <script src="assets/plugins/materialize/js/materialize.min.js"></script>
    <script src="assets/plugins/material-preloader/js/materialPreloader.min.js"></script>
    <script src="assets/plugins/jquery-blockui/jquery.blockui.js"></script>
    <script src="assets/plugins/bootstrap/bootstrap.min.js"></script>
    <script src="assets/plugins/bootstrap-datepicker/bootstrap-datepicker.min.js"></script>
    <script src="assets/js/alpha.min.js"></script>
    <script src="assets/js/pages/last.js"></script>

</body>

</html>
