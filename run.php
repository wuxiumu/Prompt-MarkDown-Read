<?php
/**
 * 读取 docs/ 下 Markdown；限制 name 防目录穿越。
 * 用法：php -S 127.0.0.1:8080  后访问 /run.php?name=xxx
 */
$name = 'read';
if (isset($_GET['name'])) {
    $name = urldecode((string) $_GET['name']);
    $name = str_replace(' ', '_', $name);
}
# 仅保留安全文件名字符
$name = preg_replace('/[^a-zA-Z0-9_\-\x{4e00}-\x{9fff}]/u', '', $name) ?: 'read';

$lang = '';
if (isset($_GET['lang'])) {
    $lang = ($_GET['lang'] === 'en') ? 'en' : 'zh';
    $name = $name . '_' . $lang;
}

$docsDir = realpath(__DIR__ . '/docs');
$file = $docsDir . DIRECTORY_SEPARATOR . $name . '.md';

echo '[toc] ' . PHP_EOL;

if (!is_file($file)) {
    if (strpos($name, '_zh') === false && strpos($name, '_en') === false) {
        $file = $docsDir . DIRECTORY_SEPARATOR . $name . '_zh.md';
    }
    if (!is_file($file)) {
        echo '# ' . htmlspecialchars($name, ENT_QUOTES, 'UTF-8') . '   ';
        $fallback = ($lang !== 'en') ? (__DIR__ . '/README.md') : ($docsDir . '/README_en.md');
        $file = is_file($fallback) ? $fallback : $docsDir . '/read.md';
    }
}

# 二次确认落在 docs 或仓库根 README
$real = realpath($file);
$root = realpath(__DIR__);
if ($real === false || (strpos($real, $docsDir) !== 0 && strpos($real, $root . DIRECTORY_SEPARATOR . 'README') !== 0)) {
    http_response_code(400);
    echo '# invalid path';
    exit;
}

echo file_get_contents($real);
