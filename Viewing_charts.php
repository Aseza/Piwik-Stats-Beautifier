<!DOCTYPE html>
<html lang="en">


<head>

    <!-- Title -->
    <title>Charts - Beautified</title>

    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <meta charset="UTF-8">
    <meta name="description" content="Responsive Admin Dashboard Template" />
    <meta name="keywords" content="admin,dashboard" />
    <meta name="author" content="Steelcoders" />
    <!-- Styles -->
    <link href="assets/css/bootstrap.css" rel="stylesheet" type="text/css" />
    <link href="assets/css/bootstrap-datepicker.min.css" rel="stylesheet" type="text/css" />
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

<body >
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
                                    <li><a href="Entering_Metrics.php" >Entering Metrics</a></li>
                                    <li><a class="active-page" >Viewing Charts</a></li>
                                    <li><a href="layout-hidden-sidebar.html">Hidden Sidebar</a></li>
                                    <li><a href="layout-right-sidebar.html">Right Sidebar</a></li>
                                </ul>
                            </div>
                        </li>
                </ul>
            </div>
        </aside>
        <main class="mn-inner">
          <div class="row ">
          <div class="col l12 m12 s12">
          <div class="card">
              <div class="card-content center allign">
                  <span class="card-title">Graphe Par Heures</span><br>
                      <div class="preloader-wrapper big active center allign preloader"  >
                          <div class="spinner-layer spinner-blue-only">
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
                      <div>
                        <canvas id="myChart"></canvas>
                      </div>
                  </div>
              </div>
          </div>
          <div class="col l7 m8 s12">
            <div class="card ">
                <div class="card-content center allign">
                    <span class="card-title">Graphe Par Jours</span><br>
                    <div class="row ">
                        <div class="preloader-wrapper big active center allign preloader"  >
                            <div class="spinner-layer spinner-blue-only">
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
                        <div>
                          <canvas id="myChart2"></canvas>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          <div class="col l5 m6 s12">
            <div class="card ">
                <div class="card-content center allign">
                    <span class="card-title">Graphe D'Entrées</span><br>
                    <div class="row ">
                        <div class="preloader-wrapper big active center allign preloader"  >
                            <div class="spinner-layer spinner-blue-only">
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
                        <div width="400" height="400">
                          <canvas id="myChart3"></canvas>
                        </div>
                        <div>
-----------
<div>
  -----------
</div>
                        </div>

                        <div>
                          Ce graphe decrit le type d'entrés a notre site web, les entrées sont toutes directes
                           car notre site n'est pas encore capturé ou mis en recherche par Google, ou autre moteur de recherche.
                        </div>
                    </div>
                </div>
            </div>
          </div>
          <div class="col l12 m12 s12">
            <div class="card " >
                <div class="card-content center allign">
                    <span class="card-title">Graphe De Visit - Time</span><br>
                    <div class="row ">
                        <div class="preloader-wrapper big active center allign preloader"  >
                            <div class="spinner-layer spinner-blue-only">
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
                        <div>
                          <canvas id="myChart4"></canvas>
                        </div>

                    </div>
                </div>
            </div>
          </div>
          <div class="col l9 m6 s12" >
            <div class="card " >
                <div class="card-content center allign">
                    <span class="card-title">Graphe De Visit - Time</span><br>
                    <div class="row ">
                        <div class="preloader-wrapper big active center allign preloader"  >
                            <div class="spinner-layer spinner-blue-only">
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
                        <div id="keywords">
                          Go
                        </div>
                    </div>
                </div>
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
    <script src="assets/plugins/bootstrap-datepicker/bootstrap-datepicker.min.js"></script>    <link href="assets/css/bootstrap.css" rel="stylesheet" type="text/css" />

        <link href="assets/css/bootstrap-datepicker.min.css" rel="stylesheet" type="text/css" />

    <script src="assets/js/alpha.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.1.0/Chart.min.js"></script>
    <script type="text/javascript">
      var botValue = <?php
      if (isset($_POST['botValue']) && !empty($_POST['botValue'])) {
          echo $_POST['botValue'];
      } else {
          echo 0;
      }
        ?>;
        var isChrome = <?php
        if (isset($_POST['isChrome'])) {
            echo '"true"';
        } else {
            echo '"false"';
        }?>;
        var isReferral = <?php
        if (isset($_POST['isReferral'])) {
            echo '"true"';
        } else {
            echo '"false"';
        }?>;
      var isChromeMobile = <?php
      if (isset($_POST['isChromeMobile'])) {
          echo '"true"';
      } else {
          echo '"false"';
      }?>;
      var isFirefox = <?php
      if (isset($_POST['isFirefox'])) {
          echo '"true"';
      } else {
          echo '"false"';
      }?>;
      var isSafari = <?php
      if (isset($_POST['isSafari'])) {
          echo '"true"';
      } else {
          echo '"false"';
      }?>;
      var dateFrom = <?php
      if (isset($_POST["dateFrom"]) && !empty($_POST['dateFrom'])) {
          echo '"'.$_POST['dateFrom'].'"';
      } else {
          echo 0;
      }?>;
      var dateTo = <?php
      if (isset($_POST["dateTo"]) && !empty($_POST['dateTo'])) {
          echo '"'.$_POST['dateTo'].'"';
      } else {
          echo 0;
      }?>;
    </script>
    <script src="assets/plugins/sweetalert/sweetalert.min.js"></script>
    <script src="assets/js/pages/charts.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jqcloud/1.0.4/jqcloud-1.0.4.min.js"></script>

    <!-- <script src="getData.js"></script> -->


</body>

</html>
