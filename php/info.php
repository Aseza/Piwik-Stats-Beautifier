<?php include 'Piwik.php';?>
<?php
use Httpful\Request;

require(__DIR__ . '/vendor/autoload.php');
use VisualAppeal\Piwik;


$firefoxVisitRequest ='VisitTime.getVisitInformationPerLocalTime&segment=browserCode==';
$safariVisitRequest ='VisitTime.getVisitInformationPerLocalTime&segment=browserCode==';
$chromeVisitRequest ='VisitTime.getVisitInformationPerLocalTime&segment=browserCode==';
$chromeMobileVisitRequest='VisitTime.getVisitInformationPerLocalTime&segment=browserCode==';
$visitsRequest='VisitsSummary.getVisits';
$smartphoneVisitRequest='VisitTime.getVisitInformationPerLocalTime&segment=deviceType==smartphone';
$desktopVisitRequest='VisitTime.getVisitInformationPerLocalTime&segment=deviceType==desktop';
$tabletVisitRequest='VisitTime.getVisitInformationPerLocalTime&segment=deviceType==tablet';
$phabletVisitRequest='VisitTime.getVisitInformationPerLocalTime&segment=deviceType==phablet';
$DfirefoxVisitRequest='VisitTime.getByDayOfWeek&segment=browserCode==';
$DsafariVisitRequest='VisitTime.getByDayOfWeek&segment=browserCode==';
$DchromeVisitRequest='VisitTime.getByDayOfWeek&segment=browserCode==';
$DchromeMobileVisitRequest='VisitTime.getByDayOfWeek&segment=browserCode==';
$DsmartphoneVisitRequest='VisitTime.getByDayOfWeek&segment=deviceType==smartphone';
$DdesktopVisitRequest='VisitTime.getByDayOfWeek&segment=deviceType==desktop';
$DtabletVisitRequest='VisitTime.getByDayOfWeek&segment=deviceType==tablet';
$DphabletVisitRequest='VisitTime.getByDayOfWeek&segment=deviceType==phablet';
$referreRequest='Referrers.getReferrerType';
$pageUrlsRequest='Actions.getPageUrls';

//Getting Parameters,
//Fixed Dates
$dateFrom = $_GET['dateFrom'];
$dateTo = $_GET['dateTo'];
$isChrome = $_GET['isChrome'];
$isChromeMobile = $_GET['isChromeMobile'];
$isFirefox = $_GET['isFirefox'];
$botValue = $_GET['botValue'];


///Other Params
$isSafari = $_GET['isSafari'];
if($isSafari == 'true'){
  $safariVisitRequest = $safariVisitRequest.'SF';
  $DsafariVisitRequest= $DsafariVisitRequest.'SF';
}if($isChrome == 'true'){
  $chromeVisitRequest = $chromeVisitRequest.'CH';
  $DchromeVisitRequest= $DchromeVisitRequest.'CH';
}if($isChromeMobile == 'true'){
  $chromeMobileVisitRequest = $chromeMobileVisitRequest.'CM';
  $DchromeMobileVisitRequest= $DchromeMobileVisitRequest.'CM';
}if($isFirefox == 'true'){
  $firefoxVisitRequest = $firefoxVisitRequest.'FF';
  $DfirefoxVisitRequest= $DfirefoxVisitRequest.'FF';
}



$piwik = new Piwik('https://mouloueamine.innocraft.cloud', '3816c8118222ee081e9b435149717240', 1, Piwik::FORMAT_JSON, Piwik::PERIOD_RANGE, null, $dateFrom, $dateTo);
$piwik->setLanguage('fr');
$totalVisitsNumber = $piwik->getVisits();
$info = $piwik->getBulkRequest([
  $firefoxVisitRequest,
  $safariVisitRequest,
  $chromeVisitRequest,
  $chromeMobileVisitRequest,
  $visitsRequest,
  $smartphoneVisitRequest,
  $desktopVisitRequest,
  $tabletVisitRequest,
  $phabletVisitRequest,
  $DfirefoxVisitRequest,
  $DsafariVisitRequest,
  $DchromeVisitRequest,
  $DchromeMobileVisitRequest,
  $DsmartphoneVisitRequest,
  $DdesktopVisitRequest,
  $DtabletVisitRequest,
  $DphabletVisitRequest,
  $referreRequest,
  $pageUrlsRequest
]);
echo json_encode($info);
?>
