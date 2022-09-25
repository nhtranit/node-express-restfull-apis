## endpoint eetra

"/abc" <=> /abc
"/ab>cd" <=> /acd or /abcd => b? co b hay khong
"ab+cd" <=> 1 hay nhieu b : /abcd, /abbbbbcd, /abbcd
"ab*cd" <=> '/ab' + anything + 'cd': /abexamplecd, /abtestcd
/a/ <=> RegExp anything that contains "a"
/.*fly$/ <=> RegExp anything that and with fly
