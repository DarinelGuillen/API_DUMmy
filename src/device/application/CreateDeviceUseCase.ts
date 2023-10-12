import { Device } from "../domain/device";
import { DeviceRepository } from "../domain/DeviceRepository";

export class CreateDeviceUseCase {
  constructor(readonly deviceRepository: DeviceRepository) {}

  async run( idUser: number, name: string, description: string, status: boolean): Promise<Device | null> {
    try {
      const device = await this.deviceRepository.createDevice(idUser, name, description, status);
      return device;
    } catch (error) {
      return null;
    }
  }
}
