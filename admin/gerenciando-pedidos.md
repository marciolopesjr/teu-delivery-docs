# Gerenciando Pedidos

O administrador tem controle total sobre os pedidos na plataforma.

---

## Visualizando os Pedidos

1. No menu lateral, clique em **Pedidos**
2. A lista exibe todos os pedidos com:
   - Número do pedido
   - Cliente solicitante
   - Status atual
   - Motoboy atribuído (se houver)
   - Data/hora de criação

### Status de um Pedido

| Status | Significado |
|---|---|
| **Pendente** | Pedido recebido, aguardando um motoboy aceitar |
| **Despachado** | Um motoboy foi notificado |
| **Em Coleta** | Motoboy a caminho do ponto de coleta |
| **Em Rota** | Motoboy com o pacote a caminho do destino |
| **Entregue** | Entrega concluída com sucesso |
| **Cancelado** | Pedido cancelado |

---

## Criando um Pedido Manualmente

O administrador pode criar pedidos diretamente, sem precisar que o cliente acesse o sistema.

1. Clique em **Novo Pedido**
2. Selecione o **Cliente** responsável pelo pedido
3. Informe o **endereço de coleta** (de onde o motoboy vai buscar)
4. Informe o **endereço de entrega** (destino)
5. Adicione observações se necessário
6. Clique em **Criar Pedido**

O sistema vai automaticamente calcular a taxa e tentar despachar o pedido para um motoboy disponível.

---

## Atribuindo um Motoboy Manualmente

Se o despacho automático não encontrar um motoboy, o administrador pode atribuir manualmente:

1. Abra o pedido clicando no seu número
2. Clique em **Atribuir Motoboy**
3. Selecione um motoboy da lista
4. Confirme

---

## Cancelando um Pedido

1. Abra o pedido
2. Clique em **Cancelar Pedido**
3. Confirme a ação

> Pedidos já entregues não podem ser cancelados.

---

## Despacho Automático

Quando um pedido é criado, o sistema tenta automaticamente encontrar e notificar o motoboy mais próximo disponível.

- Se nenhum motoboy aceitar dentro do tempo configurado, o pedido volta ao status **Pendente**
- O administrador pode ajustar o tempo de espera e as regras de despacho em [Configurações do Sistema](./configuracoes.md)
