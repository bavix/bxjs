<!DOCTYPE html>
<html>
    <head>
        <title>bx project</title>
        <meta charset="utf-8" />
        <style> .red { color: red; } </style>
    </head>
    <body>

        <h1 id="hello">Click me!</h1>

        <script src="../src/bx.js"></script>
        <script src="../src/polyfill/watch.js"></script>
        <script src="../src/polyfill/localStorage.js"></script>
        <script src="../src/el.js"></script>
        <script src="../src/fetch.js"></script>

        <script>

            bx.ready(function () {
                bx.el.one(bx.el.id('hello'), 'click', function (e) {
                    console.log(e);
                    this.classList = 'red';
                });

                bx.each('hello world', function (_, v) {
                    console.log(v);
                });
            });

        </script>

    </body>
</html>