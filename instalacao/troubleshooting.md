# Solução de Problemas Comuns

Este guia cobre os problemas mais frequentes e como resolvê-los.

---

## 1. "Banco de dados travado" (database is locked)

**Sintoma:** Erros de timeout ou mensagens de "database is locked" nos logs.

**Causas possíveis:**
- A tarefa semanal de otimização do banco não está rodando
- Muitas requisições simultâneas no servidor

**Soluções:**
1. Execute manualmente a otimização:
   ```bash
   php console.php db:optimize
   ```
2. Verifique se o Cron Job `db:optimize` está configurado (todo domingo às 04:00)
3. Certifique-se de que a pasta `database/` tem permissão de escrita (`chmod 775 database/`)

---

## 2. Pedidos do iFood não aparecem

**Sintoma:** Pedidos feitos no iFood não chegam no sistema.

**Soluções:**
1. Verifique se o Cron Job `ifood:poll-events` está rodando (a cada minuto)
2. Verifique se o token do iFood em **Integrações** está correto e não expirou
3. Consulte os logs do sistema (`logs/app.log`) e procure por mensagens com a palavra "iFood"

---

## 3. Erro 500 (erro genérico do servidor)

**Sintoma:** Usuários veem uma tela de erro ao tentar usar o sistema.

**Soluções:**
1. Acesse o arquivo `logs/app.log` no servidor para ver a mensagem de erro real
2. Verifique se o arquivo `.env` existe na raiz do backend e está preenchido corretamente
3. Confirme que as dependências foram instaladas (`composer install`)

---

## 4. Não consigo fazer login

**Sintoma:** A tela de login retorna erro mesmo com usuário e senha corretos.

**Soluções:**
1. Verifique se a URL da API está correta no arquivo `.env` do frontend (`VITE_API_URL`)
2. Verifique se o backend está acessível (tente abrir `https://seudominio.com/api/v1/health` no navegador)
3. Confirme que o `JWT_SECRET` no `.env` do backend não foi alterado após os usuários serem criados

---

## 5. Motoboy não recebe notificações

**Sintoma:** Um pedido foi despachado, mas o motoboy não recebeu notificação no celular.

**Soluções:**
1. Verifique se o motoboy está com o aplicativo/navegador aberto
2. Confirme que as notificações estão permitidas no celular do motoboy
3. Verifique se as chaves VAPID estão configuradas corretamente no `.env`
4. O motoboy pode verificar manualmente acessando o dashboard e clicando em **Atualizar**

---

## 6. Localização do motoboy não atualiza no mapa

**Sintoma:** O mapa mostra uma posição desatualizada do motoboy.

**Soluções:**
1. Verifique se o motoboy permitiu o acesso à **localização GPS** no celular
2. Em alguns celulares, o GPS é desativado quando o aplicativo fica em segundo plano. Oriente o motoboy a manter a tela ativa
3. A posição atualiza a cada alguns segundos — aguarde e recarregue a página

---

## 7. Como ver os logs do sistema

Os logs ficam no arquivo `logs/app.log` na raiz do backend. Acesse via FTP, SSH ou pelo gerenciador de arquivos da hospedagem.

Para buscar apenas erros recentes:

```bash
tail -n 100 logs/app.log | grep -i "error"
```

---

## Ainda com problemas?

Entre em contato com o suporte técnico da CODEMAKERS.

