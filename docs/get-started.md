# 快速开始

当前接口仅限个人起名时参考使用，所有数据均来源于网络收集，非网站原创。

## 接口地址

请求地址：`https://name.one-api.club/app/name/create`

请求方式：`POST`

返回格式：`JSON`

## 请求参数

| 参数名称 | 必填 | 类型 | 示例 | 说明 |
| :----: | :----: | :----: | :----: | :----: | 
| api_key | 是 | string | xxxxx | 接口凭证 | 
| xing | 是 | string | 李 | 姓 | 
| sex | 是 | string | 1 | 性别 1男；2女 | 
| date | 是 | date | 2024-2-22 12:00 | 出生时间 |

## 响应示例

```
{
    "errcode": 0,
    "solar_date": [
        "2024",
        "02",
        "22",
        "12",
        "00"
    ],
    "lunar_date": [
        2024,
        "正月",
        "十三",
        "甲辰",
        1,
        13,
        "龙",
        0
    ],
    "bazi_data": {
        "birthday": "农历：2024年1月13日12时00分",
        "todaysizhu": [
            "甲辰",
            "丙寅",
            "戊午",
            "丁巳",
            "<子丑>"
        ],
        "shengxiao": "龙",
        "qiyun": "九字算命:6岁1月行运",
        "sigong": "东四宫之震宫",
        "num": 8,
        "nayin": "佛灯火",
        "taiyuan": "丁巳",
        "minggong": "癸酉",
        "shengong": "癸酉",
        "wuxing": "五行缺金水",
        "yearGZ": [
            "甲",
            "辰"
        ],
        "monthGZ": [
            "丙",
            "寅"
        ],
        "dayGZ": [
            "丙",
            "辰"
        ],
        "hourGZ": [
            "甲",
            "午"
        ],
        "kongwang": "子丑",
        "bazifenxi": "身旺",
        "bazinayin": [
            "佛灯火",
            "炉中火",
            "砂中土",
            "砂中金"
        ],
        "zanggan": [
            "乙戊癸",
            "甲丙戊",
            "乙戊癸",
            "丁己"
        ],
        "sizhu_10shen": [
            "偏印(枭)",
            "比肩(比)",
            "日主",
            "偏印(枭)"
        ],
        "xingyun": [
            "冠带",
            "长生",
            "冠带",
            "帝旺"
        ],
        "suggest": "姓氏李的五行属性是木，姓名学笔画是7画。起名宜用【金土土,金土金,金水金,金金土】三才配置佳，五格笔划组合80分以上的字来起名。"
    },
    "name_list": [
        {
            "id": "269011",
            "surname_map": "李",
            "name": "思锐",
            "sex": "1",
            "is_single": "2",
            "first_name": "思",
            "second_name": "锐",
            "surname_stroke": "7",
            "first_stroke": "9",
            "second_stroke": "15",
            "sounds_score": "100",
            "popular_score": "97",
            "culture_ids": "561049,367869,1160893,520902",
            "three_five_score": "99",
            "eight_score": "88",
            "tian": "8",
            "ren": "16",
            "di": "24",
            "zong": "31",
            "wai": "16",
            "five_grid_tian": "（八卦之数）八卦之数，乾坎艮震，巽离坤兑，无穷无尽。　",
            "five_grid_di": "（掘藏得金）家门余庆，金钱丰盈，白手成家，财源广进。　",
            "five_grid_ren": "（厚重） 厚德载物，安富尊荣，财官双美，功成名就。",
            "five_grid_wai": "（厚重） 厚德载物，安富尊荣，财官双美，功成名就。",
            "five_grid_zong": "（春日花开）智勇得志，博得名利，统领众人，繁荣富贵。",
            "five_analysis_tian": "吉",
            "five_analysis_di": "大吉",
            "five_analysis_ren": "大吉",
            "five_analysis_wai": "大吉",
            "five_analysis_zong": "大吉",
            "sancai": "金土火",
            "sancai_jixiong": "平",
            "luck_god_score": "88",
            "zodiac_score": "83",
            "total_bihua": "31",
            "xingzuo_score": "100",
            "lable_num": "9",
            "total_score": "96",
            "expert_dianping": "<span class=\"j_color\">金</span><span class=\"j_color\">金</span>组合，两<span class=\"j_color\">金</span>比和，<span class=\"j_color\">金</span>旺。这种组合的人性格刚强，正义感强，有钢铁般的意志。其人意志坚定，有突破万难之势，但耐性不佳，若能修身养性，稳健发展，则可以开创一番属于自己的事业。",
            "wuge_suggest": null,
            "zhouyi_suggest": null,
            "has_explain": "1",
            "wuxing": [
                "木",
                "金",
                "金"
            ]
        },
        {
            "id": "256464",
            "surname_map": "李",
            "name": "繁泽",
            "sex": "1",
            "is_single": "2",
            "first_name": "繁",
            "second_name": "泽",
            "surname_stroke": "7",
            "first_stroke": "17",
            "second_stroke": "17",
            "sounds_score": "100",
            "popular_score": "96",
            "culture_ids": "270854,129925,252073,427980",
            "three_five_score": "85",
            "eight_score": "100",
            "tian": "8",
            "ren": "24",
            "di": "34",
            "zong": "41",
            "wai": "18",
            "five_grid_tian": "（八卦之数）八卦之数，乾坎艮震，巽离坤兑，无穷无尽。　",
            "five_grid_di": "（破家） 破家之身，见识短小，辛苦遭逢，灾祸至极。",
            "five_grid_ren": "（掘藏得金）家门余庆，金钱丰盈，白手成家，财源广进。　",
            "five_grid_wai": "（铁镜重磨）权威显达，博得名利，且养柔德，功成名就。",
            "five_grid_zong": "（有德） 纯阳独秀，德高望重，和顺畅达，博得名利。此数为最大好运数。　",
            "five_analysis_tian": "吉",
            "five_analysis_di": "大凶",
            "five_analysis_ren": "大吉",
            "five_analysis_wai": "大吉",
            "five_analysis_zong": "大吉",
            "sancai": "金火火",
            "sancai_jixiong": "凶",
            "luck_god_score": "88",
            "zodiac_score": "68",
            "total_bihua": "41",
            "xingzuo_score": "100",
            "lable_num": "9",
            "total_score": "95",
            "expert_dianping": "<span class=\"s_color\">水</span><span class=\"s_color\">水</span>组合，两<span class=\"s_color\">水</span>比和，<span class=\"s_color\">水</span>旺。这种组合的人有智谋，有才华，做事都能经过仔细考虑，观察力强。其人意志坚定，为自己理想不断奋斗，耐性佳，能忍受艰苦，若能团结和信任他人，则必定会取得大的成功。",
            "wuge_suggest": null,
            "zhouyi_suggest": null,
            "has_explain": "1",
            "wuxing": [
                "木",
                "水",
                "水"
            ]
        },
        {
            "id": "313134",
            "surname_map": "李",
            "name": "哲希",
            "sex": "1",
            "is_single": "2",
            "first_name": "哲",
            "second_name": "希",
            "surname_stroke": "7",
            "first_stroke": "10",
            "second_stroke": "7",
            "sounds_score": "96",
            "popular_score": "97",
            "culture_ids": "387579,1134297,956112,94891",
            "three_five_score": "84",
            "eight_score": "83",
            "tian": "8",
            "ren": "17",
            "di": "17",
            "zong": "24",
            "wai": "8",
            "five_grid_tian": "（八卦之数）八卦之数，乾坎艮震，巽离坤兑，无穷无尽。　",
            "five_grid_di": "（刚强） 权威刚强，突破万难，如能容忍，必获成功。　",
            "five_grid_ren": "（刚强） 权威刚强，突破万难，如能容忍，必获成功。　",
            "five_grid_wai": "（八卦之数）八卦之数，乾坎艮震，巽离坤兑，无穷无尽。　",
            "five_grid_zong": "（掘藏得金）家门余庆，金钱丰盈，白手成家，财源广进。　",
            "five_analysis_tian": "吉",
            "five_analysis_di": "半吉",
            "five_analysis_ren": "半吉",
            "five_analysis_wai": "吉",
            "five_analysis_zong": "大吉",
            "sancai": "金金金",
            "sancai_jixiong": "凶",
            "luck_god_score": "93",
            "zodiac_score": "83",
            "total_bihua": "24",
            "xingzuo_score": "100",
            "lable_num": "7",
            "total_score": "94",
            "expert_dianping": "<span class=\"h_color\">火</span><span class=\"s_color\">水</span>组合，<span class=\"s_color\">水</span>克<span class=\"h_color\">火</span>，<span class=\"s_color\">水</span>旺。这种组合的人虽然聪明机智，但凡事好争好斗，容易得罪人，常会发生无谓的纠纷。其人意志不坚定，易受迷惑，耐性也不佳，常会遭受意外的失败和打击。",
            "wuge_suggest": null,
            "zhouyi_suggest": null,
            "has_explain": "0",
            "wuxing": [
                "木",
                "火",
                "水"
            ]
        },
        {
            "id": "85977",
            "surname_map": "李",
            "name": "崇义",
            "sex": "1",
            "is_single": "2",
            "first_name": "崇",
            "second_name": "义",
            "surname_stroke": "7",
            "first_stroke": "11",
            "second_stroke": "13",
            "sounds_score": "100",
            "popular_score": "100",
            "culture_ids": "161069,1211267,1134240,1355080",
            "three_five_score": "88",
            "eight_score": "88",
            "tian": "8",
            "ren": "18",
            "di": "24",
            "zong": "31",
            "wai": "14",
            "five_grid_tian": "（八卦之数）八卦之数，乾坎艮震，巽离坤兑，无穷无尽。　",
            "five_grid_di": "（掘藏得金）家门余庆，金钱丰盈，白手成家，财源广进。　",
            "five_grid_ren": "（铁镜重磨）权威显达，博得名利，且养柔德，功成名就。",
            "five_grid_wai": "（破兆） 家庭缘薄，孤独遭难，谋事不达，悲惨不测。",
            "five_grid_zong": "（春日花开）智勇得志，博得名利，统领众人，繁荣富贵。",
            "five_analysis_tian": "吉",
            "five_analysis_di": "大吉",
            "five_analysis_ren": "大吉",
            "five_analysis_wai": "凶",
            "five_analysis_zong": "大吉",
            "sancai": "金金火",
            "sancai_jixiong": "凶",
            "luck_god_score": "88",
            "zodiac_score": "83",
            "total_bihua": "31",
            "xingzuo_score": "100",
            "lable_num": "9",
            "total_score": "96",
            "expert_dianping": "<span class=\"t_color\">土</span><span class=\"m_color\">木</span>组合，<span class=\"m_color\">木</span>克<span class=\"t_color\">土</span>，<span class=\"m_color\">木</span>旺。这种组合的人心底善良，但行动缓慢，容易错失良机。其人意志不够坚定，思想变化大，但耐性尚佳，能忍受辛勤劳苦的日子，不适合独立发展。",
            "wuge_suggest": null,
            "zhouyi_suggest": null,
            "has_explain": "1",
            "wuxing": [
                "木",
                "土",
                "木"
            ]
        },
        {
            "id": "284431",
            "surname_map": "李",
            "name": "少晨",
            "sex": "1",
            "is_single": "2",
            "first_name": "少",
            "second_name": "晨",
            "surname_stroke": "7",
            "first_stroke": "4",
            "second_stroke": "11",
            "sounds_score": "100",
            "popular_score": "97",
            "culture_ids": "1079642,929489,896479,1181771",
            "three_five_score": "85",
            "eight_score": "88",
            "tian": "8",
            "ren": "11",
            "di": "15",
            "zong": "22",
            "wai": "12",
            "five_grid_tian": "（八卦之数）八卦之数，乾坎艮震，巽离坤兑，无穷无尽。　",
            "five_grid_di": "（福寿） 福寿圆满，富贵荣誉，涵养雅量，德高望重。",
            "five_grid_ren": "（旱苗逢雨）万物更新，调顺发达，恢弘泽世，繁荣富贵。　",
            "five_grid_wai": "（掘井无泉）无理之数，发展薄弱，虽生不足，难酬志向。",
            "five_grid_zong": "（秋草逢霜）秋草逢霜，虽出豪杰，人生波折。",
            "five_analysis_tian": "吉",
            "five_analysis_di": "大吉",
            "five_analysis_ren": "大吉",
            "five_analysis_wai": "凶",
            "five_analysis_zong": "凶",
            "sancai": "金木土",
            "sancai_jixiong": "凶",
            "luck_god_score": "93",
            "zodiac_score": "83",
            "total_bihua": "22",
            "xingzuo_score": "100",
            "lable_num": "8",
            "total_score": "96",
            "expert_dianping": "<span class=\"j_color\">金</span><span class=\"h_color\">火</span>组合，<span class=\"h_color\">火</span>克<span class=\"j_color\">金</span>，<span class=\"h_color\">火</span>旺。这种组合的人主观意识较重，大都不甘屈于人下，处事急躁，容易招惹是否。其人意志不够坚定，常有与身份不相应之企图，但耐性尚佳，思想高远，可得一时的成功。",
            "wuge_suggest": null,
            "zhouyi_suggest": null,
            "has_explain": "1",
            "wuxing": [
                "木",
                "金",
                "火"
            ]
        }
    ],
    "shengxiao": "龙",
    "xingzuo": "双鱼",
    "xingzuo_data": {
        "id": "2",
        "xingzuo": "双鱼",
        "xingzuo_character": "特点：自觉、唯美<br>\n        弱点：畏缩、逃避困难<br>\n        爱情：爱情生活充满神秘色彩。<br>\n        柔情似水的双鱼座女生，天生浪漫且富有幻想，对众多男生来说有着一种特别的魅力。天真可爱，是大多数双鱼女的评价标签。或许正因为这样让人怜爱的个性，往往是异性朋友圈中的小公主。对生活，双鱼女充满着积极向上的热情，只是缺少了点应变能力，需要别人的保护，并习惯依赖他人。",
        "xingzuo_suggest": "宝宝的星座为双鱼座，起名宜用含有爱学习、勇敢、毅力、爱、情商高、正直、领导力、宽容、乐观、信仰、激情等名字寓意的字起名为吉，可弥补宝宝性格缺点。",
        "xingzuo_target": "爱学习、勇敢、毅力、爱、情商高、正直、领导力、宽容、乐观、信仰、激情",
        "xingzuo_time": "2月19日-3月20日"
    },
    "shengxiao_data": {
        "id": "10",
        "shengxiao": "龙",
        "shengxiao_character": "①勇往直前，有旺盛的进取心。\r<BR>②专心致志，果断肯干。\r<BR>③孝顺，慷慨，善于理财。\r<BR>④聪明，有才能，气度高。\r<BR>弱点：有时容易急躁，盛气凌人，主观固执，约显争强好胜，不服输。",
        "shengxiao_dizhi": [
            "是古代传说中的神异动物，逢雨遇水，就能凌云升空，有冲天之势",
            "植物",
            "的地支是辰，辰戌相冲，辰卯相害"
        ],
        "shengxiao_quedian": [
            {
                "shortcoming": "自傲",
                "make_up": "h,p,q,r"
            },
            {
                "shortcoming": "没耐心",
                "make_up": "g,o,w"
            },
            {
                "shortcoming": "自私",
                "make_up": "i,o,t"
            }
        ],
        "shengxiao_suggest": "宝宝生肖属相为龙，起名宜有水、金、玉、白、赤、月、鱼、酉、人、氵、钅、亻等部首为吉，增加宝宝运势，以保万事顺利。",
        "shengxiao_youdian": [
            "聪敏",
            "活泼",
            "才智",
            "主动"
        ]
    },
    "left_num": 88,
}
```

响应参数说明

| 参数名称 | 说明 |
| :----: | :----: | 
| solar_date | 公历时间 | 
| lunar_date | 农历时间 | 
| shengxiao | 生肖 | 
| xingzuo | 星座 | 
| bazi_data | 八字信息 | 
| name_list | 名字列表 默认每次请求返回5条数据 |  
| xingzuo_data | 星座建议 |  
| shengxiao_data | 生肖建议 |  
| left_num | 密钥剩余请求次数 |  

## 获取密钥

本接口仅支持通过密钥 `api_key`校验权限，按照请求次数扣除额度

测试密钥： `ZHRB-4WVK-51HS`

注意，测试密钥有请求频率限制，点击下方链接可获取正式api_key.

[200次密钥链接][1]  [1000次密钥链接][2]  


[1]: http://shop.51fkba.com/details/AECE8C94
[2]: http://shop.51fkba.com/details/794263E5