const AI_TAG_RE = /\b(ai|llm|agent|intelligent)/i;

export function isAiTag(tag: string): boolean {
  return AI_TAG_RE.test(tag);
}

export function isAiHighlight(text: string): boolean {
  return /\b(ai-native|llm|ai agent|ai-integrated|ai-assisted|ai-powered)\b/i.test(
    text
  );
}

export function isAiPlatformLabel(label: string): boolean {
  return /&\s*AI\b|\bAI\b/i.test(label);
}
