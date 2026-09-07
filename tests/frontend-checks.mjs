import { readFile } from 'node:fs/promises';

const root = new URL('../', import.meta.url);
const read = path => readFile(new URL(path, root), 'utf8');
const failures = [];
const check = (condition, message) => { if (!condition) failures.push(message); };

const [home, catalog, detail, checkout, css, js, productText] = await Promise.all([
  read('index.html'), read('pages/products.html'), read('pages/product-detail.html'),
  read('pages/checkout.html'), read('style.css'), read('script.js'), read('data/products.json')
]);
const products = JSON.parse(productText);
const pages = [['Trang chủ', home], ['Catalog', catalog], ['Chi tiết', detail], ['Checkout', checkout]];

for (const [name, html] of pages) {
  check(/<meta name="viewport"/.test(html), `${name}: thiếu viewport`);
  check(/Content-Security-Policy/.test(html), `${name}: thiếu CSP`);
  check(/<html lang="vi">/.test(html), `${name}: thiếu ngôn ngữ vi`);
  check(!/<script(?![^>]*src=)/.test(html), `${name}: có inline script`);
}

check(products.length >= 12, 'Catalog cần ít nhất 12 sản phẩm mẫu');
for (const p of products) {
  for (const key of ['id','name','category','brand','price','image','stock','scale','createdAt','sold','description'])
    check(p[key] !== undefined && p[key] !== '', `Sản phẩm ${p.id}: thiếu ${key}`);
  check(Number.isInteger(p.stock) && p.stock >= 0, `Sản phẩm ${p.id}: tồn kho không hợp lệ`);
  check(Number.isFinite(p.price) && p.price > 0, `Sản phẩm ${p.id}: giá không hợp lệ`);
}

for (const id of ['search-input','sort','price-filter','brand-filter','scale-filter','stock-filter','load-more'])
  check(catalog.includes(`id="${id}"`), `Catalog: thiếu control ${id}`);
for (const field of ['name','phone','email','address','city'])
  check(checkout.includes(`name="${field}"`), `Checkout: thiếu trường ${field}`);
check(/required/.test(checkout) && /pattern=/.test(checkout), 'Checkout: thiếu validation HTML');
check(/localStorage/.test(js), 'Giỏ hàng chưa dùng localStorage');
check(/escape|esc=/.test(js), 'Thiếu cơ chế escape dữ liệu khi render');
check(/addEventListener\('error'/.test(js), 'Thiếu ảnh dự phòng');
check(/@media\(max-width:900px\)/.test(css), 'Thiếu breakpoint tablet 900px');
check(/@media\(max-width:700px\)/.test(css), 'Thiếu breakpoint mobile 700px');
check(/prefers-reduced-motion/.test(css), 'Thiếu hỗ trợ reduced motion');
check(/focus-visible/.test(css), 'Thiếu trạng thái focus bàn phím');

const luminance = hex => {
  const values = hex.match(/[a-f\d]{2}/gi).map(x => parseInt(x,16)/255).map(x => x<=.03928?x/12.92:((x+.055)/1.055)**2.4);
  return .2126*values[0]+.7152*values[1]+.0722*values[2];
};
const contrast = (a,b) => { const [l1,l2]=[luminance(a),luminance(b)].sort((x,y)=>y-x); return (l1+.05)/(l2+.05); };
check(contrast('101114','f5f3ee') >= 4.5, 'Tương phản chữ/nền thấp hơn WCAG AA');

if (failures.length) {
  console.error(`Frontend checks failed (${failures.length}):`);
  failures.forEach(x => console.error(`- ${x}`));
  process.exit(1);
}
console.log(`Frontend checks passed: 4 pages, ${products.length} products, responsive/accessibility/security rules.`);
