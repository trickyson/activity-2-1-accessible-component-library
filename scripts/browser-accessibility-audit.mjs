import { chromium } from 'playwright';
import AxeBuilder from '@axe-core/playwright';
import { mkdir, writeFile } from 'node:fs/promises';

await mkdir('audit-results', { recursive: true });
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const observations = [];
try {
  await page.goto('http://127.0.0.1:4173/', { waitUntil: 'networkidle' });
  await page.screenshot({ path: 'audit-results/01-application.png', fullPage: true });
  const heading = await page.getByRole('heading', { name: 'Accessible Component Library' }).count();
  if (!heading) throw new Error('Application heading missing');
  await page.getByRole('button', { name: 'Save Component' }).click();
  const saved = await page.getByRole('status').first().innerText();
  if (!saved.includes('saved successfully')) throw new Error('Button status not updated');
  observations.push('PASS: Button activates and announces saved status');
  await page.screenshot({ path: 'audit-results/02-button.png', fullPage: true });
  await page.getByRole('button', { name: 'Submit email' }).click();
  const error = await page.getByRole('alert').innerText();
  if (!error.includes('valid email')) throw new Error('Form validation did not display error');
  observations.push('PASS: Invalid email triggers accessible error');
  await page.screenshot({ path: 'audit-results/03-form-error.png', fullPage: true });
  await page.getByRole('textbox', { name: /Email address/ }).fill('student@example.com');
  await page.getByRole('button', { name: 'Submit email' }).click();
  const success = await page.getByText(/Email validated successfully/).count();
  if (!success) throw new Error('Valid form submission failed');
  observations.push('PASS: Valid email displays success message');
  await page.keyboard.press('Tab');
  const activeTag = await page.evaluate(() => document.activeElement?.tagName);
  observations.push('INFO: Focus after Tab: ' + activeTag);
  const axe = await new AxeBuilder({ page }).analyze();
  await writeFile('audit-results/axe-results.json', JSON.stringify(axe, null, 2));
  observations.push('AXE: ' + axe.violations.length + ' detected violation categories');
  await writeFile('audit-results/interaction-results.txt', observations.join('\n') + '\n');
  if (axe.violations.length) {
    throw new Error('axe found ' + axe.violations.length + ' violation categories. Review axe-results.json.');
  }
} finally {
  await browser.close();
}
