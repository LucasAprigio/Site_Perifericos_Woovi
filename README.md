<p align="center">
  <img src="https://pbs.twimg.com/profile_images/1773494136676474880/cYUaHtQ1_400x400.jpg" alt="Integração">
</p>

# Integração com API de cobrança Woovi ​🚀​

## Neste repositório, clonei meu projeto "Site Periféricos" e integrei a criação de cobranças via API da Woovi. Ao clicar em "Pagar com Pix", uma cobrança é gerada no sistema da Woovi. O projeto foi desenvolvido utilizando HTML, CSS e JavaScript, com o objetivo de aprender sobre integrações de API e aprimorar minhas habilidades em desenvolvimento web.

## Instrução de Instalação ⚙️​
### Pré Requisitos 📍
1. **Ter o [Node](https://nodejs.org/pt) instalado**
2. **Ter uma conta na [Woovi](https://app.woovi.com/register)**

### Etapas ​📝​
1. **Criar sua API de teste na [PLATAFORMA](https://developers.openpix.com.br/docs/apis/getting-started-api#tag/webhook/paths/~1api~1v1~1webhook~1ips/get)**
2. **Colocar o AppID/Token no header Authorization da requisição.**
```bash
{
  "Authorization": "<AppID>"
}
```
