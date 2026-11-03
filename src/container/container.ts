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

export const container = new Container();

container.bind(TYPES.MailProvider).to(EtherealMailProvider).inSingletonScope();
container.bind(TYPES.ProductRepo).to(PrismaProductRepository).inSingletonScope();
container.bind(TYPES.OrderRepo).to(PrismaOrderRepository).inSingletonScope();
container.bind(TYPES.PaymentMethodReg).to(PaymentMethodRegistry);
container.bind(TYPES.NotificationService).to(NotificationService);
container.bind(TYPES.OrderService).to(OrderService);
container.bind(TYPES.OrderController).to(OrderController);
container.bind(TYPES.PaymentMethod).to(CreditCardPayment);
container.bind(TYPES.PaymentMethod).to(DebitCardPayment);
container.bind(TYPES.PaymentMethod).to(PixPayment);
container.bind(TYPES.PrismaClient).toConstantValue(new PrismaClient());
