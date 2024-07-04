# Suporte Técnico Júnior

## Estrutura do Projeto
-> index.html 
-> redirect.js 
-> style.css
-> suporte.md

## Link do Vídeo

[Vídeo explicativo](https://vimeo.com/976679900?share=copy)

## index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Redirection Page</title>
</head>
<body>
    <h1>Redirection in Progress...</h1>
    <script src="redirect.js"></script>
</body>
</html>

## redirect.js
<script>
<!--
function getURLParameters(url) {
    let params = new URL(url).searchParams;
    let paramStr = '';
    params.forEach((value, key) => {
        paramStr += `${key}=${value}&`;
    });
    return paramStr.slice(0, -1);
}

let currentURL = "https://www.lp.nemu.com.br/?utm_source=fb&utm_campaign=adset01%7C123&utm_medium=campanha01%7C1234&utm_content=ad%7C1234";
let redirectBaseURL = "https://suasaudemental.com.br/";
let redirectURL = redirectBaseURL + '?' + getURLParameters(currentURL);
window.location.href = redirectURL;
//-->
</script>

## Style.CSS
<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    border: none;
    outline: none;
    scroll-behavior: smooth;
    font-family: 'Poppins', sans-serif;
}
body {
    background-color: #f3f3f3;
    padding: 20px;
    text-align: center;
    font-size: 1rem;
}
.container {
    max-width: 600px;
    height: 150px;
    margin: 0 auto;
    background-color: #fff;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.274);
}
h1 {
    color: #03b6a7;
    text-shadow: 1px 1px 3px #000000bd;
}
</style>