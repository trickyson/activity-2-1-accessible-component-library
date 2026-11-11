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
  // Verify real keyboard navigation from the beginning of the document.
  // Reload to reset focus order after prior mouse and form interactions.
  await page.reload({ waitUntil: 'networkidle' });
  await page.keyboard.press('Tab');
  const skipFocused = await page.evaluate(() => document.activeElement?.textContent?.trim() === 'Skip to main content');
  if (!skipFocused) throw new Error('First Tab did not focus the skip link');
  observations.push('PASS: First Tab focuses skip link');
  await page.screenshot({ path: 'audit-results/04-keyboard-skip-link.png', fullPage: true });
  await page.keyboard.press('Enter');
  const skipTarget = await page.evaluate(() => document.activeElement?.id);
  if (skipTarget !== 'main-content') throw new Error('Skip link did not focus main content');
  observations.push('PASS: Enter activates skip link and focuses main content');
  // Verify backward traversal between two ordinary navigation links.
  await page.getByRole('link', { name: 'Accessibility Notes', exact: true }).first().focus();
  await page.keyboard.press('Shift+Tab');
  const backToHome = await page.evaluate(() => document.activeElement?.textContent?.trim() === 'Home');
  if (!backToHome) throw new Error('Shift+Tab did not move from Accessibility Notes to Home');
  observations.push('PASS: Shift+Tab navigates backward between navigation links');
  await page.getByRole('button', { name: 'Save Component' }).focus();
  await page.keyboard.press('Enter');
  if (!(await page.getByRole('button', { name: 'Reset saved state' }).count())) throw new Error('Enter did not activate button');
  await page.keyboard.press('Space');
  if (!(await page.getByRole('button', { name: 'Save Component' }).count())) throw new Error('Space did not activate button');
  observations.push('PASS: Button responds to Enter and Space');
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
