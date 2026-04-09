# Variáveis de Ambiente (.env)

O arquivo `.env` fica na raiz do backend e contém todas as configurações sensíveis do sistema. Ele nunca deve ser enviado para o repositório Git.

Para criar: copie o arquivo `.env.example` e renomeie para `.env`.

---

## Variáveis obrigatórias

| Variável | Descrição | Exemplo |
|---|---|---|
| `APP_ENV` | Ambiente de execução | `production` ou `development` |
| `APP_DEBUG` | Modo debug (não ative em produção) | `false` |
| `APP_BASE_URL` | URL pública do backend | `https://api.seudominio.com` |
| `DB_PATH` | Caminho absoluto para o arquivo do banco de dados SQLite | `/home/usuario/backend/database/delivery.sqlite3` |
| `JWT_SECRET` | Chave secreta para autenticação. Use uma string longa e aleatória | `abc123...xyz` (mín. 32 caracteres) |
| `CORS_ALLOWED_ORIGINS` | Domínios autorizados a acessar a API | `https://app.seudominio.com` |

---

## Google Maps

| Variável | Descrição |
|---|---|
| `GOOGLE_MAPS_API_KEY` | Chave da API do Google Maps. Necessária para calcular distâncias e rotas |

Para obter a chave: acesse [Google Cloud Console](https://console.cloud.google.com), crie um projeto, ative a API "Distance Matrix" e gere uma chave.

---

## Notificações Push (opcional)

As notificações push (avisos no celular para os motoboys) usam o padrão Web Push com chaves VAPID.

| Variável | Descrição |
|---|---|
| `VAPID_PUBLIC_KEY` | Chave pública VAPID |
| `VAPID_PRIVATE_KEY` | Chave privada VAPID |

Para gerar as chaves, execute no servidor:

```bash
php generate_vapid_keys.php
```

---

## Integração SaaS (apenas se aplicável)

Se o sistema for gerenciado pela software house através do painel central:

| Variável | Descrição |
|---|---|
| `SAAS_INSTANCE_ID` | Identificador único desta instalação |
| `SAAS_WEBHOOK_URL` | URL do painel da software house para receber notificações de fatura |
| `SAAS_WEBHOOK_SECRET` | Chave secreta para autenticar a comunicação entre a instância e o painel |

---

## Despacho

| Variável | Descrição | Padrão |
|---|---|---|
| `DISPATCH_AUTODISPATCH_ENABLED` | Liga ou desliga o despacho automático | `1` (ligado) |

---

## Exemplo completo do .env

```ini
APP_ENV=production
APP_DEBUG=false
APP_BASE_URL=https://api.seudominio.com

DB_DRIVER=sqlite
DB_PATH=/home/usuario/backend/database/delivery.sqlite3

JWT_SECRET=troque_por_uma_string_super_longa_e_aleatoria
JWT_ALGORITHM=HS256
JWT_EXPIRATION=86400

CORS_ALLOWED_ORIGINS=https://app.seudominio.com

GOOGLE_MAPS_API_KEY=SUA_CHAVE_AQUI

DISPATCH_AUTODISPATCH_ENABLED=1
```

