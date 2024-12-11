export function parseDescription(text: string): string {
  const colors = ['text-BlueText', 'text-OrageText', 'text-PurpleText'];
  let colorIndex = 0;

  return text.replace(/\*\*(.+?)\*\*/g, (_, match) => {
    const colorClass = colors[colorIndex % colors.length];
    colorIndex += 1;
    return `<span class="${colorClass}">${match}</span>`;
  });
}