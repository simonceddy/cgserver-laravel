<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta charset="utf-8"/>
    <link rel="icon" href="/favicon.ico"/>
    <meta name="viewport" content="width=device-width,initial-scale=1"/>
    <meta name="theme-color" content="#000000"/>
    <meta name="description" content="Web site created using create-react-app"/>
    <link rel="apple-touch-icon" href="/logo192.png"/>
    <link rel="manifest" href="/manifest.json"/>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Moon+Dance&family=Quintessential&family=Sen:wght@400;700&display=swap" rel="stylesheet">
    <title>@yield('title', 'Christine Grayden')</title>
    @viteReactRefresh
    @vite('resources/js/shared/index.js')
    @vite('resources/js/shared/styles/index.css')
    @yield('vite')
</head>
<body style="visibility: hidden;">
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root">
        @yield('app')
    </div>
    @include('cookie-consent::index')
    <script>
        0;
    </script>

@stack('scripts')
</body></html>
