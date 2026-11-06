import { injectable } from "inversify";
import logger from "../lib/logger";
import { IMailProvider, Mail } from "./IMailProvider";

@injectable()
export class ConsoleMailProvider implements IMailProvider {
  async sendMail(mail: Mail): Promise<string | null> {
    logger.info(
      `[CONSOLE MAIL PROVIDER] ` +
        `Para: ${mail.to} ` +
        `${mail.subject} ` +
        `${mail.text}`,
    );

    return null;
  }
}
