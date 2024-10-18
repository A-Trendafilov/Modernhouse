; (function (l) {
    var repo = '/' + l.pathname.split('/')[1];

    function redirect() {
        l.replace(l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') + repo + '/?' +
            (l.pathname ? 'p=' + l.pathname.replace(/&/g, '~and~').replace(repo, '') : '') +
            (l.search ? '&q=' + l.search.slice(1).replace(/&/g, '~and~') : '') +
            (l.hash))
    }

    function resolve() {
        if (l.search) {
            var q = {};
            l.search.slice(1).split('&').forEach(function (v) {
                var a = v.split('=');
                q[a[0]] = a.slice(1).join('=').replace(/~and~/g, '&');
            });
            if (q.p !== undefined) {
                window.history.replaceState(null, null,
                    repo + (q.p || '') +
                    (q.q ? ('?' + q.q) : '') +
                    l.hash
                );
            }
        }
    }

    document.title === '404' ? redirect() : resolve();
}(window.location));
