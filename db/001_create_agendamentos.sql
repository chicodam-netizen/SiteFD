CREATE TABLE IF NOT EXISTS agendamentos (
  id               bigserial PRIMARY KEY,
  starts_at        timestamptz NOT NULL,
  ends_at          timestamptz NOT NULL,
  empresa          text NOT NULL,
  contato_nome     text NOT NULL,
  contato_email    text NOT NULL,
  contato_telefone text NOT NULL,
  responsavel      text,
  diag_tipo        text,
  status           text NOT NULL DEFAULT 'agendado'
                     CHECK (status IN ('agendado', 'cancelado', 'concluido')),
  created_at       timestamptz NOT NULL DEFAULT now(),
  updated_at       timestamptz NOT NULL DEFAULT now(),
  CHECK (ends_at > starts_at)
);

CREATE INDEX IF NOT EXISTS agendamentos_starts_at_idx ON agendamentos (starts_at);

-- Como os horários oferecidos são sempre alinhados a uma grade fixa de 60 min,
-- duas reservas ativas só podem colidir se tiverem o mesmo starts_at — um
-- índice único parcial basta para travar o duplo agendamento no banco.
CREATE UNIQUE INDEX IF NOT EXISTS agendamentos_starts_at_active_uq
  ON agendamentos (starts_at) WHERE status = 'agendado';
