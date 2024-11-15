<template><div><h1 id="名字解析" tabindex="-1"><a class="header-anchor" href="#名字解析"><span>名字解析</span></a></h1>
<p>当前接口仅限个人起名时参考使用，所有数据均来源于网络收集，非网站原创。</p>
<h2 id="接口地址" tabindex="-1"><a class="header-anchor" href="#接口地址"><span>接口地址</span></a></h2>
<p>请求地址：<code v-pre>https://name.one-api.club/app/name/meaning</code></p>
<p>请求方式：<code v-pre>POST</code></p>
<p>返回格式：<code v-pre>JSON</code></p>
<h2 id="请求参数" tabindex="-1"><a class="header-anchor" href="#请求参数"><span>请求参数</span></a></h2>
<table>
<thead>
<tr>
<th style="text-align:center">参数名称</th>
<th style="text-align:center">必填</th>
<th style="text-align:center">类型</th>
<th style="text-align:center">示例</th>
<th style="text-align:center">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">api_key</td>
<td style="text-align:center">是</td>
<td style="text-align:center">string</td>
<td style="text-align:center">xxxxx</td>
<td style="text-align:center">接口凭证</td>
</tr>
<tr>
<td style="text-align:center">name</td>
<td style="text-align:center">是</td>
<td style="text-align:center">string</td>
<td style="text-align:center">马一龙</td>
<td style="text-align:center">名字</td>
</tr>
<tr>
<td style="text-align:center">date</td>
<td style="text-align:center">是</td>
<td style="text-align:center">date</td>
<td style="text-align:center">2024-2-22 12:00</td>
<td style="text-align:center">出生时间</td>
</tr>
</tbody>
</table>
<h2 id="响应示例" tabindex="-1"><a class="header-anchor" href="#响应示例"><span>响应示例</span></a></h2>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>{
    "errcode": 0,
    "solar_date": [
        "2024",
        "11",
        "04",
        "14",
        "19"
    ],
    "lunar_date": [
        2024,
        "十月",
        "初四",
        "甲辰",
        10,
        4,
        "龙",
        0
    ],
    "shengxiao": "龙",
    "xingzuo": "天蝎",
    "bazi_data": {
        "birthday": "农历：2024年10月4日14时19分",
        "todaysizhu": [
            "甲辰",
            "甲戌",
            "壬申",
            "丁未",
            "&lt;戌亥>"
        ],
        "shengxiao": "龙",
        "qiyun": "九字算命:1岁10月行运",
        "sigong": "东四宫之震宫",
        "num": 9,
        "nayin": "佛灯火",
        "taiyuan": "乙丑",
        "minggong": "甲子",
        "shengong": "庚午",
        "wuxing": "五行不缺",
        "yearGZ": [
            "甲",
            "辰"
        ],
        "monthGZ": [
            "甲",
            "戌"
        ],
        "dayGZ": [
            "壬",
            "申"
        ],
        "hourGZ": [
            "丁",
            "未"
        ],
        "kongwang": "戌亥",
        "bazifenxi": "身旺",
        "bazinayin": [
            "佛灯火",
            "山头火",
            "剑锋金",
            "天河水"
        ],
        "zanggan": [
            "乙戊癸",
            "戊辛丁",
            "庚壬戊",
            "乙丁己"
        ],
        "sizhu_10shen": [
            "食神(食)",
            "食神(食)",
            "日主",
            "正财(才)"
        ],
        "xingyun": [
            "墓",
            "冠带",
            "长生",
            "养"
        ]
    },
    "name_data": {
        "words": [
            {
                "id": "7612",
                "fanti": "馬",
                "jianti": "马",
                "lujing": "【亥集上】【馬字部】",
                "ji_a": "亥集上",
                "ji_b": null,
                "bushou": "馬",
                "bihua": "10",
                "wuxing": "水",
                "explanation": "：哺乳动物，颈上有鬃，尾生长毛，四肢强健，善跑，供人骑或拉东西，大，姓氏。
用作人名意指健壮、奋发之义；",
                "oldword": "駌",
                "pinyin": "mǎ",
                "radicals": "马",
                "strokes": "3",
                "word": "马",
                "gif": "https://hanyu-word-gif.cdn.bcebos.com/bbbb57f6540734ef3a8de92e3525a6e4e.gif",
                "voice": "https://hanyu-word-pinyin-short.cdn.bcebos.com/ma3.mp3",
                "up_sta": "1",
                "write_skills": "头部不宜太宽；横折和竖折折钩均稍向左斜；横画长短适中，位置恰当。",
                "wubi": "CNNG"
            },
            {
                "id": "14062",
                "fanti": "一",
                "jianti": "一",
                "lujing": "【子集上】【一字部】",
                "ji_a": "子集上",
                "ji_b": null,
                "bushou": "一",
                "bihua": "1",
                "wuxing": "水",
                "explanation": "：数目字。又指特定、相当、必然；全部，所有的。也指从来如此，始终如一。
用作人名意指心无旁骛、善始善终、认真之义；",
                "oldword": "一",
                "pinyin": "yī",
                "radicals": "一",
                "strokes": "1",
                "word": "一",
                "gif": "https://hanyu-word-gif.cdn.bcebos.com/bb3e43bce24154e4ea04e1887c296d7b8.gif",
                "voice": "https://hanyu-word-pinyin-short.cdn.bcebos.com/yi1.mp3",
                "up_sta": "1",
                "write_skills": "",
                "wubi": "GGLL"
            },
            {
                "id": "7287",
                "fanti": "龍",
                "jianti": "龙",
                "lujing": "【亥集下】【龍字部】",
                "ji_a": "亥集下",
                "ji_b": null,
                "bushou": "龍",
                "bihua": "16",
                "wuxing": "火",
                "explanation": "：传说中长形、有鳞、有须、能走、能飞、能兴云作雨的生物。是贵族、珍贵、头领权力的象征，如龙凤胎。
用作人名意指佼佼者、人中豪杰、幸运、成功。",
                "oldword": "龍",
                "pinyin": "lónɡ",
                "radicals": "龙",
                "strokes": "5",
                "word": "龙",
                "gif": "https://hanyu-word-gif.cdn.bcebos.com/b273e9a28f5bd41ab82cbeae2f0c88ebe.gif",
                "voice": "https://hanyu-word-pinyin-short.cdn.bcebos.com/long2.mp3",
                "up_sta": "1",
                "write_skills": "横画不宜太长。斜撇舒展，斜度、长短适中。竖弯钩圆转自然，钩底宜平，撇和点位置恰当。",
                "wubi": "DXV"
            }
        ],
        "tiange": 11,
        "tiange_data": {
            "id": "11",
            "mean": "（旱苗逢雨）万物更新，调顺发达，恢弘泽世，繁荣富贵。",
            "rate": "吉",
            "jiye": "财星、天佑、暗禄、文昌、技艺、田宅。",
            "jiating": "养蜂结蜜，事事和顺，处处温和。",
            "jiankang": "河川永在，可望健康长寿。",
            "hanyi": "旱天降雨之象。阴阳复新,享天赋之幸福。万事顺利发展,稳健着实。有得富贵繁荣，再兴家业的暗示。为能挽回家运平静和顺的最大吉数。"
        },
        "renge": 11,
        "renge_data": {
            "id": "11",
            "mean": "（旱苗逢雨）万物更新，调顺发达，恢弘泽世，繁荣富贵。",
            "rate": "吉",
            "jiye": "财星、天佑、暗禄、文昌、技艺、田宅。",
            "jiating": "养蜂结蜜，事事和顺，处处温和。",
            "jiankang": "河川永在，可望健康长寿。",
            "hanyi": "旱天降雨之象。阴阳复新,享天赋之幸福。万事顺利发展,稳健着实。有得富贵繁荣，再兴家业的暗示。为能挽回家运平静和顺的最大吉数。"
        },
        "dige": 17,
        "dige_data": {
            "id": "17",
            "mean": "（刚强）权威刚强，突破万难，如能容忍，必获成功。",
            "rate": "半吉",
            "jiye": "天官、将星、威武、艺术、文昌。",
            "jiating": "可望圆满，女性能涵养女德则贤慧。",
            "jiankang": "身心健康，可望长寿。",
            "hanyi": "权威刚强，意志坚定，勇往直前，具有突破万难的气力。成就大功大业，但因赋性过刚，自我心强而恐与人不和，反招事非厄患，遂致失败，慎戒则为大吉。女性有此数者易流于男性，宜涵养女德，存主温和，福禄自然随之。先天条件弱的妇女反用此数为妥。"
        },
        "waige": 17,
        "waige_data": {
            "id": "17",
            "mean": "（刚强）权威刚强，突破万难，如能容忍，必获成功。",
            "rate": "半吉",
            "jiye": "天官、将星、威武、艺术、文昌。",
            "jiating": "可望圆满，女性能涵养女德则贤慧。",
            "jiankang": "身心健康，可望长寿。",
            "hanyi": "权威刚强，意志坚定，勇往直前，具有突破万难的气力。成就大功大业，但因赋性过刚，自我心强而恐与人不和，反招事非厄患，遂致失败，慎戒则为大吉。女性有此数者易流于男性，宜涵养女德，存主温和，福禄自然随之。先天条件弱的妇女反用此数为妥。"
        },
        "zongge": 27,
        "zongge_data": {
            "id": "27",
            "mean": "（增长）欲望无止，自我强烈，多受毁谤，尚可成功。",
            "rate": "凶",
            "jiye": "天官、将军、师长、学士、文昌、凶厄、破财、废疾。",
            "jiating": "六亲不得力，兄弟疏远。",
            "jiankang": "肺病、刑罚、心脏病、短命，先天五行为水土者，可望安全。",
            "hanyi": "欲望无止境，自信心过强，不容他人言语，多受诽谤攻击，而易致失败。始以其智谋，努力奋斗博得名利。待过中年，势渐趋下，内外酿出不和，难以发达到老，假使自身温顺富有，也不免内部背后是非不息。大多为半途中折之象。或因其他运的关系而陷于刑罚、孤独、死于逆难等。"
        }
    },
    "sancai": [
        "木",
        "木",
        "金"
    ],
    "sancai_data": {
        "sancai": "木木金",
        "hanyi": "虽有成功运，多受环境或他人迫害，生有变动转移难得平安，受部下的员害劳烦。 又有脑或胸部的疾患等。",
        "jixiong": "凶",
        "zong": "",
        "xingge":"
    },
    "score": 83
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>响应参数说明</p>
<table>
<thead>
<tr>
<th style="text-align:center">参数名称</th>
<th style="text-align:center">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">solar_date</td>
<td style="text-align:center">公历时间</td>
</tr>
<tr>
<td style="text-align:center">lunar_date</td>
<td style="text-align:center">农历时间</td>
</tr>
<tr>
<td style="text-align:center">shengxiao</td>
<td style="text-align:center">生肖</td>
</tr>
<tr>
<td style="text-align:center">xingzuo</td>
<td style="text-align:center">星座</td>
</tr>
<tr>
<td style="text-align:center">bazi_data</td>
<td style="text-align:center">八字信息</td>
</tr>
<tr>
<td style="text-align:center">name_data</td>
<td style="text-align:center">名字数据详情</td>
</tr>
<tr>
<td style="text-align:center">sancai</td>
<td style="text-align:center">三才</td>
</tr>
<tr>
<td style="text-align:center">sancai_data</td>
<td style="text-align:center">三才详情</td>
</tr>
<tr>
<td style="text-align:center">left_num</td>
<td style="text-align:center">密钥剩余请求次数</td>
</tr>
</tbody>
</table>
<h2 id="获取密钥" tabindex="-1"><a class="header-anchor" href="#获取密钥"><span>获取密钥</span></a></h2>
<p>本接口仅支持通过密钥 <code v-pre>api_key</code>校验权限，按照请求次数扣除额度</p>
<p>测试密钥： <code v-pre>ZHRB-4WVK-51HS</code></p>
<p>注意，测试密钥有请求频率限制，点击下方链接可获取正式api_key.</p>
<p><a href="https://51fkba.com/shop/O7KB3JFG" target="_blank" rel="noopener noreferrer">密钥购买链接<ExternalLinkIcon/></a></p>
<p>备用支付方式</p>
<img src="https://bydci.oss-cn-beijing.aliyuncs.com/2024/11/4/oss524d35f7-7380-81f0-773f-5104689c1883.jpg" width="200px">
<p>支付时请<strong>备注您的邮箱地址</strong> 密钥将于付款后1小时内发送到邮箱</p>
</div></template>


