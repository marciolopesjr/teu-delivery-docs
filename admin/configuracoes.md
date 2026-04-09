# Configurações do Sistema

As configurações controlam como o sistema se comporta: desde as taxas cobradas por entrega até as regras de quais pedidos podem ser atendidos.

Para acessar: **Menu lateral → Configurações**

---

## Dados da Associação / Empresa

| Campo | Descrição |
|---|---|
| Nome | Nome da associação ou da plataforma |
| E-mail | E-mail de contato |
| Telefone | Telefone principal |
| Endereço | Endereço da sede |
| Fuso horário | Timezone usado nos registros (ex: `America/Sao_Paulo`) |
| Raio de atendimento (km) | Distância máxima que o sistema atende |

---

## Taxas e Repasses

O sistema usa uma tabela de taxas por distância (em km). Cada faixa define:

- **Até quantos km** essa taxa se aplica
- **Taxa cobrada do cliente** (em R$)
- **Repasse para o motoboy** (em R$)

**Exemplo:**

| Até (km) | Taxa do cliente | Repasse motoboy |
|---|---|---|
| 3 km | R$ 8,00 | R$ 6,00 |
| 7 km | R$ 12,00 | R$ 9,00 |
| 15 km | R$ 18,00 | R$ 14,00 |

> Estas taxas se aplicam a todos os clientes que não tenham uma tabela personalizada configurada individualmente.

---

## Regras de Despacho

| Configuração | O que faz |
|---|---|
| **Despacho automático** | Liga/desliga o despacho automático. Se desligado, o admin atribui manualmente |
| **Estratégia de despacho** | **Proximidade**: envia para o motoboy mais próximo. **Fila**: envia em ordem de espera |
| **Tempo para aceitar (min)** | Quantos minutos o motoboy tem para aceitar antes do sistema tentar outro |
| **Máx. pedidos por viagem** | Quantos pedidos um motoboy pode pegar em uma só saída |
| **Permitir recusa** | Se os motoboys podem recusar um pedido despachado |

---

## Restrições de Distância

| Configuração | O que faz |
|---|---|
| **Limitar distância de entrega** | Se ativo, o sistema recusa pedidos cujo destino está além do limite |
| **Distância máxima de entrega (km)** | O limite máximo para o destino da entrega |
| **Limitar distância de coleta** | Limita de onde o sistema aceita coletas |
| **Raio máximo de coleta (km)** | O limite para o ponto de origem do pedido |

---

## Configurações de Faturamento (Clientes)

| Configuração | O que faz |
|---|---|
| **Dias de tolerância para inadimplência** | Quantos dias após o vencimento o sistema aguarda antes de suspender um cliente |
| **Permitir cliente ver localização do motoboy** | Se o cliente pode ver no mapa onde o motoboy está durante a entrega |

---

## Taxa de Retorno

Se um item precisar ser devolvido ao remetente:

| Configuração | O que faz |
|---|---|
| **Estratégia de retorno** | **Calculada**: recalcula a rota. **Fixa**: usa o valor fixo abaixo. **Grátis**: sem custo |
| **Taxa fixa de retorno (R$)** | Valor cobrado quando a estratégia for "fixa" |

