# Tarefas Automáticas (Cron Jobs)

O sistema depende de tarefas agendadas para funcionar corretamente. Essas tarefas executam processos importantes como importar pedidos do iFood, gerar faturas e fazer manutenção do banco de dados.

Sem essas tarefas configuradas, partes do sistema não funcionarão automaticamente.

---

## Como configurar

As tarefas são configuradas no **Crontab do servidor** (geralmente disponível no painel da hospedagem, ex: Hostinger, cPanel).

Substitua `/caminho/completo/para/api` pelo caminho real onde o backend está instalado no servidor.

---

## Tabela de tarefas

| Frequência | Comando | Por que é importante |
|---|---|---|
| A cada 1 minuto | `php /caminho/api/console.php ifood:poll-events` | Importa novos pedidos do iFood. Sem isso, os pedidos do iFood não entram no sistema |
| Todo dia às 00:00 | `php /caminho/api/console.php billing:generate-invoices` | Gera os lançamentos financeiros diários dos clientes |
| Todo dia às 01:00 | `php /caminho/api/console.php billing:suspend-overdue` | Suspende o acesso de clientes inadimplentes |
| Dia 1 de cada mês às 02:00 | `php /caminho/api/console.php saas:generate-invoice` | Gera a fatura do mês de uso da plataforma |
| Todo domingo às 04:00 | `php /caminho/api/console.php db:optimize` | Faz manutenção e limpeza do banco de dados |

---

## Formato para o crontab

```cron
* * * * *   php /caminho/api/console.php ifood:poll-events
0 0 * * *   php /caminho/api/console.php billing:generate-invoices
0 1 * * *   php /caminho/api/console.php billing:suspend-overdue
0 2 1 * *   php /caminho/api/console.php saas:generate-invoice
0 4 * * 0   php /caminho/api/console.php db:optimize
```

---

## Como verificar se as tarefas estão rodando

1. Acesse o painel da hospedagem e veja o histórico do Crontab
2. Ou verifique o arquivo de log em `logs/app.log` no servidor — as tarefas registram seu resultado lá

---

## Possíveis problemas

| Sintoma | Causa provável |
|---|---|
| Pedidos do iFood não aparecem | Tarefa `ifood:poll-events` não está rodando ou token expirou |
| Faturas não são geradas | Tarefa `billing:generate-invoices` não configurada |
| Banco de dados com erros de travamento | Tarefa `db:optimize` não rodando semanalmente |

