import { AxiosRequestConfig } from "axios";
import usuario from '@/classes/Usuario';
import { RouteLocationNormalizedLoaded, useRoute } from "vue-router";

class ApiClient {
  private route: RouteLocationNormalizedLoaded;

  constructor() {
    this.route = useRoute(); // é usado para saber de qual rota está saindo a requisição
  }

  public getBaseUrl(): string {
    return import.meta.env.VITE_API_URL as string;
  }

  public getSistema(): string {
    const sistema = this.route?.meta?.sistema;
    return (sistema ?? import.meta.env.VITE_IDENTIFICADOR) as string;
  };

  public transformOptions(
    options: AxiosRequestConfig
  ): Promise<AxiosRequestConfig> {

    options.headers = {
      ...options.headers,
      "Dadalto": this.getSistema(),
      Accept: 'application/json'
    };

    if (usuario.value?.Token)
      options.headers.Authorization = usuario.value.Token;

    return Promise.resolve(options);
  }
}

export default ApiClient;
