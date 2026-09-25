import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const checks = [
  {
    file: 'src/components/AccessibleButton.jsx',
    label: 'Button includes aria-label',
    pattern: /aria-label=/,
  },
  {
    file: 'src/components/AccessibleInput.jsx',
    label: 'Input has visible label',
    pattern: /<label\s+htmlFor="email-address">/,
  },
  {
    file: 'src/components/AccessibleInput.jsx',
    label: 'Input includes helper text relationship',
    pattern: /aria-describedby="email-help"/,
  },
  {
    file: 'src/components/AccessibleNav.jsx',
    label: 'Navigation uses semantic nav landmark',
    pattern: /<nav[^>]+aria-label="Main navigation"/,
  },
  {
    file: 'src/components/AccessibleNav.jsx',
    label: 'Skip link is available',
    pattern: /href="#main-content"/,
  },
  {
    file: 'src/styles/global.css',
    label: 'Visible keyboard focus style exists',
    pattern: /:focus-visible/,
  },
];

let failed = 0;

console.log('Static accessibility check');
console.log('==========================');

for (const check of checks) {
  const content = readFileSync(join(process.cwd(), check.file), 'utf8');
  const passed = check.pattern.test(content);
  console.log(`${passed ? 'PASS' : 'FAIL'} - ${check.label}`);
  if (!passed) failed += 1;
}

if (failed > 0) {
  console.error(`\n${failed} check(s) failed.`);
  process.exit(1);
}

console.log('\nAll static accessibility checks passed.');
