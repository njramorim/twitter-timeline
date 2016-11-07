<?php
    require_once 'twitter-php/twitter.class.php';
    require_once 'credentials.php';

    function get_end_point() {
        if (isset($_GET['get_info'])) {
            return 'users/show';
        }

        return 'statuses/user_timeline';
    }

    function get_params() {
        if (isset($_GET['get_info'])) {
            $params = array(
                'screen_name'  => $_GET['screen_name'],
            );
        }

        else {
            $params = array(
                'screen_name' => $_GET['screen_name'],
                'count' => $_GET['count'],
                'includes_rts' => false,
                'exclude_replies' => true,
            );

            if (isset($_GET['max_id'])) {
                $params['max_id'] = $_GET['max_id'];
            }
        }

        return $params;
    }

    $twitter = new Twitter(
        CONSUMER_KEY,
        CONSUMER_SECRET,
        ACCESS_TOKEN,
        ACCESS_TOKEN_SECRET
    );

    $end_point = get_end_point();
    $params = get_params();

    echo json_encode($twitter->request($end_point, 'GET', $params));

