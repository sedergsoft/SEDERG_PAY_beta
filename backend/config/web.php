<?php

// Web application configuration for Yii2

return [
    'id' => 'sederg-pay-api',
    'basePath' => dirname(__DIR__),
    'bootstrap' => ['log'],
    'aliases' => [
        '@bower' => '@vendor/bower-asset',
        '@npm'   => '@vendor/npm-asset',
    ],
    'components' => [
        'request' => [
            'parsers' => [
                'application/json' => 'yii\\web\\JsonParser',
            ],
        ],
        'response' => [
            'format' => yii\\web\\Response::FORMAT_JSON,
        ],
        'cache' => [
            'class' => 'yii\\caching\\FileCache',
        ],
        'user' => [
            'identityClass' => 'app\\models\\User',
            'enableAutoLogin' => false,
        ],
        'errorHandler' => [
            'errorAction' => 'site/error',
        ],
        'mailer' => [
            'class' => 'yii\\swiftmailer\\Mailer',
            'useFileTransport' => true,
        ],
        'log' => [
            'traceLevel' => YII_DEBUG ? 3 : 0,
            'targets' => [
                [
                    'class' => 'yii\\log\\FileTarget',
                    'levels' => ['error', 'warning'],
                ],
            ],
        ],
        'db' => require(__DIR__ . '/db.php'),
    ],
    'modules' => [
        'api' => [
            'class' => 'app\\modules\\api\\Module',
        ],
    ],
];