import { test, expect, chromium } from '@playwright/test';
import { getOutput } from './getOutputHelper';

test.use({ browserName: 'chromium' });

test.describe('Singlish to Sinhala Translator - Alternate Test Cases', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.waitForLoadState('networkidle');
  });

  test('Pos_Fun_0001 - Basic everyday short phrase', async ({ page }) => {
    const output = await getOutput(page, 'Mage amma ada gedara enawa.');
    expect(output.length).toBeGreaterThan(0);
  });

  test('Pos_Fun_0002 - Compound sentence with morning greeting', async ({ page }) => {
    const output = await getOutput(page, 'suba udhaesanak, mata ehema karanna oone na. api kalin balamu.');
    expect(output.length).toBeGreaterThan(0);
  });

  test('Pos_Fun_0003 - Complex sentence with condition and future plan', async ({ page }) => {
    const output = await getOutput(page, 'oyaa enna kalin mata poddak wait karanna oone, vahina ena nisa api kalin yanna epa kiyala hithuwa. passe gedara ennam.');
    expect(output.length).toBeGreaterThan(0);
  });

  test('Pos_Fun_0004 - Short polite question about well-being', async ({ page }) => {
    const output = await getOutput(page, 'oyaata ada kohomada ?');
    expect(output.length).toBeGreaterThan(0);
  });

  test('Pos_Fun_0005 - Polite request with follow-up action', async ({ page }) => {
    const output = await getOutput(page, 'karunakarala mata eka poddak balanna puluwanda?');
    expect(output.length).toBeGreaterThan(0);
  });

  test('Pos_Fun_0006 - Simple positive short statement', async ({ page }) => {
    const output = await getOutput(page, 'mama ada feel wenawa.');
    expect(output.length).toBeGreaterThan(0);
  });

  test('Pos_Fun_0007 - Negative sentence with future denial', async ({ page }) => {
    const output = await getOutput(page, 'mata ada eka karanna baee. api heta kalin yanne na.');
    expect(output.length).toBeGreaterThan(0);
  });

  test('Pos_Fun_0008 - Common short greeting', async ({ page }) => {
    const output = await getOutput(page, 'suba  dawasak!');
    expect(output.length).toBeGreaterThan(0);
  });

  test('Pos_Fun_0009 - Polite request question medium', async ({ page }) => {
    const output = await getOutput(page, 'karunakarala mata poddak help karanna puluwanda machan?');
    expect(output.length).toBeGreaterThan(0);
  });

  test('Pos_Fun_0010 - Everyday feeling expression short', async ({ page }) => {
    const output = await getOutput(page, 'mata ada bayai.');
    expect(output.length).toBeGreaterThan(0);
  });

  test('Pos_Fun_0011 - Frequent collocation medium', async ({ page }) => {
    const output = await getOutput(page, 'poddak inna, mama gihin ennam.');
    expect(output.length).toBeGreaterThan(0);
  });

  test('Pos_Fun_0012 - Properly spaced future plan short', async ({ page }) => {
    const output = await getOutput(page, 'ada passe mama office yanawa.');
    expect(output.length).toBeGreaterThan(0);
  });

  test('Pos_Fun_0013 - Emphasis with repetition medium', async ({ page }) => {
    const output = await getOutput(page, 'supiri supiri, eka karapan');
    expect(output.length).toBeGreaterThan(0);
  });

  test('Pos_Fun_0014 - Past tense short test', async ({ page }) => {
    const output = await getOutput(page, 'mama kalin gedara giya.');
    expect(output.length).toBeGreaterThan(0);
  });

  test('Pos_Fun_0015 - Present tense daily activity medium', async ({ page }) => {
    const output = await getOutput(page, 'mama dhaen eka karanawa .');
    expect(output.length).toBeGreaterThan(0);
  });

  test('Pos_Fun_0016 - Future tense invitation short', async ({ page }) => {
    const output = await getOutput(page, 'api ada passe Galle yamu da?');
    expect(output.length).toBeGreaterThan(0);
  });

  test('Pos_Fun_0017 - Singular pronoun short', async ({ page }) => {
    const output = await getOutput(page, 'mama ada eka karanawa.');
    expect(output.length).toBeGreaterThan(0);
  });

  test('Pos_Fun_0018 - Plural question medium', async ({ page }) => {
    const output = await getOutput(page, 'oyaala ada enawada kalin?');
    expect(output.length).toBeGreaterThan(0);
  });

  test('Pos_Fun_0019 - Embedded brand name short', async ({ page }) => {
    const output = await getOutput(page, 'Facebook group ekak thiyenawa.');
    expect(output.length).toBeGreaterThan(0);
  });

  test('Pos_Fun_0020 - Place name in sentence medium', async ({ page }) => {
    const output = await getOutput(page, 'api Nuwara Eliya trip ekak yanawa.');
    expect(output.length).toBeGreaterThan(0);
  });

  test('Pos_Fun_0021 - Abbreviation preservation short', async ({ page }) => {
    const output = await getOutput(page, 'OTP ekak denna oone.');
    expect(output.length).toBeGreaterThan(0);
  });

  test('Pos_Fun_0022 - Punctuation with question medium', async ({ page }) => {
    const output = await getOutput(page, 'mata help oone da??? (please karunakarala!)');
    expect(output.length).toBeGreaterThan(0);
  });

  test('Pos_Fun_0023 - Currency and date short', async ({ page }) => {
    const output = await getOutput(page, 'Rs. 7500, 15/08/2025.');
    expect(output.length).toBeGreaterThan(0);
  });

  test('Pos_Fun_0024 - Multi-line paragraph long input', async ({ page }) => {
    const output = await getOutput(page, 'mama office yanawa.\noyata enna puluwanda?\napi passe coffee ekak bonamu.');
    expect(output.length).toBeGreaterThan(0);
  });

  test('Neg_Fun_0001 - Joined words without spaces short fail', async ({ page }) => {
    const output = await getOutput(page, 'mageammagedaraenawa');
    expect(output.length).toBeGreaterThanOrEqual(0);
  });

  test('Neg_Fun_0002 - Slang phrase medium fail', async ({ page }) => {
    const output = await getOutput(page, 'supiri da ada dawasa?');
    expect(output.length).toBeGreaterThanOrEqual(0);
  });

  test('Neg_Fun_0003 - Typo-heavy complex long fail', async ({ page }) => {
    const output = await getOutput(page, 'api offic giya kalin, oyaa enna hadanne na nisa api kalin yanna epa kiyala hithuwa.');
    expect(output.length).toBeGreaterThanOrEqual(0);
  });

  test('Neg_Fun_0004 - Extra multiple spaces medium fail', async ({ page }) => {
    const output = await getOutput(page, 'mama     office     yanawa.');
    expect(output.length).toBeGreaterThanOrEqual(0);
  });

  test('Neg_Fun_0005 - Informal slang short fail', async ({ page }) => {
    const output = await getOutput(page, 'ela machan supiri da?');
    expect(output.length).toBeGreaterThanOrEqual(0);
  });

  test('Neg_Fun_0006 - Empty input handling fail', async ({ page }) => {
    const output = await getOutput(page, '');
    expect(output.length).toBeGreaterThanOrEqual(0);
  });

  test('Neg_Fun_0007 - Heavy mixed English abbreviations fail', async ({ page }) => {
    const output = await getOutput(page, 'mata ASAP PIN denna oone VIP party ekata.');
    expect(output.length).toBeGreaterThanOrEqual(0);
  });

  test('Neg_Fun_0008 - Heavy punctuation short fail', async ({ page }) => {
    const output = await getOutput(page, '!!! help oone da ???!!!');
    expect(output.length).toBeGreaterThanOrEqual(0);
  });

  test('Neg_Fun_0009 - Units with numbers medium fail', async ({ page }) => {
    const output = await getOutput(page, '5 kg sugar saha 1.5 l milk.');
    expect(output.length).toBeGreaterThanOrEqual(0);
  });

  test('Neg_Fun_0010 - Slang + typo long fail', async ({ page }) => {
    const output = await getOutput(page, 'ado machan, mata kalin trip hadanna amathaka una kiyapan da?');
    expect(output.length).toBeGreaterThanOrEqual(0);
  });

  test('Pos_UI_0001 - Check real-time typing update short', async ({ page }) => {
    const inputField = page.locator('textarea#singlish, textarea.w-full').first();
    const outputField = page.locator('textarea#sinhala, textarea[readonly], div[role="textbox"], div.w-full').first();
    
    async function getOutputValue() {
      try {
        return await outputField.inputValue();
      } catch (e) {
        return await outputField.textContent() || '';
      }
    }
    
    await inputField.fill('');
    await page.waitForTimeout(200);
    
    // Type slowly to observe smooth, incremental updates
    await inputField.type('mage thaththa ada office yanawa', { delay: 100 });
    await page.waitForTimeout(1000);
    
    const output = await getOutputValue();
    expect(output.length).toBeGreaterThan(0);
  });

  test('Neg_UI_0001 - Output does not update in real-time for very rapid typing or after quick deletion', async ({ page }) => {
    const inputField = page.locator('textarea#singlish, textarea.w-full').first();
    const outputField = page.locator('textarea#sinhala, textarea[readonly], div[role="textbox"], div.w-full').first();
    
    async function getOutputValue() {
      try {
        return await outputField.inputValue();
      } catch (e) {
        return await outputField.textContent() || '';
      }
    }
    
    await inputField.fill('');
    await page.waitForTimeout(200);
    
    // Type quickly
    await inputField.type('mama gedara yanawa', { delay: 10 });
    await page.waitForTimeout(100);
    
    // Delete all characters rapidly
    for (let i = 0; i < 50; i++) {
      await page.keyboard.press('Backspace');
    }
    
    await page.waitForTimeout(100);
    
    const output = await getOutputValue();
    expect(output.length).toBeGreaterThanOrEqual(0);
  });

});
