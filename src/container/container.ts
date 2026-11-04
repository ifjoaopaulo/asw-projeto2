import { Container } from "inversify";
import { TYPES } from "./types";
import { EtherealMailProvider } from "../providers/EtherealMailProvider";
import { PrismaProductRepository } from "../repositories/PrismaProductRepository";
import { PrismaOrderRepository } from "../repositories/PrismaOrderRepository";
import { PaymentMethodRegistry } from "../payments/PaymentMethodRegistry";
import { NotificationService } from "../services/NotificationService";
import { OrderService } from "../services/OrderService";
import { OrderController } from "../controllers/OrderController";
import { PrismaClient } from "@prisma/client";
import { CreditCardPayment } from "../payments/CreditCardPayment";
import { DebitCardPayment } from "../payments/DebitCardPayment";
import { PixPayment } from "../payments/PixPayment";
import { InvalidEnvError } from "./errors";
import { ConsoleMailProvider } from "../providers/ConsoleMailProvider";
import { InMemoryOrderRepository } from "../repositories/InMemoryOrderRepository";

const env = process.env.APP_ENV;

export const container = new Container();

if (env === 'test') {
  container.bind(TYPES.MailProvider).to(ConsoleMailProvider).inSingletonScope();
  container.bind(TYPES.OrderRepo).to(InMemoryOrderRepository).inSingletonScope();
} else if (env === 'dev') {
  container.bind(TYPES.MailProvider).to(EtherealMailProvider).inSingletonScope();
  container.bind(TYPES.OrderRepo).to(PrismaOrderRepository).inSingletonScope();
} else {
  throw new InvalidEnvError('APP_ENV inválida!');
}

container.bind(TYPES.ProductRepo).to(PrismaProductRepository).inSingletonScope();
container.bind(TYPES.PaymentMethodReg).to(PaymentMethodRegistry);
container.bind(TYPES.NotificationService).to(NotificationService);
container.bind(TYPES.OrderService).to(OrderService);
container.bind(TYPES.OrderController).to(OrderController);
container.bind(TYPES.PaymentMethod).to(CreditCardPayment);
container.bind(TYPES.PaymentMethod).to(DebitCardPayment);
container.bind(TYPES.PaymentMethod).to(PixPayment);
container.bind(TYPES.PrismaClient).toConstantValue(new PrismaClient());
