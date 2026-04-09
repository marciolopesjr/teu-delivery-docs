# Guia de Instalação Completo

Este guia é destinado ao responsável técnico por instalar e colocar o sistema no ar.

---

## Pré-requisitos

Antes de começar, certifique-se que o servidor possui:

- **PHP 8.1 ou superior**
- **Extensão SQLite3 ativada no PHP**
- **Composer** (gerenciador de dependências PHP)
- **Node.js 18 ou superior** (para o frontend)
- **npm** (instalado junto com o Node.js)
- Acesso SSH ou FTP ao servidor

---

## Estrutura do projeto

O projeto é dividido em dois repositórios:

| Repositório | Função |
|---|---|
| `teu-delivery-backend` | API e regras de negócio |
| `teu-delivery-frontend` | Interface web (clientes, motoboys, admin) |

---

## 1. Instalando o Backend

### 1.1. Clonar o repositório

```bash
git clone https://github.com/sua-org/teu-delivery-backend.git
cd teu-delivery-backend
```

### 1.2. Instalar as dependências

```bash
composer install
```

### 1.3. Criar e configurar o arquivo `.env`

```bash
cp .env.example .env
```

Edite o `.env` com as configurações corretas. Veja o guia de [Variáveis de Ambiente](./variaveis-de-ambiente.md).

**Variáveis obrigatórias:**

```ini
APP_ENV=production
DB_PATH=/caminho/absoluto/para/database/delivery.sqlite3
JWT_SECRET=uma_string_longa_e_aleatoria_aqui
CORS_ALLOWED_ORIGINS=https://seu-frontend.com
GOOGLE_MAPS_API_KEY=sua_chave_google
```

> O `DB_PATH` deve ser o **caminho absoluto** no servidor (ex: `/home/usuario/backend/database/delivery.sqlite3`).

### 1.4. Criar as pastas necessárias e ajustar permissões

```bash
mkdir -p database logs
chmod -R 775 database/ logs/
```

### 1.5. Executar o setup inicial

```bash
php setup.php
```

O script irá:
1. Executar as migrações (criar o banco de dados)
2. Perguntar o nome de usuário e senha do **admin mestre**
3. Perguntar os dados básicos da empresa (nome, e-mail, fuso horário)

Guarde bem as credenciais do admin criadas nessa etapa.

### 1.6. (Opcional) Otimizar o banco de dados

```bash
php console.php db:optimize
```

---

## 2. Instalando o Frontend

### 2.1. Clonar o repositório

```bash
git clone https://github.com/sua-org/teu-delivery-frontend.git
cd teu-delivery-frontend
```

### 2.2. Instalar as dependências

```bash
npm install
```

### 2.3. Configurar o arquivo `.env`

Crie um arquivo `.env` na raiz do frontend com a URL da API:

```ini
VITE_API_URL=https://seudominio.com/api/v1
```

### 2.4. Gerar a build de produção

```bash
npm run build
```

O resultado estará na pasta `dist/`. Faça o upload do conteúdo dessa pasta para a pasta pública do domínio no servidor web.

---

## 3. Configurar o servidor web (.htaccess)

Os arquivos `.htaccess` já estão incluídos em ambos os projetos e configuram o redirecionamento necessário para o funcionamento da API e do frontend de página única (SPA).

Certifique-se de que o servidor web (Apache) tem o módulo `mod_rewrite` ativado.

---

## 4. Configurar as tarefas automáticas (Cron Jobs)

Ver o guia completo em [Cron Jobs](./cron-jobs.md).

---

## 5. Primeiro acesso

1. Acesse o frontend pelo navegador
2. Faça login com o usuário **admin** criado no passo 1.5
3. Nas **Configurações**, ajuste as taxas de entrega e as regras de despacho antes de liberar o uso
4. Cadastre os motoboys e os clientes

