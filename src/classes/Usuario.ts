import { ref } from "vue";

class Usuario {
    public Limpar(): void {
        localStorage.clear();
    }

    public get Nome(): string | undefined {
        return localStorage.getItem('nome-usuario-tectrilha') || '';
    }
    public set Nome(v: string | undefined) {
        localStorage.setItem('nome-usuario-tectrilha', v ?? '');
    }

    public get Login(): string | undefined {
        return localStorage.getItem('login-usuario-tectrilha') || '';
    }
    public set Login(v: string | undefined) {
        localStorage.setItem('login-usuario-tectrilha', v ?? '');
    }

    public get NomeSecretaria(): string | undefined {
        return localStorage.getItem('secretaria-usuario-tectrilha') || '';
    }
    public set NomeSecretaria(v: string | undefined) {
        localStorage.setItem('secretaria-usuario-tectrilha', v ?? '');
    }

    public get SiglaSecretaria(): string | undefined {
        return localStorage.getItem('sigla-secretaria-usuario-tectrilha') || '';
    }
    public set SiglaSecretaria(v: string | undefined) {
        localStorage.setItem('sigla-secretaria-usuario-tectrilha', v ?? '');
    }

    public get IdSecretaria(): number | undefined {
        return Number.parseInt(localStorage.getItem('id-secretaria-usuario-tectrilha') || '') ?? undefined;
    }
    public set IdSecretaria(v: number | undefined) {
        localStorage.setItem('id-secretaria-usuario-tectrilha', v ? v?.toString() : '');
    }

    public get Token(): string | undefined {
        return localStorage.getItem('token-usuario-tectrilha') || '';
    }
    public set Token(v: string | undefined) {
        localStorage.setItem('token-usuario-tectrilha', v ?? '');
    }

    public get Id(): number {
        return Number.parseInt(localStorage.getItem('id-usuario-tectrilha') || '-1');
    }

    public set Id(v: number) {
        localStorage.setItem('id-usuario-tectrilha', v.toString());
    }

    public get IdCliente(): number | undefined {
        return Number.parseInt(localStorage.getItem('id-cliente-tectrilha') || '');
    }

    public set IdCliente(v: number | undefined) {
        localStorage.setItem('id-cliente-tectrilha', v ? v?.toString() : '');
    }

    public get IdTecnico(): number | undefined {
        return Number.parseInt(localStorage.getItem('id-tecnico-tectrilha') || '');
    }

    public set IdTecnico(v: number | undefined) {
        localStorage.setItem('id-tecnico-tectrilha', v ? v?.toString() : '');
    }
}

const u = new Usuario();
const refUsuario = ref(u);

export default refUsuario;
