<?php
$name='read';
if(isset($_GET['name'])){
    $name  = urldecode($_GET['name']); // 解码
    $name = str_replace(' ', '_', $name);  // 空格替换_
}
$lang = '';
if(isset($_GET['lang'])){
    $lang = ($_GET['lang']=='en') ? 'en' : 'zh'; // 语言切换
    $name = $name.'_'.$lang;
}

$file='./docs/'.$name.'.md';
echo '[toc] '.PHP_EOL;



if(!file_exists($file)){
    // 判断字符 是否存在 _zh
    if(strpos($name,'_zh')!==false){ // 中文
        // 尝试找英文
    }else{
        $file='./docs/'.$name.'_zh.md';
    }

    if(!file_exists($file)){
        echo '# '.$file.'   ';
        $file= ($lang!='en') ? './README.md':'./docs/README_en.md';
    }
}
echo file_get_contents($file);
?>