---
title: 'Using find with delete flag'
blurb: 'Nice command Unix find'
description: 'Nice command Unix find.'
publishedAt: '2021-09-07'
editedAt: '2021-09-07'
status: 're'
---


When you need to remove some files in batch, use this:

```bash
find . -name "*.Identifier" -delete
```

Find like name suggest, will find every file with extension `.Identifier`  and passing the flag `-delete` will remove all them.

Easy peasy, very usefull.

> Written with [StackEdit](https://stackedit.io/).
<!--stackedit_data:
eyJoaXN0b3J5IjpbNzM3MTIxNjcsNjIxOTUyNDAsLTU0MjM4MD
E4MCw5MTc3Mzg1ODIsLTcyMjU4OTM3M119
-->