---
title: 前言
slug: /Leetcode
---

这里是一些 LeetCode 题解。

主要是使用 Go 语言写的，混有一些 C++ 代码。

由于 Go 语言项目必须有 package，对刷题有些不友好（不同题目可能会有同名的函数），如果每道题都新建不同的 package 又过于繁琐，因此我在刷题过程中主要是在用 [goplus](https://github.com/goplus/gop) 来完成的。

使用 goplus 的优劣如下：

- **几乎** 完全兼容 go 语言（不兼容的地方对刷题也没啥影响）
- 代码可「脚本化」，文件之间不会互相影响（但同时其也不能引用其他文件，链表、二叉树等数据结构需要每个文件都重新定义）
- 有 VSCode 扩展，提供了基础的补全功能（但没有错误提示，运行时如果出现错误，提示也不太友好）

涉及的一些数据结构定义如下，就不在代码之中赘述了：

```go title="ListNode"
type ListNode struct {
	Val  int
	Next *ListNode
}
```

```go title="TreeNode"
type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}
```

此外，顺序完成 LeetCode 的题目可能并非最优解，推荐大家寻找一份符合自己需求的刷题顺序。

刷题过程中参考了很多其他人的代码、题解，受益匪浅，在此一并致以感谢。

halfrost 的 [LeetCode Cookbook](https://books.halfrost.com/leetcode/) 是一份非常好的 go 语言题解，题解非常多且都已经 beats 100%，在此一并推荐。


题解里面的所有题目版权均归 [LeetCode](https://leetcode.com/) 和 [力扣中国](https://leetcode-cn.com/) 所有
