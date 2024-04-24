import { Controller, Get } from "@nestjs/common";

@Controller("/app")
export class AppController {

  @Get()
  getProperty() {
    return "i am working"
  }

  @Get("/get-pro")
  getProPro() {
    return "i am still working"
  }
}