<?php

require_once 'twitter-php/twitter.class.php';

//Twitter OAuth Settings, enter your settings here:
$CONSUMER_KEY = 'LaGQ6vuOy348ZyWIBsOuRte4m';
$CONSUMER_SECRET = 'MLD51Gd4zTfBlOQ1WrSOeVSJnlaHFyrnEcGagAlIY35nuVo5hE';
$ACCESS_TOKEN = '793173274339446784-dlcUs0WrwSgG1Rk4I1e3vTipdMv4Q1j';
$ACCESS_TOKEN_SECRET = 'xGh94n5x78WZ38uTQ8qhQE8U5lhst88pNyD4ezscrsG40';

// ENTER HERE YOUR CREDENTIALS (see readme.txt)
$twitter = new Twitter($CONSUMER_KEY, $CONSUMER_SECRET, $ACCESS_TOKEN, $ACCESS_TOKEN_SECRET);

// retrieve data
$q = $_GET['screen_name'];
$count = $_GET['count'];
$api = 'statuses/user_timeline';

// api data
$params = array(
	'screen_name' => $q,
	'count' => $count,
  'includes_rts' => true
);

$results = $twitter->request($api, 'GET', $params);

// output as JSON
echo json_encode($results);

?>
