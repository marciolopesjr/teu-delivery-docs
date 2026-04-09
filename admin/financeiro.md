# Financeiro e Faturamento

O sistema possui um módulo financeiro que registra automaticamente todas as transações geradas pelas entregas.

---

## Transações

Cada entrega concluída gera dois lançamentos automáticos:

1. **Débito para o cliente** — o valor que ele deve pela entrega
2. **Crédito para o motoboy** — o repasse que ele vai receber

Para visualizar:

1. No menu, clique em **Transações**
2. Use os filtros por data, motoboy ou cliente para encontrar os registros

---

## Faturamento de Clientes

O sistema pode gerar faturas mensais para as empresas clientes, consolidando todas as entregas realizadas no mês.

### Como funciona

- Todo dia, o sistema calcula as entregas do dia anterior e registra os valores devidos
- No final do mês, é possível gerar um resumo consolidado por cliente
- O administrador deve receber o pagamento externamente (Pix, boleto, etc.) e dar baixa manualmente

### Dando baixa em uma fatura

1. Acesse **Transações** ou o módulo de faturamento
2. Localize a fatura do cliente
3. Clique em **Marcar como Pago**
4. Confirme

---

## Relatório de Repasses aos Motoboys

Para saber quanto cada motoboy deve receber no período:

1. No menu, clique em **Relatórios**
2. Selecione **Repasses por Motoboy**
3. Defina o período (data de início e fim)
4. Clique em **Gerar**
5. Para exportar, clique em **Baixar Excel**

O arquivo gerado mostrará o nome de cada motoboy, a quantidade de entregas e o valor total a receber.

> Ver mais detalhes em [Relatórios](./relatorios.md).

---

## Suspensão por Inadimplência

Se um cliente estiver com fatura em atraso além do limite configurado, o sistema pode suspender o acesso dele automaticamente. Essa função é controlada pelo número de dias de tolerância nas [Configurações](./configuracoes.md).

Para reativar um cliente suspenso:

1. Acesse **Usuários → Clientes**
2. Localize o cliente
3. Clique em **Reativar**

