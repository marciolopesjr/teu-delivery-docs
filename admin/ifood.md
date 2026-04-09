# Integração com o iFood

O sistema pode receber pedidos do iFood automaticamente. Quando ativada, essa integração captura os pedidos da plataforma iFood e os insere no sistema como pedidos normais, que serão despachados para os motoboys.

---

## Pré-requisitos

Para usar a integração com o iFood, você precisa:

1. Ter uma conta na plataforma iFood com acesso à API (tipo parceiro logístico)
2. Obter o token de autenticação junto ao iFood

---

## Configurando a Integração

1. No menu, acesse **Integrações**
2. Localize a seção **iFood**
3. Insira o **Token do iFood** fornecido pela plataforma
4. Salve as configurações

---

## Como funciona

Após configurado, o sistema verifica automaticamente por novos pedidos do iFood **a cada minuto** (via tarefa automática no servidor).

- Pedidos novos chegam e são inseridos no sistema automaticamente
- O fluxo de despacho para os motoboys acontece normalmente
- O administrador pode ver esses pedidos na lista de **Pedidos** com a origem identificada como "iFood"

---

## Verificar se a integração está funcionando

1. Veja se novos pedidos do iFood estão aparecendo na lista de **Pedidos**
2. Se nenhum pedido aparecer, verifique:
   - Se o token do iFood está correto e não expirou
   - Se a tarefa automática está rodando no servidor (ver [Cron Jobs](../instalacao/cron-jobs.md))
3. Em caso de dúvida, consulte os **Logs do sistema** (disponível via acesso técnico ao servidor)

---

## Renovação de Token

Tokens do iFood podem expirar. Se a integração parar de funcionar repentinamente:

1. Acesse o painel do iFood
2. Gere um novo token
3. Atualize em **Integrações → iFood** no sistema

