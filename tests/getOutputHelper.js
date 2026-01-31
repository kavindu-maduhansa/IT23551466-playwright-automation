export async function getOutput(page, inputText) {
  const inputField = page.locator('textarea#singlish, textarea.w-full');
  const outputField = page.locator('textarea#sinhala, textarea[readonly], div[role="textbox"], div.w-full');

  await inputField.first().waitFor({ state: 'visible', timeout: 5000 });
  await inputField.first().fill('');
  await inputField.first().fill(inputText);

  let lastValue = '';
  for (let i = 0; i < 20; i++) {
    let value = '';
    try {
      value = await outputField.first().inputValue();
    } catch {
      value = await outputField.first().textContent() || '';
    }
    value = value.trim();
    if (value && value !== lastValue) return value;
    lastValue = value;
    await page.waitForTimeout(250);
  }
  
  try {
    return (await outputField.first().inputValue()).trim();
  } catch {
    return (await outputField.first().textContent() || '').trim();
  }
}
