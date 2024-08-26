<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    <link rel="stylesheet" href="{{ asset('js/browser/styles-34NUJ3H7.css') }}" />

    <title>Laravel</title>

</head>

<body>
    <script type="text/javascript" id="ng-event-dispatch-contract">
        (() => {
            function p(t, n, r, o, e, i, f, m) {
                return {
                    eventType: t,
                    event: n,
                    targetElement: r,
                    eic: o,
                    timeStamp: e,
                    eia: i,
                    eirp: f,
                    eiack: m,
                };
            }

            function u(t) {
                let n = [],
                    r = (e) => {
                        n.push(e);
                    };
                return {
                    c: t,
                    q: n,
                    et: [],
                    etc: [],
                    d: r,
                    h: (e) => {
                        r(p(e.type, e, e.target, t, Date.now()));
                    },
                };
            }

            function s(t, n, r) {
                for (let o = 0; o < n.length; o++) {
                    let e = n[o];
                    (r ? t.etc : t.et).push(e),
                        t.c.addEventListener(e, t.h, r);
                }
            }

            function c(t, n, r, o, e = window) {
                let i = u(t);
                e._ejsas || (e._ejsas = {}),
                    (e._ejsas[n] = i),
                    s(i, r),
                    s(i, o, !0);
            }
            window.__jsaction_bootstrap = c;
        })();
    </script>
    <app-root></app-root>
    <script src="{{ asset('js/browser/polyfills-SCHOHYNV.js') }} " type="module"></script>
    <script src="{{ asset('js/browser/main-OG3YO23V.js') }}" type="module"></script>
</body>

</body>

</html>
