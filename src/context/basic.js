export let basic = {
  spacing: [
    ['#',   'rem',   'px'],
    ['0',   '0',     '0'],
    ['1',   '1',     '1'],
    ['0.5', '.125', '2'],
    ['1',   '.25',  '4'],
    ['1.5', '.375', '6'],
    ['2',   '.5',   '8'],
    ['2.5', '.625', '10'],
    ['3',   '.75',  '12'],
    ['3.5', '.875', '14'],
    ['4',   '1',     '16'],
    ['5',   '1.25',  '20'],
    ['6',   '1.5',   '24'],
    ['7',   '1.75',  '28'],
    ['8',   '2',     '32'],
    ['9',   '2.25',  '36'],
    ['10',  '2.5',   '40'],
    ['11',  '2.75',  '44'],
    ['12',  '3',     '48'],
    ['14',  '3.5',   '56'],
    ['16',  '4',     '64'],
    ['20',  '5',     '80'],
    ['24',  '6',     '96'],
    ['28',  '7',     '112'],
    ['32',  '8',     '128'],
    ['36',  '9',     '144'],
    ['40',  '10',    '160'],
    ['44',  '11',    '176'],
    ['48',  '12',    '192'],
    ['52',  '13',    '208'],
    ['56',  '14',    '224'],
    ['60',  '15',    '240'],
    ['64',  '16',    '256'],
    ['72',  '18',    '288'],
    ['80',  '20',    '320'],
    ['96',  '24',    '384'],
  ],

  colors: [
    'slate',
    'gray',
    'zinc',
    'neutral',
    'stone',
    'red',
    'orange',
    'amber',
    'yellow',
    'lime',
    'green',
    'emerald',
    'teal',
    'cyan',
    'sky',
    'blue',
    'indigo',
    'violet',
    'purple',
    'fuchsia',
    'pink',
    'rose',
    'red',
    'orange',
  ],
  pseudoClass: [
    'hover',
    'focus',
    'focus-within',
    'focus-visible',
    'active',
    'visited',
    'target',
    'first',
    'last',
    'only',
    'odd',
    'even',
    'first-of-type',
    'last-of-type',
    'only-of-type',
    'empty',
    'disabled',
    'enabled',
    'checked',
    'indeterminate',
    'default',
    'required',
    'valid',
    'invalid',
    'in-range',
    'out-of-range',
    'placeholder-shown',
    'autofill',
    'read-only',
    'before',
    'after',
    'first-letter',
    'first-line',
    'marker',
    'selection',
    'file',
    'backdrop',
    'placeholder',
    'supports-[…]',
    'data-[…]',
    'rtl',
    'ltr',
    'open',
  ],
  pseudoClassmedia: [
    'sm',
    'md',
    'lg',
    'xl',
    '2xl',
    'min-[…]',
    'max-sm',
    'max-md',
    'max-lg',
    'max-xl',
    'max-2xl',
    'max-[…]',
    'dark',
    'portrait',
    'landscape',
    'motion-safe',
    'motion-reduce',
    'contrast-more',
    'contrast-less',
    'print',
  ],
  pseudoClassAria: [
    'aria-checked',
    'aria-disabled',
    'aria-expanded',
    'aria-hidden',
    'aria-pressed',
    'aria-readonly',
    'aria-required',
    'aria-selected',
    'aria-[…]',
  ],
  functions: [
    '@tailwind',
    '@apply',
    '@layer',
    '@config',
    'theme()',
    'screen()',
  ],
  variants: {
    'all-utility': ['responsive'],
    'background-color': ['hover', 'focus'],
    'border-color': ['hover', 'focus'],
    'box-shadow': ['hover', 'focus'],
    'font-weight': ['hover', 'focus'],
    opacity: ['hover', 'focus'],
    outline: ['focus'],
    'text-color': ['hover', 'focus'],
    'text-decoration': ['hover', 'focus'],
  },
  opacity: [0, 5, 10, 20, 25, 30, 40, 50, 60, 70, 75, 80, 90, 95, 100],
  colorsNum: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900],
};
