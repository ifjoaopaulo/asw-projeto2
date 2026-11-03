import { IMailProvider, Mail } from "./IMailProvider";

export class ConsoleMailProvider implements IMailProvider {
  async sendMail(mail: Mail): Promise<string | null> {
    return
  }
}
