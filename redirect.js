// Função para obter os parâmetros da URL atual
function getURLParameters(url) {
    let params = new URL(url).searchParams
    let paramStr = ''
    params.forEach((value, key) => {
        paramStr += `${key}=${value}&`
    })
    // Remove o último '&'
    return paramStr.slice(0, -1)
}

// URL atual com os parâmetros
let currentURL = 'https://www.lp.nemu.com.br/?utm_source=fb&utm_campaign=adset01%7C123&utm_medium=campanha01%7C1234&utm_content=ad%7C1234'

// URL base de redirecionamento
let redirectBaseURL = 'https://suasaudemental.com.br/'

// Construir a URL completa de redirecionamento
let redirectURL = redirectBaseURL + '?' + getURLParameters(currentURL)

// Redirecionar para a nova URL
window.location.href = redirectURL
