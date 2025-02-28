export function normalizeLocale(
  locale: string
): 'en' | 'pt' | 'es' {
  // Caso queira tratar "pt-BR" como "pt", por exemplo:
  const lower = locale.toLowerCase();
  if (lower === 'pt-br') return 'pt';
  // Você pode adicionar outros mapeamentos se necessário
  if (lower === 'en-us' || lower === 'en-gb') return 'en';
  if (lower === 'es-es' || lower === 'es-mx') return 'es';
  // Se já estiver em um dos valores esperados, retorna-o
  if (lower === 'pt' || lower === 'en' || lower === 'es')
    return lower as 'en' | 'pt' | 'es';
  // Valor padrão
  return 'en';
}
