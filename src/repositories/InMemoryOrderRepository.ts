import { injectable } from "inversify";
import { IOrderRepository } from "./IOrderRepository";
import { OrderLine, Order } from "../domain/Order";

@injectable()
export class InMemoryOrderRepository implements IOrderRepository {
  private orders: Order[] = [];
  private idCounter: number = 0;

  async create(customer: string, items: OrderLine[], total: number): Promise<Order> {
    const order: Order = {
      id: this.idCounter++,
      customer: customer,
      items: items,
      total: total,
      status: 'confirmed',
    };

    this.orders.push(order);

    return order;
  }
}
