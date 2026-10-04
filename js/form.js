/*
 * Formulário de contato — 47S
 * Para ativar envio real: substitua o endpoint abaixo pelo seu do Formspree.
 * Cadastre em https://formspree.io e use o action gerado.
 * Exemplo: const ENDPOINT = 'https://formspree.io/f/SEU_ID';
 */

const form = document.querySelector('#project-form');

if (form) {
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        let ok = true;

        form.querySelectorAll('[required]').forEach((fieldElement) => {
            const field = fieldElement.closest('.field');
            const bad = !fieldElement.value.trim();
            field.classList.toggle('invalid', bad);
            if (bad) ok = false;
        });

        const status = form.querySelector('.form-status');

        if (!ok) {
            status.textContent = 'REVISE OS CAMPOS MARCADOS.';
            return;
        }

        const submit = form.querySelector('.submit');
        submit.textContent = 'ENVIANDO...';
        submit.disabled = true;

        /* ── Simulação (remova este bloco ao integrar Formspree) ── */
        await new Promise(r => setTimeout(r, 900));
        status.textContent = 'MENSAGEM RECEBIDA. RETORNAREMOS EM BREVE.';
        form.reset();
        submit.textContent = 'ENVIAR PROJETO';
        submit.disabled = false;
        /* ── Fim simulação ─────────────────────────────────────── */

        /*
        // ── Código real com Formspree ───────────────────────────
        try {
            const res = await fetch('https://formspree.io/f/SEU_ID', {
                method: 'POST',
                headers: { 'Accept': 'application/json' },
                body: new FormData(form),
            });
            if (res.ok) {
                status.textContent = 'MENSAGEM RECEBIDA. RETORNAREMOS EM BREVE.';
                form.reset();
            } else {
                status.textContent = 'ERRO NO ENVIO. TENTE PELO E-MAIL.';
            }
        } catch {
            status.textContent = 'ERRO DE CONEXÃO. TENTE PELO E-MAIL.';
        } finally {
            submit.textContent = 'ENVIAR PROJETO';
            submit.disabled = false;
        }
        // ───────────────────────────────────────────────────────
        */
    });

    // Clear invalid state on input
    form.querySelectorAll('[required]').forEach((el) => {
        el.addEventListener('input', () => {
            el.closest('.field')?.classList.remove('invalid');
        });
    });
}
