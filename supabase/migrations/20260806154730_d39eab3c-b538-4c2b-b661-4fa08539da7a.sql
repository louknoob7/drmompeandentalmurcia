CREATE TABLE public.citas_chatbot (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nombre text NOT NULL,
  telefono text NOT NULL,
  tratamiento text,
  fecha_preferida text,
  franja_horaria text,
  mensaje text,
  estado text NOT NULL DEFAULT 'pendiente_confirmacion',
  origen text NOT NULL DEFAULT 'chatbot_voz',
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT ALL ON public.citas_chatbot TO service_role;
ALTER TABLE public.citas_chatbot ENABLE ROW LEVEL SECURITY;
CREATE POLICY "no public access" ON public.citas_chatbot FOR SELECT TO authenticated USING (false);